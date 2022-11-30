import { MyModalContext } from '../../../contexts/MyModal.context'
import { archivApi } from '../../../store/api/archiv/archiv.api'
import { Field, isErrorWithMessage, isFetchBaseQueryError } from '../../UI'
import { IArchivDto } from './Archiv.dto'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const UpdateArhiv: FC = () => {
	const { updateId, onClose } = useContext(MyModalContext)
	const { enqueueSnackbar } = useSnackbar()
	const [updateArchiv, { isLoading }] = archivApi.useUpdateArchivMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IArchivDto>({ mode: 'onChange' })

	const submitHanlder: SubmitHandler<IArchivDto> = async (data) => {
		try {
			await updateArchiv({ data, id: updateId })
				.unwrap()
				.then(() => onClose())
		} catch (e) {
			if (isFetchBaseQueryError(e)) {
				const errMsg =
					// @ts-ignore
					'error' in e ? e.error : JSON.stringify(e.data.message)
				// @ts-ignore
				enqueueSnackbar(errMsg, { variant: 'error' })
			} else if (isErrorWithMessage(e)) {
				enqueueSnackbar(e.message, { variant: 'error' })
			}
		}
	}

	return (
		<form onSubmit={handleSubmit(submitHanlder)}>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
				<Typography variant='h4'>Введите название архива</Typography>
				<Field
					{...register('name', {
						required: 'Название обязательно'
					})}
					type='text'
					error={errors.name}
				/>
				<Button
					disabled={isLoading}
					color='success'
					type='submit'
					onClick={() => submitHanlder}
				>
					{isLoading && <span>загрузка...</span>}
					Отправить
				</Button>
			</Box>
		</form>
	)
}

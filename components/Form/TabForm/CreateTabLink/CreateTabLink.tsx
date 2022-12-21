import { MyModalContext } from '../../../../contexts/MyModal.context'
import { tabsApi } from '../../../../store/api/tabs/tabs.api'
import { Field, isErrorWithMessage, isFetchBaseQueryError } from '../../../UI'
import { ICreateTabLinkDto } from './CreateTabLink.dto'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useSnackbar } from 'notistack'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const CreateTabLink: FC = () => {
	const { updateId, onClose } = useContext(MyModalContext)
	const { enqueueSnackbar } = useSnackbar()
	const [createTabLink] = tabsApi.useCreateTabLinkMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ICreateTabLinkDto>({ mode: 'onChange' })

	const submitHanlder: SubmitHandler<ICreateTabLinkDto> = async (data) => {
		try {
			const formData = new FormData()
			const file = data.link[0]
			formData.append('name', data.name)
			formData.append('file', file)
			await createTabLink({
				id: updateId,
				data: formData
			})
				.unwrap()
				.then(() => onClose())
		} catch (err) {
			if (isFetchBaseQueryError(err)) {
				const errMsg =
					// @ts-ignore
					'error' in err ? err.error : JSON.stringify(err.data.message)
				// @ts-ignore
				enqueueSnackbar(errMsg, { variant: 'error' })
			} else if (isErrorWithMessage(err)) {
				enqueueSnackbar(err.message, { variant: 'error' })
			}
		}
	}

	return (
		<form onSubmit={handleSubmit(submitHanlder)}>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
				<Field
					{...register('name', {
						required: 'Введите название'
					})}
					error={errors.name}
					type='text'
					placeholder='Название'
				/>
				<Field
					{...register('link', {
						required: 'Выберите файл'
					})}
					type='file'
					error={errors.link}
				/>
				<Button
					sx={{ my: '15px' }}
					color='success'
					type='submit'
					onClick={() => submitHanlder}
				>
					Отправить
				</Button>
			</Box>
		</form>
	)
}

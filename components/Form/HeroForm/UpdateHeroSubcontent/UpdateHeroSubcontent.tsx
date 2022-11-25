import { MyModalContext } from '../../../../contexts/MyModal.context'
import { heroApi } from '../../../../store/api/hero/hero.api'
import { tokens } from '../../../../theme'
import { ErrorDisplayed, Field } from '../../../UI'
import { ISubcontentDto } from './Subcontent.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GrUpdate } from 'react-icons/gr'

export const UpdateHeroSubcontent: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { onClose, updateId } = useContext(MyModalContext)
	const [updateHeroSubcontent, { error, isSuccess }] =
		heroApi.useUpdateSubContentMutation()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ISubcontentDto>({ mode: 'onChange' })

	const submitHandler: SubmitHandler<ISubcontentDto> = (data) => {
		updateHeroSubcontent({ ...data, id: updateId })
			.unwrap()
			.then(() => onClose())
	}

	return (
		<form onSubmit={handleSubmit(submitHandler)}>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
				<Typography variant='h5' color={colors.grey[100]}>
					Обновление подконтета в Hero
				</Typography>
				<Field {...register('title')} placeholder='title' type='text' />
				<Field
					{...register('description')}
					placeholder='description'
					type='text'
				/>
				<Button
					color='success'
					sx={{
						bgcolor: colors.greenAccent[600],
						padding: '15px',
						':hover': { bgcolor: colors.blueAccent[900] }
					}}
					type='submit'
				>
					<GrUpdate />
				</Button>
				<ErrorDisplayed error={error} />
			</Box>
		</form>
	)
}

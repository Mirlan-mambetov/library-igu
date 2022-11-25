import { MyModalContext } from '../../../../contexts/MyModal.context'
import { heroApi } from '../../../../store/api/hero/hero.api'
import { tokens } from '../../../../theme'
import { ErrorDisplayed, Field } from '../../../UI'
import { ICreateHeroSubcontentDto } from './CreateSubContent.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GrUpdate } from 'react-icons/gr'

export const CreateHeroSubcontent: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { onClose, updateId } = useContext(MyModalContext)
	const [createHeroSubcontent, { error, isSuccess, isLoading }] =
		heroApi.useCreateSubContentMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ICreateHeroSubcontentDto>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<ICreateHeroSubcontentDto> = (data) => {
		createHeroSubcontent({ ...data, heroId: updateId })
			.unwrap()
			.then(() => onClose())
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
				<Typography variant='h5' color={colors.grey[100]}>
					Создание подконтета для Hero
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
					disabled={isLoading}
				>
					<GrUpdate />
				</Button>
				<ErrorDisplayed error={error} />
			</Box>
		</form>
	)
}

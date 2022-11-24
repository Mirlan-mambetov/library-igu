import { MyModalContext } from '../../../contexts/MyModal.context'
import { UploadService } from '../../../services/uploadService/uploadService'
import { Field } from '../../UI'
import { IHeroImageDto } from './Hero.dto'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import { useContext, FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BsCloudUpload } from 'react-icons/bs'

export const UpdateHeroImageForm: FC = () => {
	const { updateId, onClose } = useContext(MyModalContext)
	const { handleSubmit, register } = useForm<IHeroImageDto>()

	const submitHandler: SubmitHandler<IHeroImageDto> = async (data) => {
		const formData = new FormData()
		// @ts-ignore
		formData.append("background", data.background[0])
		await UploadService.upload({
			id: updateId,
			url: "hero/image",
			file: formData
		})
		onClose()
	}

	return (
		// @ts-ignore
		<form onSubmit={handleSubmit(submitHandler)}>
			<label htmlFor='file-input'>
				<Field
					{...register('background')}
					style={{ display: 'none' }}
					type='file'
					id='file-input'
				/>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
					<Button
						variant='contained'
						component='span'
						color='success'
						sx={{ color: '#fff', display: 'flex', gap: '5px' }}
					>
						<span>выберите файл для загрузки</span>
					</Button>
					<Button
						variant='contained'
						color='success'
						sx={{ color: '#fff' }}
						type='submit'
					>
						<BsCloudUpload />
						Загрузить
					</Button>
				</Box>
			</label>
		</form>
	)
}

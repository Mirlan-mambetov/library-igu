import { MyModalContext } from '../../../contexts/MyModal.context'
import { UploadService } from '../../../services/uploadService/uploadService'
import { heroApi } from '../../../store/api/hero/hero.api'
import { Field } from '../../UI'
import { IHeroImageDto } from './Hero.dto'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import { useContext, FC, useState, ChangeEvent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BsCloudUpload } from 'react-icons/bs'

export const UpdateHeroImageForm: FC = () => {
	const { updateId, onClose } = useContext(MyModalContext)
	const { handleSubmit, register } = useForm<IHeroImageDto>()
	const [updateHeroImage, { isSuccess }] = heroApi.useUpdateHeroImageMutation()
	// const [file, setFile] = useState<File>()

	const submitHandler: SubmitHandler<IHeroImageDto> = async (data) => {
		// const file = data.background
		// const formData = new FormData()
		// formData.append('background', file[0])
		// @ts-ignore
		updateHeroImage({ id: updateId, background: data.background })
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

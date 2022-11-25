import { IUpload } from '../../../../services/uploadService/media.interface'
import { UploadService } from '../../../../services/uploadService/uploadService'
import { Field } from '../Field'
import { IUploadFieldProps } from './UploadField.props'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { FC, ChangeEvent, Dispatch, SetStateAction } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { useMutation } from 'react-query'

export const UploadField: FC<IUploadFieldProps> = ({
	id,
	onChange,
	url,
	setValue,
	setIsChosen,
	isUploaded,
	method
}) => {
	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) => UploadService.upload(id, url, setValue, data, method),
		{
			onSuccess: ({ data }) => {
				onChange(data)
			},
			onError: (error: any) => {
				console.log(error)
			}
		}
	)
	const fileUploaded = async (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files
		if (!file?.length) return
		setIsChosen && setIsChosen(true)

		const formData = new FormData()
		formData.append('background', file[0])

		await mutateAsync(formData)
	}
	return (
		<Box>
			<label htmlFor='file-input'>
				<Field
					onChange={fileUploaded}
					style={{ display: 'none' }}
					type='file'
					id='file-input'
					required
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
						sx={{
							color: '#fff',
							display: 'flex',
							gap: '12px',
							alignItems: 'center'
						}}
						type='submit'
					>
						<BsCloudUpload />
						Загрузить
					</Button>
				</Box>
			</label>
			{!isUploaded ? 'Идет загрузка файла' : 'Файл не выбран!'}
		</Box>
	)
}

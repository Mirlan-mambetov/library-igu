import Box from '@mui/material/Box'
import {FC} from 'react'
import { useForm } from 'react-hook-form'
import { Field } from '../Field'
import { IUploadFieldProps } from './UploadField.props'

export const UploadField: FC<IUploadFieldProps> = ({folder, name}) => {
	const {register} = useForm()
  return (
    <Box>
			<label>
				<span className='sr-only'>Выбери файл</span>
				<Field
					{...register(name)}
					accept='image/jpg, image/png, image/jpeg'
				/>
			</label>
		</Box>
  )
}

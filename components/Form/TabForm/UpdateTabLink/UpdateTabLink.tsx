import { MyModalContext } from '../../../../contexts/MyModal.context'
import { tabsApi } from '../../../../store/api/tabs/tabs.api'
import { tokens } from '../../../../theme'
import { Field, UploadField } from '../../../UI'
import { ErrorDisplayed } from '../../../UI'
import { IUpdateTabLinkDto } from './UpdateTabLink.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FC, useState } from 'react'
import { useContext } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

export const UpdateTabLink: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { updateId, onClose } = useContext(MyModalContext)
	const [updateTabLink, { isSuccess, error }] =
		tabsApi.useUpdateTabLinkMutation()

	const {
		register,
		handleSubmit,
		watch,
		control,
		setValue,
		formState: { errors }
	} = useForm<IUpdateTabLinkDto>({ mode: 'onChange' })

	console.log(updateId)

	const filePath = watch('link')
	const [file, setFile] = useState('')
	// END
	const handleUpload = (background: string) => {
		setValue('link', background)
		setFile(filePath)
	}

	const [isChosen, setIsChosen] = useState(false)
	const [percent, setIsPercent] = useState(0)
	const [isUploaded, setIsUploaded] = useState(false)
	const setProgressPercent = (val: number) => {
		setIsPercent(val)
		if (val === 100) setIsUploaded(true)
	}

	const submitHanlder: SubmitHandler<IUpdateTabLinkDto> = (data) => {
		updateTabLink({ id: updateId, name: data.name })
			.unwrap()
			.then(() => onClose())
	}

	return (
		<form onSubmit={handleSubmit(submitHanlder)}>
			<ErrorDisplayed error={error} />
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
				<Field
					{...register('name', {
						required: 'Название обязательно'
					})}
					type='text'
					placeholder='Название'
				/>
				{!isUploaded && (
					<Controller
						control={control}
						name='link'
						render={() => (
							<UploadField
								onChange={handleUpload}
								setValue={setProgressPercent}
								id={updateId}
								isUploaded={isUploaded}
								setIsChosen={setIsChosen}
								url='tabs/tablink/image'
								method='PUT'
								typeFile='file'
								percent={percent}
								error={errors.link}
							/>
						)}
					/>
				)}
				<Button
					sx={{ my: '15px' }}
					color='success'
					type='submit'
					onClick={() => submitHanlder}
					disabled={!isUploaded}
				>
					Отправить
				</Button>
			</Box>
		</form>
	)
}

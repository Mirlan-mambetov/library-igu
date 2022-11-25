import { MyModalContext } from '../../../contexts/MyModal.context'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import { FC, useContext } from 'react'

export const UpdateFragment: FC<{ id: number; fragmentUpdate: string }> = ({
	id,
	fragmentUpdate
}) => {
	const { onOpen } = useContext(MyModalContext)

	return (
		<CardActions>
			<Button
				color='success'
				size='small'
				onClick={() => onOpen(fragmentUpdate, id)}
			>
				Редактировать
			</Button>
		</CardActions>
	)
}

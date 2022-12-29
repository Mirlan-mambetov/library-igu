import { FC } from 'react'

export const NotifyNew: FC<{ msg?: string }> = ({ msg }) => {
	return (
		<div
			style={{
				position: 'absolute',
				top: '12px',
				right: '0px',
				zIndex: '20',
				fontSize: '10px',
				background: 'red',
				color: '#fff',
				padding: '1px 4px',
				userSelect: 'none'
			}}
		>
			{msg ? msg : 'Новое'}
		</div>
	)
}

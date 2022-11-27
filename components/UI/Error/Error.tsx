import { isFetchBaseQueryError } from '../../../helpers/fetchBaseQueryError'
import { FC } from 'react'

export const ErrorDisplayed: FC<{ error: unknown }> = ({ error }) => {
	return (
		<>
			{isFetchBaseQueryError(error) && (
				<div
					style={{
						display: 'flex',
						maxWidth: '80%',
						marginLeft: 'auto',
						marginRight: 'auto'
					}}
				>
					<span style={{ fontSize: '16px', color: 'red', lineHeight: '21px' }}>
						{/* @ts-ignore */}
						{error.data.message}
					</span>
				</div>
			)}
		</>
	)
}

import { isFetchBaseQueryError } from '../../../helpers/fetchBaseQueryError'
import { FC } from 'react'

export const ErrorDisplayed: FC<{ error: unknown }> = ({ error }) => {
	return (
		<>
			{isFetchBaseQueryError(error) && (
				<span style={{ fontSize: '20px', color: 'red' }}>
					{/* @ts-ignore */}
					{error.data.message}
				</span>
			)}
		</>
	)
}

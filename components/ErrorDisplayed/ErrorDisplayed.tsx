import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { FC } from 'react'

export function isFetchBaseQueryError(
	error: unknown
): error is FetchBaseQueryError {
	return typeof error === 'object' && error != null && 'status' in error
}

const ErrorDisplayed: FC<{ error: unknown }> = ({ error }) => {
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

export default ErrorDisplayed

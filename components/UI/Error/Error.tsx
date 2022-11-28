import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { FC } from 'react'

export function isFetchBaseQueryError(
	error: unknown
): error is FetchBaseQueryError {
	return typeof error === 'object' && error != null && 'status' in error
}

export function isErrorWithMessage(
	error: unknown
): error is { message: string } {
	return (
		typeof error === 'object' &&
		error != null &&
		'message' in error &&
		typeof (error as any).message === 'string'
	)
}

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

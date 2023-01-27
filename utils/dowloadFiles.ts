export const downloadFiles = async (fileUrl: string, fileName: string) => {
	await fetch(process.env.NEXT_PUBLIC_APP_STATIC + fileUrl, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/pdf'
		}
	})
		.then(response => response.blob())
		.then(blob => {
			const url = window.URL.createObjectURL(new Blob([blob]))
			const link = document.createElement('a')
			link.href = url
			link.setAttribute('download', `${fileName}`)
			document.body.appendChild(link)
			link.click()
			link?.parentNode?.removeChild(link)
		})
}

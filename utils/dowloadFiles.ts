export const downloadFiles = async (file: any, fileName: string) => {
	const arr = new Array(file.length)
	for (let i = 0; i < file.length; i++) {
		arr[i] = file.charCodeAt(i)
	}
	const byteArray = new Uint8Array(arr)
	const blob = new Blob([byteArray], { type: 'application/pdf' })

	let link = document.createElement('a')
	let downloadUrl = URL.createObjectURL(blob)
	link.href = downloadUrl
	link.download = fileName
	document.body.appendChild(link)
	link.style.display = 'none'
	link.click()
	URL.revokeObjectURL(downloadUrl)
	document.body.removeChild(link)
}

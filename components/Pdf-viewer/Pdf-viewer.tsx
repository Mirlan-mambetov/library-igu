import { FC, useContext } from 'react'
import { PdfViewContext } from '../../contexts/Pdf-view.context'

import styles from './Pdf-viewer.module.scss'

export const PdfViewer: FC= () => {
	const { handlerClose, file } = useContext(PdfViewContext)
	return (
		<div className={styles.vieweroverlay}>
			<embed
				className={styles.doc}
				src={`${file}?zoom=100&#toolbar=0`}
				type='application/pdf'
			/>
			<div className={styles.close} onClick={handlerClose}>
				&times;
			</div>
		</div>
	)
}

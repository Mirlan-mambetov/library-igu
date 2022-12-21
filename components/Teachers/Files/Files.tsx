import { ITeachersWorks } from '../../../interfaces/teachers.interface'
import { teachersApi } from '../../../store/api/teachers/teachers.api'
import { downloadFiles } from '../../../utils/dowloadFiles'
import { formatDate } from '../../../utils/formatDate.utils'
import { Title } from '../../Title/Title'
import styles from './TeachersFiles.module.scss'
import { FC } from 'react'

export const TeachersFiles: FC<ITeachersWorks> = ({
	id,
	authors,
	name,
	category,
	createdAt,
	description,
	downloaded,
	file,
	views
}) => {
	const [updateViews] = teachersApi.useUpdateViewsMutation()

	const updateView = async () => {
		await updateViews(id)
	}

	return (
		<div className={styles.file}>
			<div className={styles.fileText}>
				<Title type='h4' className={styles.authors}>
					{authors}
				</Title>
				<Title type='h4' className={styles.name}>
					{name}
				</Title>
				<div className={styles.title}>{description}</div>
			</div>
			<div className={styles.info}>
				<div className={styles.infoItem}>
					<span>Скачано: {downloaded}</span>
				</div>
				<div className={styles.infoItem}>
					<span>Просмотров: {views}</span>
				</div>
				<div className={styles.infoItem}>
					<span>Категория: {category.name}</span>
				</div>
				<div className={styles.infoItem}>
					<button
						className='btn-download'
						title='Скачать'
						onClick={() =>
							downloadFiles(
								`${process.env.NEXT_PUBLIC_APP_STATIC}${file}`,
								`${file}`
							)
						}
						disabled
					>
						<svg
							width='15'
							height='16'
							viewBox='0 0 15 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M7.37366 11.5384C7.38867 11.5587 7.40784 11.5752 7.42973 11.5865C7.45162 11.5979 7.47565 11.6038 7.5 11.6038C7.52435 11.6038 7.54838 11.5979 7.57027 11.5865C7.59216 11.5752 7.61133 11.5587 7.62634 11.5384L9.87233 8.51919C9.95455 8.40839 9.88035 8.24433 9.74599 8.24433H8.26003V1.0341C8.26003 0.940352 8.18783 0.863647 8.0996 0.863647H6.89639C6.80816 0.863647 6.73596 0.940352 6.73596 1.0341V8.2422H5.25401C5.11965 8.2422 5.04545 8.40626 5.12767 8.51706L7.37366 11.5384ZM14.8396 10.7926H13.6364C13.5481 10.7926 13.4759 10.8693 13.4759 10.9631V14.2443H1.52406V10.9631C1.52406 10.8693 1.45187 10.7926 1.36364 10.7926H0.160428C0.0721925 10.7926 0 10.8693 0 10.9631V15.1818C0 15.559 0.286765 15.8636 0.641711 15.8636H14.3583C14.7132 15.8636 15 15.559 15 15.1818V10.9631C15 10.8693 14.9278 10.7926 14.8396 10.7926Z'
								fill='#699BF7'
							/>
						</svg>
					</button>
				</div>
				<div className={styles.infoItem}>
					<a
						href={`${process.env.NEXT_PUBLIC_APP_STATIC}${file}`}
						target='_blank'
						title='Просмотреть'
						rel='noreferrer'
						onClick={updateView}
					>
						<svg
							width='15'
							height='16'
							viewBox='0 0 15 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M1.07345 0.863647H12.8814L13.9549 1.93969V7.6427C13.617 7.4771 13.2544 7.36805 12.8814 7.31989V1.93969H7.51417V13.647L6.3119 14.8522H1.07345L0 13.7761V1.93969L1.07345 0.863647ZM1.07345 13.7761H6.44071V1.93969H1.07345V13.7761ZM12.2148 8.39808C11.7646 8.41477 11.3256 8.54345 10.9374 8.77254H10.9052C10.5946 8.96046 10.325 9.20933 10.1127 9.50423C9.90033 9.79912 9.74959 10.134 9.66949 10.4887C9.5894 10.8434 9.5816 11.2107 9.64655 11.5685C9.71151 11.9263 9.84789 12.2673 10.0475 12.571L7.51417 15.0997L8.27632 15.8636L10.7989 13.3242C11.1478 13.5609 11.5503 13.7094 11.969 13.7546C12.3822 13.8049 12.8014 13.757 13.1927 13.6147C13.5993 13.4776 13.9673 13.2452 14.2662 12.9368C14.556 12.6328 14.7695 12.2639 14.8888 11.8608C15.0048 11.4589 15.0304 11.0363 14.9639 10.6233C14.8893 10.2084 14.7196 9.81645 14.4681 9.47847C14.2166 9.14048 13.8903 8.86567 13.5148 8.6757C13.1111 8.47666 12.6644 8.38126 12.2148 8.39808ZM12.4724 12.6936C12.1024 12.7304 11.7311 12.6376 11.4215 12.4311C11.1548 12.2506 10.946 11.9964 10.8204 11.6994C10.7013 11.4062 10.6714 11.0842 10.7345 10.774C10.7951 10.4598 10.9482 10.171 11.1739 9.94468C11.3996 9.7184 11.6878 9.56501 12.0012 9.50425C12.3106 9.44095 12.6319 9.4709 12.9244 9.59033C13.2206 9.71623 13.474 9.92498 13.6543 10.1929C13.8083 10.4247 13.8998 10.6925 13.92 10.9703C13.9402 11.248 13.8883 11.5263 13.7695 11.778C13.6506 12.0298 13.4688 12.2464 13.2417 12.4068C13.0146 12.5672 12.75 12.6661 12.4735 12.6936H12.4724Z'
								fill='#699BF7'
							/>
						</svg>
					</a>
				</div>
			</div>
			<div className={styles.published}>
				<span>{formatDate(createdAt)}</span>
			</div>
		</div>
	)
}

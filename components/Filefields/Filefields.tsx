import { IArhivsMaterials } from '../../interfaces/archiv.interface'
import { IITemsPaginate } from '../../interfaces/paginate.interface'
import { vestnikApi } from '../../store/api/vestnik/vestnik.api'
import Paginate from '../Paginate/Paginate'
import { File } from './File/File'
// STYLES
import styles from './Filefields.module.scss'
import { FilefieldsProps } from './Filefields.props'
import classNames from 'classnames'
import { FC, useState } from 'react'

export const Filefields: FC<FilefieldsProps> = ({
	orientation = 'column',
	id
}): JSX.Element => {
	const [page, setPage] = useState(1)

	const { data: materials = {} as IITemsPaginate<IArhivsMaterials> } =
		vestnikApi.useFetchMaterialsByArchivQuery({
			id,
			query: { page, limit: 5 }
		})

	const paginateHandler = ({ selected }: { selected: number }) => {
		setPage(selected + 1)
		// router.replace(`?page=${selected + 1}`)
	}

	return (
		<div
			className={classNames(styles.files, {
				[styles.row]: orientation === 'row',
				[styles.column]: orientation === 'column'
			})}
		>
			{materials.items?.map((file) => (
				<File file={file} key={file.id} />
			))}
			<Paginate
				handler={paginateHandler}
				initialPage={page - 1}
				totalPage={materials.meta ? materials.meta.totalPages : 1}
			/>
		</div>
	)
}

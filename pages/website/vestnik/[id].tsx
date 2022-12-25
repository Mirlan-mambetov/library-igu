import { Layout } from '../../../components/Layout/Layout'
import { ArchivsList } from '../../../components/UI'
import { archivApi } from '../../../store/api/archiv/archiv.api'
import { useRouter } from 'next/router'
import { FC } from 'react'

const VestnikArchiv: FC = () => {
	const { query } = useRouter()
	// @ts-ignore
	const { data: arhivs } = archivApi.useGetArchivByIdQuery(+query?.id, {
		skip: !query.id
	})
	return (
		<Layout title={`Архив ${arhivs ? arhivs?.name : ''}`}>
			{arhivs && <ArchivsList data={arhivs} />}
		</Layout>
	)
}
export default VestnikArchiv

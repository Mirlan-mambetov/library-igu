import { MdSearch } from 'react-icons/md'
import FieldComponent from '../../field/Field'
import styles from './mainSearch.module.scss'
import { useContext, useEffect, useState } from 'react'
import { MdDownload } from 'react-icons/md'
import { FaFilePdf } from 'react-icons/fa6'
import { useDebounce } from '../../../hooks/useDebounce'
import { searchService } from '../../../services/search/search.service'
import { SearchType } from '../../../interfaces/search.interface'
import { searchResultEnum } from '../../../interfaces/enum/SearchEnum'
import { vestnikApi } from '../../../store/api/vestnik/vestnik.api'
import { downloadFiles } from '../../../utils/dowloadFiles'
import { PdfViewContext } from '../../../contexts/Pdf-view.context'
// ISearchResult
function MainSearchComponent() {
  const [data, setData] = useState<SearchType | null>(null)
  const [searchTerm, setSearchTerm] = useState<null | string>(null)
  const searchText = useDebounce(searchTerm, 700)
  const [updateViews] = vestnikApi.useUpdateMaterialViewsMutation()
  const [updateDownloaded] = vestnikApi.useUpdateMaterialDownloadedMutation()
  const { handlerOpen } = useContext(PdfViewContext)

  useEffect(() => {
    if (searchText?.length) {
      fetchData(searchText)
    }
  }, [searchText])

  const fetchData = async (searchText: string) => {
    try {
      const data = await searchService.mainSearch(searchText)
      setData(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  const pathMapping = {
    [searchResultEnum.ELIBRARY]: 'elibrary',
    [searchResultEnum.NEWS]: 'news',
    [searchResultEnum.WORKS]: 'works',
    [searchResultEnum.VESTNIK]: 'vestnik'
  }

  return (
    <div className={styles.search}>
      <div className={styles.field}>
        <FieldComponent
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
        />
        <button>
          <MdSearch />
        </button>
      </div>
      {searchText?.length ? (
        <div className={styles.result}>
          {data?.length ? (
            data.map((items) =>
              items.data.map((item) => (
                <div className={styles.items} key={item.id}>
                  <h4 className={styles.name}>{item.name || item.title}</h4>
                  <span className={styles.author}>{item.authors}</span>
                  <p className={styles.description}>{item.description}</p>
                  <small className={styles.category}>
                    {item.category.name}
                  </small>
                  <div className={styles.action}>
                    <button className={styles.button} title="Скачать">
                      <span
                        onClick={() => {
                          updateDownloaded(item.id)
                          downloadFiles(`${item.file}`, item.file)
                        }}
                      >
                        <MdDownload />
                      </span>
                    </button>
                    <button className={styles.button} title="Просмотр">
                      <span
                        onClick={() => {
                          handlerOpen(
                            process.env.NEXT_PUBLIC_APP_STATIC + item.file
                          )
                          updateViews(item.id)
                        }}
                      >
                        <FaFilePdf />
                      </span>
                    </button>
                  </div>
                </div>
              ))
            )
          ) : (
            <span className={styles.empty}>Результатов нет.</span>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default MainSearchComponent

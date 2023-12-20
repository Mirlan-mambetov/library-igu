import { MdSearch } from 'react-icons/md'
import FieldComponent from '../../field/Field'
import styles from './mainSearch.module.scss'

function MainSearchComponent() {
  return (
    <div className={styles.search}>
      <div className={styles.field} title="В разработке">
        <FieldComponent disabled />
        <button disabled>
          <MdSearch />
        </button>
      </div>
    </div>
  )
}

export default MainSearchComponent

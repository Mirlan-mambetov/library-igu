import * as HeroActions from './hero/actions/hero-actions'
import * as PagesActions from './pages/actions/pageActions'
import * as PageActions from './pages/reducers/pageSlice'
import * as ModalActions from './modal/reducers/modalSlice'
import * as BooksCard from './bookscard/booksCardAction'

const Actions = {
  ...HeroActions,
  ...PagesActions,
  ...ModalActions,
  ...PageActions,
  ...BooksCard
}

export default Actions
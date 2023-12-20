import MainSearchComponent from './main/MainSearch'

interface ISearchComponentProps {
  type: 'main' | 'second'
}

function SearchComponent({ type }: ISearchComponentProps) {
  switch (type) {
    case 'main':
      return <MainSearchComponent />
    default:
      return <MainSearchComponent />
  }
}

export default SearchComponent

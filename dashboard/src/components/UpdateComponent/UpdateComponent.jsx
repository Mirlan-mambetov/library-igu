import React from 'react'
import { useSelector } from 'react-redux'

// Components
import {
  BookscardForm,
  FormComponent,
  HeroForm,
  PageForm,
} from '../'

const UpdateComponent = () => {
  const { updateName } = useSelector(state => state.modal)
  switch (updateName) {
    case "updatePage":
      return (
        <FormComponent>
          <PageForm />
        </FormComponent>
      )
    case "updateHero":
      return (
        <FormComponent>
          <HeroForm />
        </FormComponent>
      )
    case "updateImageCards":
      return (
        <FormComponent>
          <BookscardForm />
        </FormComponent>
      )
    default:
      return <h1>Update Component</h1>
  }
}

export default UpdateComponent
import React from 'react'
import { useSelector } from 'react-redux'

// Components
import {
  FormComponent,
  HeroForm,
  PageForm,
} from '../'

const UpdateComponent = () => {
  const { updateName } = useSelector(state => state.modal)
  switch (updateName) {
    case "updatePage":
      return (
        <FormComponent btnContent='Обновить'>
          <PageForm />
        </FormComponent>
      )
    case "updateHero":
      return (
        <FormComponent btnContent='Обновить'>
          <HeroForm />
        </FormComponent>
      )
    default:
      return <h1>Update Component</h1>
  }
}

export default UpdateComponent
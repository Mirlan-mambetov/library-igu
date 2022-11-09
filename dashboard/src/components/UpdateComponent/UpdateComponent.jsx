import React from 'react'
import { useSelector } from 'react-redux'

// Components
import {
  FormComponent,
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
    case "updateHeroImage":
      return (
        <FormComponent>
          <PageForm />
        </FormComponent>
      )
    default:
      return <h1>Update Component</h1>
  }
}

export default UpdateComponent
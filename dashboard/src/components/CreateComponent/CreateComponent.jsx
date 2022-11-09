import React from 'react'
import { useSelector } from 'react-redux'

// Components
import {
  FormComponent,
  PageForm,
} from '../'

const CreateComponent = () => {
  const { createName } = useSelector(state => state.modal)
  switch (createName) {
    case "createPage":
      return (
        <FormComponent>
          <PageForm />
        </FormComponent>
      )
    default:
      return <h1>Create Component</h1>
  }
}

export default CreateComponent
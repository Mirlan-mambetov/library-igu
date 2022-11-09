import React from 'react'
import { useSelector } from 'react-redux'
import CreatePage from './CreatePage/CreatePage'

const CreateComponent = () => {
  const { createName } = useSelector(state => state.modal)
  switch (createName) {
    case "createPage":
      return <CreatePage />
    default:
      return <h1>Create Component</h1>
  }
}

export default CreateComponent
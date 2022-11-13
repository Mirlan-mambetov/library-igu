import { createContext, useState } from 'react'

const SnackbarContext = createContext({
  isDisplayed: false,
  displayMsg: (msg) => { },
  onClose: () => { }
})

export default SnackbarContext

export const SnackbarContextProvider = (props) => {
  const [message, setMessage] = useState("")
  const [isDisplayed, setIsDisplayed] = useState(false)

  const dispalyHandler = (msg) => {
    setMessage(msg)
    setIsDisplayed(true)
    setTimeout(() => {
      closeHanlder()
    }, 3000)
  }
  const closeHanlder = () => {
    clearTimeout()
    setIsDisplayed(false)
    setMessage("")
  }
  return (
    <SnackbarContext.Provider
      value={{
        msg: message,
        isDisplayed,
        displayMsg: dispalyHandler,
        onClose: closeHanlder
      }}
    >
      {props.children}
    </SnackbarContext.Provider>
  )
}
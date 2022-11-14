import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import Actions from "../store/actions"

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(Actions, dispatch)
}
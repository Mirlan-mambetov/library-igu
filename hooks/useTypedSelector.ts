import { TypeRootState } from '../store'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector

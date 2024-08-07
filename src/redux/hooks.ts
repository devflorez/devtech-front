import { TRootState, TAppDispatch } from "./store";
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'

export const useAppDispatch = () => useDispatch<TAppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
export const useAppStore = () => useStore<TRootState>()

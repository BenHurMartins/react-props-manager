import React, { useReducer } from 'react'
import PropsManagerReducer, { Actions } from './PropsManagerReducer'
import { contextFactory } from './utils'

export type PropsManagerContextType = {
  state: any
  getProps: (propsKey: string) => object
  resetProps: () => void
  updateProps: (payload: object) => void
}

interface PropsManagerProviderProps {
  children: React.ReactNode
  propsValue: object
}

const [usePropsContext, PropsManagerContext] =
  contextFactory<PropsManagerContextType>('PropsManager')

const PropsManagerProvider: React.FC<PropsManagerProviderProps> = ({
  children,
  propsValue
}) => {
  const [state, setProps] = useReducer(PropsManagerReducer, propsValue)

  const getProps = (propsKey: string) => state[propsKey] ?? {}

  const resetProps = () => setProps({ type: Actions.RESET })

  const updateProps = (payload: object) =>
    setProps({ type: Actions.UPDATE, payload: payload })

  const value = { state, getProps, resetProps, updateProps }

  return <PropsManagerContext value={value}>{children}</PropsManagerContext>
}

export { PropsManagerProvider, usePropsContext }

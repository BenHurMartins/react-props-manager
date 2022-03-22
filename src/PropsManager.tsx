import React, { createContext, useContext, useReducer } from 'react'

type PropsManagerActionType = { type: string; payload: object }

type PropsManagerContextType = {
  state: any
  setProps: React.Dispatch<PropsManagerActionType>
}

export function createCtx<ContextType>(name: string) {
  const ctx = createContext<ContextType | undefined>(undefined)
  function useCtx() {
    const c = useContext(ctx)
    if (c === undefined)
      throw new Error(`Hook used outside of the provider: ${name}`)
    return c
  }
  return [useCtx, ctx.Provider] as const
}

const [usePropsContext, PropsManagerContext] =
  createCtx<PropsManagerContextType>('PropsManager')

const PropsManagerReducer = (state: any, payload: object) => {
  return { ...state, ...payload }
}

interface PropsManagerProps {
  children: React.ReactNode
  propsValue: object
}

const useProps = () => {
  const [state, setProps] = useReducer(PropsManagerReducer, {})
  return { state, setProps }
}

const PropsManagerProvider: React.FC = (props: PropsManagerProps) => {
  const { state, setProps } = useProps()
  const value = { state, setProps }
  React.useEffect(() => {
    setProps(props.propsValue)
  }, [])
  return (
    <PropsManagerContext value={value}>{props.children}</PropsManagerContext>
  )
}

export { PropsManagerProvider, usePropsContext }

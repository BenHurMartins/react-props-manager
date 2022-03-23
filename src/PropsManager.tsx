import React, { createContext, useContext, useReducer } from 'react'

type PropsManagerActionType = { type: string; payload?: object }

type PropsManagerContextType = {
  state: any
  getProps: (propsKey: string) => object
  resetProps: () => void
  updateProps: (payload: object) => void
}
// setProps?: React.Dispatch<PropsManagerActionType>

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

const Actions = {
  RESET: 'Reset',
  UPDATE: 'Update'
}

const PropsManagerReducer = (state: any, action: PropsManagerActionType) => {
  switch (action.type) {
    case Actions.RESET:
      return {}
      break
    case Actions.UPDATE:
      return { ...state, ...action.payload }
      break

    default:
      return state
      break
  }
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

  const getProps = (propsKey: string) => state[propsKey] ?? {}

  const resetProps = () => setProps({ type: Actions.RESET })

  const updateProps = (payload: object) =>
    setProps({ type: Actions.UPDATE, payload: payload })

  const value = { state, getProps, resetProps, updateProps }

  React.useEffect(() => {
    setProps({ payload: props.propsValue, type: Actions.UPDATE })
  }, [])
  return (
    <PropsManagerContext value={value}>{props.children}</PropsManagerContext>
  )
}

export { PropsManagerProvider, usePropsContext }

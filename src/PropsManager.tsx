import React, { createContext, useContext, useReducer } from 'react'

type PropsManagerActionType = { type: string; payload: object }

type PropsManagerContextType = {
  state: any
  dispatch?: React.Dispatch<PropsManagerActionType>
}
const PropsManagerContext = createContext<PropsManagerContextType | null>({
  state: {}
})

const PropsManagerReducer = (state: any, action: PropsManagerActionType) => {
  switch (action.type) {
    default: {
      return { ...state, ...action.payload }
    }
  }
}

interface PropsManagerProps {
  children: React.ReactNode
}

const PropsManagerProvider = (props: PropsManagerProps) => {
  const [state, dispatch] = useReducer(PropsManagerReducer, {})
  const value = { state, dispatch }
  return (
    <PropsManagerContext.Provider value={value}>
      {props.children}
    </PropsManagerContext.Provider>
  )
}

const usePropsContext = () => {
  const context = useContext(PropsManagerContext)
  if (context === undefined || context === null) {
    throw new Error('usePropsContext most be in a provider')
  }
  return context
}

export { PropsManagerProvider, usePropsContext }

import { createContext, useContext } from 'react'

export function contextFactory<ContextType>(name: string) {
  const context = createContext<ContextType | undefined>(undefined)
  function useCtx() {
    const c = useContext(context)
    if (c === undefined)
      throw new Error(`Hook used outside of the provider: ${name}`)
    return c
  }
  return [useCtx, context.Provider] as const
}

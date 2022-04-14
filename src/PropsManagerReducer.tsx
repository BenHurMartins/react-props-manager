export type PropsManagerActionType = { type: string; payload?: object }

export const Actions = {
  RESET: 'Reset',
  UPDATE: 'Update'
}

const PropsManagerReducer = (state: object, action: PropsManagerActionType) => {
  switch (action.type) {
    case Actions.RESET:
      return {}
    case Actions.UPDATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default PropsManagerReducer

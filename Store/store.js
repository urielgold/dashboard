export const actions = {
    SET_CURRENT: 'SET_CURRENT',
    ADD_CALLS: 'ADD_CALLS'
}

export function reducer(state, action) {
    switch (action.type) {
      case actions.SET_CURRENT:
        return {...state, current: action.data};
      case actions.ADD_CALLS:
        return {...state, totalCount: action.data.totalCount, nodes: [...state.nodes, ...action.data.nodes]};
      default:
        throw new Error();
    }
  }

export const initValue = {
    nodes: [],
    current: {limit: 0, offset: 0}
}
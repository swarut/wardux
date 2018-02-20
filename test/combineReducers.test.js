import { createStore, combineReducers } from '../src/index'

let reducer = (state, action) => {
  switch (action.type) {
    case "add":

      let res =  {
        ...state,
        result: action.result
      }
      return res
    default:
      return state
  }
}
let reducer2 = (state = {}, action) => {
  switch (action.type) {
    case "remove":
      let res =  {
        ...state,
        result: action.result
      }
      return res
    default:
      return state
  }
}

let reducers = combineReducers({ reducer, reducer2 })

let store = createStore(reducers)
let storeCallback = () => {}
let action1 = { type: "add", result: 20 }
let action2 = { type: "remove", result: 2 }

describe('combineReducers', () => {
  test('combineReducers creats new reducer object', () => {
    let keys = Object.keys(reducers)
    expect(keys.length).toBe(2)
    expect(reducers[keys[0]]).toEqual(reducer)
    expect(reducers[keys[1]]).toEqual(reducer2)
  })

  test('after dispatch, state should be constructed from reducer key', () => {
    store.dispatch(action1)
    let state = store.getStates()
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
    expect(state).toHaveProperty('reducer', { result: 20 })
    expect(state).toHaveProperty('reducer2', {})

    store.dispatch(action2)
    let nextState = store.getStates()
    console.log("next state", nextState)
    expect(nextState).toHaveProperty('reducer', { result: 20 })
    expect(nextState).toHaveProperty('reducer2', { result: 2 })
  })
})

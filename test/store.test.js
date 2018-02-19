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
let reducer2 = (state, action) => {}
let store = createStore(reducer)
let storeCallback = () => {}
let action = { type: "add", result: 20 }

describe('createStore', () => {
  test('createStore returns new store', () => {
    expect(store).not.toBeNull();
    expect(store).toBeDefined();
  })

  test('store can be subscribed', () => {
    store.subscribe(storeCallback)
    let cb = store.getSubscribers()
    expect(cb).not.toBeNull
    expect(cb).toBeInstanceOf(Array)
    expect(cb.length).toBe(1)
  })

  test('store can return state', () => {
    let state = store.getStates()
    expect(state).toBeDefined
    expect(state).toEqual({})
  })

  test('store dispatches action', () => {
    store.dispatch(action)
    let state = store.getStates()
    expect(state).toEqual({ result: 20 })
  })
})

describe('combineReducers', () => {
  test('combineReducers creats new reducer object', () => {
    let reducers = combineReducers({ reducer, reducer2 })
    let keys = Object.keys(reducers)
    expect(keys.length).toBe(2)
    expect(reducers[keys[0]]).toEqual(reducer)
    expect(reducers[keys[1]]).toEqual(reducer2)
  })
})

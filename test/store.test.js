import { createStore } from '../src/index'

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
let store = createStore(reducer)
let storeCallback = () => {}
let action = {type: "add", result: 20}

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
  expect(state).toEqual({ result: 20})
})

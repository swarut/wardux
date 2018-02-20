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

let reducers = combineReducers({ reducer, reducer2 })

let store = createStore(reducers)
let storeCallback = () => {}
let action = { type: "add", result: 20 }

describe('combineReducers', () => {
  test('combineReducers creats new reducer object', () => {
    let keys = Object.keys(reducers)
    expect(keys.length).toBe(2)
    expect(reducers[keys[0]]).toEqual(reducer)
    expect(reducers[keys[1]]).toEqual(reducer2)
  })
})

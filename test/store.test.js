import { createStore } from '../src/index'

test('createStore returns new store', () => {
  let reducer = (state, action) => {}
  let store = createStore(reducer)
  expect(store).toBeTruthy
});

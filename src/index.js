export const createStore = (reducer) => {
  return {
    states: {},
    subscribers: [],
    reducer: reducer,

    subscribe: function(target) {
      this.subscribers.push(target)
    },

    getSubscribers: function() {
      return this.subscribers
    },

    getStates: function() {
      return this.states
    },

    dispatch: function(action) {
      if (this.reducer) {
        this.state = this.reducer(action, this.states)
        this.subscribers.forEach((sub) => {
          sub(this.state)
        })
      }
    }
  }
}

export const combineReducers = (reducers = {}) => {
  let keys = Object.keys(reducers)

  let combinedReducers = {}
  keys.forEach((key) => {
    combinedReducers[key] = reducers[key]
  })
  return combinedReducers
}

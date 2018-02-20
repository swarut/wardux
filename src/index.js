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
        if (typeof this.reducer === 'function')
          this.states = this.reducer(this.states, action)
        else if (typeof this.reducer === 'object') {
          let newStates = {}
          Object.keys(this.reducer).forEach((key) => {
            newStates[key] = this.reducer[key](this.states[key] || {}, action)
          })
          this.states = newStates
        }

        this.subscribers.forEach((sub) => {
          sub(this.states)
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

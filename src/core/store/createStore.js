export function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({...initialState}, {type: '__INIT__'})
  let listeners = []

  return {
    subscribe(fn) {
      listeners.push(fn)
      return {
        unsubscribe() {
          listeners = listeners.filter(l => l !== fn)
        }
      }
    },
    dispatch(action) {
      state = rootReducer(state, action)
      if (listeners[0]) {
        listeners.forEach(listener => listener(state))
      }
    },
    getState() {
      return JSON.parse(JSON.stringify(state))
    }
  }
}

// base stores state
// export function createStore (rootReducer, initialState = {}) {
//     let state = rootReducer({...initialState}, {type: '__INIT__'})
//     let listeners = []
//
//     return {
//         subscribe(fn) {
//             listeners.push(fn)
//             return {
//                 unsubscribe() {
//                     listeners = listeners.filter(l => l !== fn)
//                 }
//             }
//         },
//         dispatch(action) {
//             state = rootReducer(state, action)
//             listeners.forEach(listener => listener(state))
//         },
//         getState() {
//             return state
//         }
//     }
// }

import { createStore } from 'redux'
import reducers from './reducers'
import state from './state'

+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(reducers, state)
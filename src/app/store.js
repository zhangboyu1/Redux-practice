import { CounterReducer } from './CounterReducer';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const store = createStore(
  CounterReducer,
  applyMiddleware(thunk)
)

export default store
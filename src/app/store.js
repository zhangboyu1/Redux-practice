import { CounterReducer } from './redux/CounterReducer';
import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk';
import rootSaga from './saga/mysaga'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()


const store = createStore(
  CounterReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux'
import { counterReducer } from './app/CounterReducer'
import Increment from './app/Increment'
import NumDemo from './app/NumDemo'
import thunk from 'redux-thunk';

export const store = createStore(
  counterReducer,
  applyMiddleware(thunk)
)


function App() {
  //在入口文件这里
  // asdsada
  return (
    <div className="App">
      <div>
        <h1>react app</h1>
        <NumDemo />
        <Increment />
      </div>
    </div>
  );
}

export default App;



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

store.subscribe(()=>{
  var a = []
  // console.log('store state',store.getState())
  var receiveddata = JSON.stringify(store.getState().postInfo.posts)
  console.log(receiveddata)
  a.push(receiveddata)
  localStorage.setItem('session', a)
  // var b = JSON.parse(localStorage.getItem('session'))
  // console.log('ls value',b)
})

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


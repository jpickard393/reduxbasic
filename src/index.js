import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './Store/reducers/reducer1';
import { createStore } from 'redux'

let store = createStore(rootReducer);

// By wrapping the app in the provider component we make our redux store available to all components inn the app
// each component is made aware of the component by the container
ReactDOM.render(<Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

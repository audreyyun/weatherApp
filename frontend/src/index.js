import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

require('dotenv').config();

document.addEventListener('DOMContentLoaded', () => {
  console.log(process.env)
  let store;
  store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
/** REDUX LESSON */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './containers/App';



/** REDUX LESSON */
export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
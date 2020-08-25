import React from 'react';
import './Footers.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function Form() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default Form

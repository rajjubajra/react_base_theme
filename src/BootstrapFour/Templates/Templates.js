import React from 'react';
import './Templates.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function Templates() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default Templates

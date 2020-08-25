import React from 'react';
import './BaseCompo.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function BaseCompo() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default BaseCompo

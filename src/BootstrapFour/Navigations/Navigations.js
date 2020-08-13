import React from 'react';
import './Navigations.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function Navigations() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default Navigations

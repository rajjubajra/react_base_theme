import React from 'react';
import './Shops.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function Shops() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default Shops

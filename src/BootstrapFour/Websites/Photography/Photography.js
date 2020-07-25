import React from 'react'
import RoutePhotography from './contents/RoutePhotography';
import { Provider } from 'react-redux';
import { store } from './store';


function Photography() {
  return (
    <Provider store={store}>
      <RoutePhotography />
    </Provider>
  )
}

export default Photography

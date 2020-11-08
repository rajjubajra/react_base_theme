import React from 'react'
import RoutePhotography from './Page/RoutePhotography';
import { Provider } from 'react-redux';
import { store } from './store';


function PhotographyOne() {
  return (
    <Provider store={store}>
      <RoutePhotography />
    </Provider>
  )
}

export default PhotographyOne
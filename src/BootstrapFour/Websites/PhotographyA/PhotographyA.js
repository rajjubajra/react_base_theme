import React from 'react';
import './PhotographyA.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function PhotographyA() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default PhotographyA

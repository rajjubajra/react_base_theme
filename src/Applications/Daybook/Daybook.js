import React from 'react';
import './Daybook.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function Daybook() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default Daybook

import React from 'react';
import './ProfileAab.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function ProfileAab() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default ProfileAab

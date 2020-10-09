import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import RouteLanPasaa from './contents/RouteLanPasaa';


/** LAN PASAA */
const ProviderLanPasaa = () => {


  return (
    <Provider store={store}>
      <RouteLanPasaa />
    </Provider>

  )
}
export default ProviderLanPasaa
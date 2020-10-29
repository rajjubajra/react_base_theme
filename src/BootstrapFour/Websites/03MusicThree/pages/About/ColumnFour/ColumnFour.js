import React from 'react';
import { useSelector } from 'react-redux';
import Desktop from './Desktop';
import Mobile from './Mobile';
import Tablet from './Tablet';


export const ColumnFour = () => {

  /** ABOUT DATA */
  const state = useSelector(state => state.reducerFetchAbout.data);
  const dataLength = useSelector(state => state.reducerFetchAbout.dataLength);


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="d-none d-lg-block d-xl-block">
          <Desktop dataLength={dataLength} state={state} />
        </div>
        <div className="d-none d-md-block d-lg-none">
          <Tablet dataLength={dataLength} state={state} />
        </div>
        <div className="d-sm-block d-md-none d-lg-none d-xl-none">
          <Mobile dataLength={dataLength} state={state} />
        </div>
      </div>
    </div>
  )
}
export default ColumnFour;

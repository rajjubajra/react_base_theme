import React, { useEffect } from 'react';
import HomeDesktop from '../../../pages/Home/HomeDesktop';
//import HomeMobile from '../../../pages/Home/HomeMobile';
import { useSelector, useDispatch } from 'react-redux';
import { actionFetchData } from '../../../pages/Redux/ActionFetchData';

function Navigation() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionFetchData());
  }, [dispatch])

  const fetched = useSelector(state => state.reducerFetchData.fetched);
  const logoHorz = useSelector(state => state.reducerFetchData.logoHorizontal);
  const logoHorzAlt = useSelector(state => state.reducerFetchData.logoHorizontalAlt);
  const logoSquare = useSelector(state => state.reducerFetchData.logoSquare);
  const logoSquareAlt = useSelector(state => state.reducerFetchData.logoSquareAlt);
  const body = useSelector(state => state.reducerFetchData.body);
  const links = useSelector(state => state.reducerFetchData.links);
  const title = useSelector(state => state.reducerFetchData.title);


  return (

    <HomeDesktop
      fetched={fetched}
      logoHorz={logoHorz}
      logoHorzAlt={logoHorzAlt}
      logoSquare={logoSquare}
      logoSquareAlt={logoSquareAlt}
      body={body}
      links={links}
      title={title}
    />



  )
}
export default Navigation
import React, { useEffect } from 'react';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import { actionFetchData } from '../redux/actions/ActionFetchData';
import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';



export default function Home() {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);

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
  //const title = useSelector(state => state.reducerFetchData.title);
  return (
    <div className="coming-soon">
      <ColourMode />
      <div className={className}>


        {/** desktop and tablet */}
        <div className="d-none d-md-block d-lg-block d-xl-block">
          <HomeDesktop
            fetched={fetched}
            logoHorz={logoHorz}
            logoHorzAlt={logoHorzAlt}
            logoSquare={logoSquare}
            logoSquareAlt={logoSquareAlt}
            body={body}
            links={links}
          />
        </div>


        {/** mobile */}
        <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none">
          <HomeMobile
            fetched={fetched}
            logoHorz={logoHorz}
            logoHorzAlt={logoHorzAlt}
            logoSquare={logoSquare}
            logoSquareAlt={logoSquareAlt}
            body={body}
            links={links}
          />
        </div>




      </div>
    </div>
  )
}

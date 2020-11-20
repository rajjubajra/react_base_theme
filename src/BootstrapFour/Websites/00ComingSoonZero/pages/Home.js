import React, { useRef, useEffect, useState } from 'react';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import { actionFetchData } from '../redux/actions/ActionFetchData';
import DangerouslySetInnerHtml from './DangerouslySetInnterHtml';
import FormFive from './Form/FormFive';
import IconDownArrow from '../components/Icon/IconDownArrow';
import { useIntersection } from 'react-use';



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

  /** INTERSECTIO OBSERVER */
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '300px 0px -350px 0px',
    threshold: 0
  });
  const [view, setView] = useState(true);

  useEffect(() => {

    intersection && intersection.intersectionRatio < 1
      ? setView(true)
      : setView(false)

    console.log(intersection)
  }, [intersection])



  const showHide = {
    opacity: view ? 1 : 0,
    transition: "opacity 0.3s linear"
  }


  return (
    <div className="coming-soon">
      <div className={className}>
        <ColourMode />

        <div className="align-center">

          <div className="container mb-5">

            {/** LOGO HORIZONTAL */}
            <div className="row mt-2">
              <div className="col d-flex justify-content-center">
                <div className='logo-horz'>
                  <img src={logoHorz} alt={logoHorzAlt} />
                </div>
              </div>
            </div>

            {/** BODY CONTENT */}
            <div className="row justify-content-center">
              <div className="col-6">
                <div className="main">
                  <div className="logo-square">
                    <img src={logoSquare} alt={logoSquareAlt} />
                  </div>
                  <div className='body'>
                    <DangerouslySetInnerHtml text={body} />
                  </div>
                </div>
              </div>
            </div>

            {/** LINKS */}
            <div className="row">
              <div className="col">
                <div className="links">
                  {
                    fetched && links.map((item, index) => {
                      return <button
                        key={index}
                        onClick={() => window.open(item.uri)}>
                        {item.title.replace(/ *\[[^\]]*]/, '')}</button>
                    })
                  }
                </div>
              </div>
            </div>


          </div>


          {/** Contact form Navigation */}

          <div ref={intersectionRef} className="d-flex justify-content-center w-100">
            <div style={showHide} className="contact-nav">
              <p>Please send me your enqiry</p>
              <div
                onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
                className="animate-arrow d-flex justify-content-center">
                <IconDownArrow />
              </div>
            </div>
          </div>

        </div>{/** align-center */}


        <div className='contact-form'>
          <FormFive />
        </div>

      </div>
    </div>
  )
}

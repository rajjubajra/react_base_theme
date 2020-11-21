import React, { useRef, useEffect, useState } from 'react';
import DangerouslySetInnerHtml from './DangerouslySetInnterHtml';
import IconDownArrow from '../components/Icon/IconDownArrow';
import { useIntersection } from 'react-use';



export default function HomeDesktop(props) {


  /** INTERSECTIO OBSERVER */
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '200px 0px -250px 0px',
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

    <div className="align-center">

      <div className="container mb-5">

        {/** LOGO HORIZONTAL */}
        <div className="row mt-2">
          <div className="col d-flex justify-content-center">
            <div className='logo-horz d-flex justify-content-center mt-3'>
              <img style={{ width: "80%" }} src={props.logoHorz} alt={props.logoHorzAlt} />
            </div>
          </div>
        </div>

        {/** BODY CONTENT */}
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="main">
              <div className="logo-square">
                <img src={props.logoSquare} alt={props.logoSquareAlt} />
              </div>
              <div className='body'>
                <DangerouslySetInnerHtml text={props.body} />
              </div>
            </div>
          </div>
        </div>

        {/** LINKS */}
        <div className="row">
          <div className="col">
            <div className="links">
              {
                props.fetched && props.links.map((item, index) => {
                  return <button
                    style={{ width: "60%", textAlign: "center" }}
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

    </div>

  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import DangerouslySetInnerHtml from '../BoxThirteen/DangerouslySetInnterHtml';



function BoxFifteen() {


  const image = 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/people-2557399_640.jpg';
  const title = 'Read more title';
  const body = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet ullam nisi placeat libero, autem incidunt atque? Recusandae libero, incidunt aspernatur minima corporis rerum odit vero laborum excepturi. Maiores, set. </p><p>Kibero, autem incidunt atque? Recusandae libero, incidunt aspernatur Iorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet ullam nisi placeat libero, autem incidunt atque? Recusandae libero, incidunt aspernatur minima corporis rerum odit vero laborum excepturi. Maiores, set.</p>"


  return (
    <div className="container min-vh-100">
      <NavigationOne />
      <hr />


      <div className="row justify-content-center pt-4 pb-4 border">
        <div className="col-lg-4 col-md-5 col-sm-12 d-flex justify-content-center mb-sm-2">
          <img
            className="pl-lg-1"
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover"
            }}
            src={image}
            alt="fox-fourteen" />
        </div>

        <div className="col-lg-8 col-md-7 col-sm-12 pb-sm-3">

          <div className="pt-1 pr-1 pb-1">
            <h3>{title}</h3>
            <DangerouslySetInnerHtml text={body} />

            <div style={{
              position: "absolute",
              right: "25px",
              bottom: "0px"
            }} className="btn btn-light">
              <Link to="#">Read More</Link>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default BoxFifteen

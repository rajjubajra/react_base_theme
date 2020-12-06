import React from 'react';
import './BoxSixteen.scss';
import { Link } from 'react-router-dom';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import DangerouslySetInnerHtml from './DangerouslySetInnterHtml';

function BoxSixteen() {

  /** colour variant - redux state */
  const variant = 'white';

  const image = 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/people-2557399_640.jpg';
  const title = 'Read more title';
  const body = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet ullam nisi placeat libero, autem incidunt atque? Recusandae libero, incidunt aspernatur minima corporis rerum odit vero laborum excepturi. Maiores, set. </p><p>Kibero Recusandae libero, incidunt aspernatur Iorem ipsum dolor sit amet consectetur adipisicing. amet ullam nisi placeat libero, autem incidunt atque? Recusandae libero, incidunt aspernatur minima corporis rerum odit vero laborum excepturi. amet ullam nisi placeat libero, autem incidunt atque? Recusandae Maiores, set.</p>";

  /** Note: adjust the image height 
   * in order to adjust text height
   */
  const imgStyle = {
    width: "100%",
    height: "320px",
    objectFit: "cover",
  }


  return (
    <div className="container min-vh-100">

      <div className="row mb-5">
        <NavigationOne />
        <hr />
      </div>

      <div className="row border">
        <div className="col-lg-4 rm-padding-x">
          <img style={imgStyle} src={image} alt="box-sixteen" />
        </div>
        <div className="col-lg-8 pt-3">
          <h3>{title}</h3>
          <DangerouslySetInnerHtml text={body} />

          <div
            className="d-flex justify-content-end w-100 pr-2 mb-3">
            <Link
              className={`${variant === 'dark' ? 'btn btn-dark' : 'btn btn-light'}`}
              to="#">Read More</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BoxSixteen
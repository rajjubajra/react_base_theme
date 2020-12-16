import React from 'react';
import DangerouslySetInnerHtml from '../DangerouslySetInnterHtml';
//import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import Envelope from './Envelope';


export default function HomeDesktop(props) {

  /** colour variant */
  //const variant = useSelector(state => state.reducerSelectColourMode.variant);

  const { fetched, title, logoHorz,
    logoHorzAlt, logoSquare, logoSquareAlt,
    body, links } = props;


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div style={{
            width: "100",
            display: "flex",
            height: "85vh",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div>
              <h1 style={{
                fontFamily: "'Mrs Saint Delafield', cursive",
                transform: "scale(1.6) translate(46px, 10px)"
              }}>{title}</h1>
              <div className="logo-h">
                <img
                  style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                  src={logoHorz}
                  alt={logoHorzAlt} />
              </div>
              {/* <div className="logo-sqr">
              <img src={logoSquare} alt={logoSquareAlt} />
            </div> */}
              <section className="body mt-5">
                <DangerouslySetInnerHtml text={body} />
              </section>
              <section
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                  margin: "30px 0px"
                }}
                className="links">
                {
                  fetched && links.map((item, index) => {
                    return <Link
                      style={{
                        padding: "10px 15px",
                        margin: "10px",
                        border: "1px solid #ccc",
                        textAlign: "center"
                      }}

                      to={{ pathname: `${item.uri}` }}>{item.title}</Link>
                  })
                }
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

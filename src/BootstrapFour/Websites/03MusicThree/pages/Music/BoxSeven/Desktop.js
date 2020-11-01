import React from 'react'
import ImageHolder from './ImageHolder';
import { Link } from 'react-router-dom';
import { pagelink } from '../../../PageLink';


function Desktop(props) {

  const longPhotoStyle = {
    margin: "7px",
  }

  const imageStyle = {
    width: "250px",
    height: "568px",
    objectFit: "cover",
    border: "1px solid #000",
    outlineOffset: "-10px",
    outline: "1px solid rgba(255,255,255,0.25)",
    filter: "grayscale(1)",
  }

  const { dtLength, data, title } = props;

  return (
    <>
      <h1 style={{ marginLeft: "7px" }}>{title}</h1>
      <div className="d-flex justify-content-center">
        <div style={longPhotoStyle}>
          {
            dtLength > 0 && <img
              style={imageStyle}
              src={data[0].image.url} alt={data[0].title} />
          }
        </div>
        <div className="container mb-5">
          <div className="row d-flex flex-wrap">
            {
              dtLength > 0 &&
              data.map(item => {
                return <Link key={item.nid} to={`/${pagelink.playList}/${item.nid}`}>
                  <ImageHolder
                    width="260px"
                    height="260px"
                    img={item.image.url}
                    alt={item.image.alt}
                  />
                </Link>
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default Desktop
import React, { useState } from 'react';
import './Masonry.scss';
import BoxArrowInLeft from './BoxArrowInLeft';
import BoxArrowInRight from './BoxArrowInRight';
import Masonry from 'react-masonry-css';
import PhotoPlaceholder from '../../components/PhotoPlaceholder/PhotoPlaceholder';


function Boxes(props) {

  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(10);
  const pageGap = 10;
  const dataLength = props.dataLength;

  function nextPage() {
    console.log("next");
    setCurrentPage(currentPage + pageGap);
    setLastPage(pageGap + lastPage);
  }
  function prevPage() {
    console.log("prev");
    setCurrentPage(currentPage - pageGap);
    setLastPage(lastPage - pageGap);
  }

  const date = new Date();

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  console.log("POSTS", props.photos);

  return (
    <div className="container">
      {/** PAGE CONTENT */}
      <div className="row">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {/* array of JSX items */

            props.photos.length > 0
              ? props.photos.map((item, index) => {
                return <PhotoPlaceholder
                  key={index}
                  className="d-block w-100"
                  width="100%"
                  height="auto"
                  imgSrc={item.url}
                  imgAlt={item.alt}
                  imgIndex={index}
                />
              })
              : <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>

          }
        </Masonry>
      </div>

      {/**NEXT AND PREVIOUSE PAGE ARROWS */}
      <div className="row">
        <div className="col">
          <div style={{
            display: "flex",
            width: "100%",
            justifyContent: "center"
          }}>
            <i style={{
              cursor: "pointer",
              margin: "10px",
              display: currentPage === 0 ? "none" : "",
            }}
              onClick={() => prevPage()}
            ><BoxArrowInLeft /></i>
            <span style={{
              fontSize: "0.7rem",
              fontWeight: "100",
              position: "relative",
              top: "15px",
            }}>Page</span>
            <i style={{
              cursor: "pointer",
              margin: "10px",
              display: lastPage >= dataLength ? "none" : ''
            }}
              onClick={() => nextPage()}><BoxArrowInRight /></i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Boxes;
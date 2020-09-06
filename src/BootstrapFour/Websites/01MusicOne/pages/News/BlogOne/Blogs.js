import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BoxArrowInLeft from './BoxArrowInLeft';
import BoxArrowInRight from './BoxArrowInRight';
import Blog from './Blog';

function Blogs(props) {

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



  return (
    <Container>
      {/** PAGE CONTENT */}
      <Row>
        <Col>
          {
            props.posts.length > 0
              ? props.posts.slice(currentPage, lastPage).map((item) => {
                return <Blog
                  key={item.id}
                  id={item.id}
                  day={props.days}
                  month={props.months}
                  year={date.getUTCFullYear()}
                  title={item.title}
                  readmore={props.readmore}
                />
              })
              : "Loading...."
          }
        </Col>
      </Row>

      {/**NEXT AND PREVIOUSE PAGE ARROWS */}
      <Row>
        <Col>
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
        </Col>
      </Row>
    </Container>
  )
}

export default Blogs

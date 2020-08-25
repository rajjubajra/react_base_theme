import React, { useEffect, useState } from 'react'
import Nav from '../../components/header/Nav';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Blogs from './Blogs';


export const BlogFour = () => {
  /** out sourced jsonplaceholder: opensource jsonapi */
  const dataUrl = 'https://jsonplaceholder.typicode.com/posts';

  const [posts, setPosts] = useState([]);
  const dataLength = posts.length; //length of the data

  useEffect(() => {
    axios({
      method: 'GET',
      url: dataUrl,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then(res => {
        //console.log(res.data);
        setPosts(res.data);
      })
      .catch(err => console.log(err))
    //setReadMore(false);
    console.log("useEffect 1");

  }, [dataUrl])


  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];


  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Nav />
      <Container>
        <Row>
          <Col className="d-flex f-wrap" style={{ flexWrap: "wrap" }}>
            <Blogs
              posts={posts}
              dataLength={dataLength}
              days={days[0]}
              months={months[0]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BlogFour;
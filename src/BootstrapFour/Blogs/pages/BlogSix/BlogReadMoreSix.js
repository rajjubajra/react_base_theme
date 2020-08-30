import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Photo from './Photo';
import { Container, Col, Row } from 'react-bootstrap';
import { actionClearBlogId } from '../../redux/actions/ActionPassBlogId';



const sectionStyle = {
  width: "100%",
  margin: "0px auto",
  minHeight: "100vh",
}
const datestyle = {
  fontWeight: "100"
}
const titleStyle = {
  textTransform: "capitalize",
  fontWeight: "200",
  margin: "20px 0px"
}
const bodyStyle = {
  fontWeight: "100",

}
const imageStyle = {
  margin: "30px 0px"
}

const readblockStyle = {
  width: "100%",
  maxWidth: "850px",
  margin: "0px auto",
  background: "#fff",
  padding: "20px 30px 100px 30px",
  boxShadow: "1px 1px 10px 1px #ccc",
  border: "1px solid #aaa",
}


function BlogReadMoreSix(props) {
  const dispatch = useDispatch();

  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  const dataUrl = `https://jsonplaceholder.typicode.com/posts/${props.id}`;

  useEffect(() => {
    axios({
      method: 'GET',
      url: dataUrl,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then(res => {
        console.log(res.data);
        setTitle(res.data.title);
        setBody(res.data.body);
      })
      .catch(err => console.log(err))
  }, [dataUrl])


  return (
    <Container>
      <Row>
        <Col>
          <section style={sectionStyle}>
            <div style={readblockStyle}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={datestyle}> 19 Aug, 2020</p>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(actionClearBlogId())}
                > X</p>
              </div>
              <div>
                <h1 style={titleStyle}>{title}</h1>
                <div style={bodyStyle}>
                  <p>Article: {props.id}</p>
                  <div style={imageStyle}>
                    <Photo />
                  </div>

                  <p>{body}</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus cumque quae, asperiores ipsa laborum iste voluptas saepe cum molestias quos laboriosam odio, ipsum quo eligendi sapiente atque fuga accusamus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum totam assumenda autem obcaecati distinctio accusantium earum fuga rerum. Ipsa velit nemo aliquid. Suscipit alias quasi totam omnis itaque porro perferendis!
                </p>
                  <p>  Ipsum dolor sit amet consectetur adipisicing elit. Amet ab voluptate alias consequuntur minima quam maxime magnam, sequi nemo vitae enim? Officia unde vel itaque, exercitationem animi repellat excepturi mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore harum alias consectetur maxime minus praesentium ducimus est quasi reiciendis totam incidunt quisquam nesciunt, eos nulla velit, exercitationem optio molestias?</p>
                </div>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container >
  )
}
export default BlogReadMoreSix
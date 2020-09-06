import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ColourMode from '../../../components/ColourMode/ColourMode';
import NavigationOne from '../../../components/header/NavigationOne/NavigationOne';
import axios from 'axios';
import { dataSourceUrl } from '../../../Config/dataurl';

import { Container, Col, Row } from 'react-bootstrap';


const sectionStyle = {
  width: "100%",
  minHeight: "80vh",
  padding: "0px 40px"
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


function BlogReadMore(props) {

  /** COLOUR MODE  */
  const [className, setClassName] = useState('light');
  const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    setColourVariant(variant);
  }, [colorMode, variant])
  /** COLOUR MODE CLOSED */



  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  let { id } = useParams();
  const dataUrl = `${dataSourceUrl.DATAURL}/${id}`;

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
    <div className={className}>
      <ColourMode />
      <NavigationOne />
      <Container>
        <Row>
          <Col>
            <section style={sectionStyle}>
              <p style={datestyle}> 19 Aug, 2020</p>
              <div>
                <h1 style={titleStyle}>{title}</h1>
                <div style={bodyStyle}>
                  <p>Article: {id}</p>
                  <p>{body}</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus cumque quae, asperiores ipsa laborum iste voluptas saepe cum molestias quos laboriosam odio, ipsum quo eligendi sapiente atque fuga accusamus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum totam assumenda autem obcaecati distinctio accusantium earum fuga rerum. Ipsa velit nemo aliquid. Suscipit alias quasi totam omnis itaque porro perferendis!
                </p>
                  <p>  Ipsum dolor sit amet consectetur adipisicing elit. Amet ab voluptate alias consequuntur minima quam maxime magnam, sequi nemo vitae enim? Officia unde vel itaque, exercitationem animi repellat excepturi mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore harum alias consectetur maxime minus praesentium ducimus est quasi reiciendis totam incidunt quisquam nesciunt, eos nulla velit, exercitationem optio molestias?</p>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BlogReadMore
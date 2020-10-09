import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { d8develData, d8develJSONAPI, dataSourceUrl } from '../../data/dataSourceUrl';
import Nav from '../../components/header/Nav';
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

  //const [body, setBody] = useState('');
  //const [title, setTitle] = useState('');

  let { id } = useParams();
  //const dataUrl = `${dataSourceUrl.DATAURL}/${id}`;
  const develUrl = `${d8develJSONAPI.DATAURL}/${id}`;

  const [develBody, setDevelBody] = useState('');
  const [develTitle, setDevelTitle] = useState('');
  const [develCreated, setDevelCreated] = useState('');
  const [nid, setNid] = useState(0);



  useEffect(() => {
    axios({
      method: 'GET',
      url: develUrl,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then(res => {
        console.log(res.data.data);
        const { title, body, created, drupal_internal__nid } = res.data.data.attributes;
        setDevelTitle(title);
        setDevelBody(body.processed);
        setDevelCreated(created);
        setNid(drupal_internal__nid);

      })
      .catch(err => console.log(err))
  }, [develUrl])



  //console.log(develTitle);


  function createMarkup(body) {
    return {
      __html: body
    };
  };


  let dt = new Date(develCreated);

  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];




  return (
    <Container>
      <Row>
        <Col>
          <section style={sectionStyle}>
            <div>
              <Nav />
            </div>
            <p style={datestyle}>
              Date: {dt.getDate()} {month[dt.getMonth()]}, {dt.getFullYear()}
            </p>
            <div>

              <h1 style={titleStyle}>{develTitle}</h1>
              <div style={bodyStyle}>
                <p>Article: {nid}</p>
                <div dangerouslySetInnerHTML={createMarkup(develBody)} />
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default BlogReadMore
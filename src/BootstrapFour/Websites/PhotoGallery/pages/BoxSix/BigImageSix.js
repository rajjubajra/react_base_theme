import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Photo from './Photo';
import Nav from '../../components/header/Nav';



const sectionStyle = {
  width: "100%",
  maxWidth: "850px",
  margin: "0px auto",
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
const imageStyle = {
  margin: "30px 0px"
}


function BigImageSix(props) {

  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  let { id } = useParams();
  const dataUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

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
    <div className="container">
      <div className="row">
        <div className="col">
          <section style={sectionStyle}>
            <div>
              <Nav />
            </div>
            <p style={datestyle}> 19 Aug, 2020</p>
            <div>

              <h1 style={titleStyle}>{title}</h1>
              <div style={bodyStyle}>
                <p>Article: {id}</p>
                <div style={imageStyle}>
                  <Photo />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
export default BigImageSix
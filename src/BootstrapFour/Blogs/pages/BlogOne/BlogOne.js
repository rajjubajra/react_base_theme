import React, { useState, useEffect } from 'react'
import Nav from '../../components/header/Nav';
import Blogs from './Blogs';
import { cssclass } from '../../CssClass';
import axios from 'axios';
import { dataSourceUrl } from '../../data/dataSourceUrl';



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];



export const BlogOne = () => {

  const dataUrl = dataSourceUrl.DATAURL;

  const [posts, setPosts] = useState([]);
  const dataLength = posts.length;


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



  return (
    <div className={cssclass.base_classname}>
      <Nav />
      <Blogs
        posts={posts}
        dataLength={dataLength}
        days={days[0]}
        months={months[0]}
      />
    </div>
  )
}

export default BlogOne;

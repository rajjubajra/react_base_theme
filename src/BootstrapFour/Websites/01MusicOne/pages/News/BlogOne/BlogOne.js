import React, { useState, useEffect } from 'react'
import Blogs from './Blogs';
import axios from 'axios';
import { d8develRESTAPI } from '../../../Config/dataurl';


export const BlogOne = () => {

  /** DATA FETCHING */
  const develUrl = d8develRESTAPI.DATAURL;
  /** SET DATA INTO state */
  const [d8devel, setD8Devel] = useState([]);
  const dataLength = d8devel.length;

  useEffect(() => {
    axios({
      method: 'GET',
      url: develUrl,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then(res => {
        console.log(res.data);
        setD8Devel(res.data);
      })
      .catch(err => console.log(err))
    //setReadMore(false);
    console.log("useEffect 2");
  }, [develUrl])

  //console.log("BLog devel", d8devel.length > 0 && d8devel[0].nid[0]);

  return (
    <div>
      <Blogs
        dataLength={dataLength}
        devel={d8devel}
      />
    </div>
  )
}
export default BlogOne;
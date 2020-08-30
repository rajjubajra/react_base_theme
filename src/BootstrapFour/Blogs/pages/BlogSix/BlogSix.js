import React, { useEffect, useState } from 'react'
import Nav from '../../components/header/Nav';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Blogs from './Blogs';
import BlogReadMoreSix from './BlogReadMoreSix';


export const BlogSix = () => {
  /** out sourced jsonplaceholder: opensource jsonapi */
  const dataUrl = 'https://jsonplaceholder.typicode.com/posts';

  const [posts, setPosts] = useState([]);
  const dataLength = posts.length; //length of the data

  /** BLOG ID FOR READ MORE */
  const blogId = useSelector(state => state.reducerPassBlogId.blogId);
  //console.log("BLOG ID", blogId);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId])


  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];



  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      position: "relative",
      scrollBehavior: "smooth"
    }}>
      <div style={{
        position: blogId === null ? "relative" : "sticky",
        top: "0px",
        zIndex: "10",
        background: "#fff"
      }}>
        <Nav />
      </div>

      {/** BLOG LIST */}
      <div style={{ opacity: blogId === null ? 1 : 0.3 }}>
        <Blogs
          posts={posts}
          dataLength={dataLength}
          days={days[0]}
          months={months[0]}
        />
      </div>

      {/** READ MORE BLOGS */}
      <div style={{
        display: blogId === null ? "none" : "block",
        position: "absolute",
        top: "95px",
        width: "100%",
      }}>
        <BlogReadMoreSix id={blogId} />
      </div>
    </div >
  )
}
export default BlogSix;
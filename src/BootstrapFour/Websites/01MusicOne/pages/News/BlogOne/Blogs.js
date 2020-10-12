import React, { useEffect } from 'react'
import BoxArrowInLeft from '../../../components/Icon/BoxArrowInLeft';
import BoxArrowInRight from '../../../components/Icon/BoxArrowInRight';
import Blog from './Blog';
import { useSelector, useDispatch } from 'react-redux';
import { BlogOneActionNextPage, BlogOneActionPages, BlogOneActionPrevPage, BlogOneBackToPages } from './redux/BlogOneActionPages';

function Blogs(props) {

  const disptache = useDispatch();

  const pageGap = 5; /** number of page gap is number of article display in a page */
  const currentPage = useSelector(state => state.reducerBlogOnePages.currentPage);
  const lastPage = useSelector(state => state.reducerBlogOnePages.lastPage);
  const dataLength = props.dataLength;

  useEffect(() => {
    currentPage === 0
      /** Load fresh new page */
      ? disptache(BlogOneActionPages(dataLength, pageGap))
      /** Load with current and last page while back from readmore page */
      : disptache(BlogOneBackToPages(currentPage, lastPage, pageGap))
  }, [currentPage, dataLength, disptache, lastPage, pageGap])


  return (

    <div className="container">
      {/** PAGE CONTENT */}
      <div className="row">
        <div className="container">
          {
            props.devel.length > 0 &&
            props.devel.slice(currentPage, lastPage).map(elm => {
              return <Blog
                key={elm.nid[0].value}
                id={elm.nid[0].value}
                nid={elm.nid[0].value}
                date={elm.created[0].value}
                title={elm.title[0].value}
                body={elm.body[0].processed}
              />
            })
          }
        </div>
      </div>

      {/**NEXT AND PREVIOUSE PAGE ARROWS */}
      <div className="row">
        <div className="container">
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
              onClick={() => disptache(BlogOneActionPrevPage(currentPage, lastPage, pageGap, dataLength))}
            ><BoxArrowInLeft /></i>

            <span style={{
              fontSize: "0.7rem",
              fontWeight: "100",
              position: "relative",
              top: "15px",
            }}>
              Page
            </span>
            <i style={{
              cursor: "pointer",
              margin: "10px",
              display: lastPage >= dataLength ? "none" : ''
            }}
              onClick={() => disptache(BlogOneActionNextPage(currentPage, lastPage, pageGap, dataLength))}>
              <BoxArrowInRight /></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
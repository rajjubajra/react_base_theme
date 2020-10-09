import React, { useState } from 'react'
import BoxArrowInLeft from '../../../B4Icons/BoxArrowInLeft';
import BoxArrowInRight from '../../../B4Icons/BoxArrowInRight';
import Blog from './Blog';

function Blogs(props) {

  const pageGap = 7;
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(pageGap);
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
    if (lastPage === (dataLength - 1)) {
      setLastPage(dataLength - 1)
    } else {
      setLastPage(lastPage - pageGap);
    }
  }

  function Page(currentPage, lastPage, data, length) {
    let last = lastPage - 1;
    if (length > 0) {
      return `${data[currentPage].nid[0].value}
    - ${currentPage}  Page  ${lastPage} -
      ${data[last].nid[0].value}`
    }
  }

  console.log(lastPage)

  console.log("DEVEL", dataLength > 0 && props.devel, dataLength);

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
                uuid={elm.uuid[0].value}
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
              onClick={() => prevPage()}
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
              onClick={() => nextPage()}><BoxArrowInRight /></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
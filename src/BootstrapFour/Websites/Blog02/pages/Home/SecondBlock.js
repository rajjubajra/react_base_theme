import React from 'react'
import DangerouslySetInnerHtml from '../Utilities/DangerouslySetInnterHtml';
import { DayMonthCommaYear } from '../Utilities/DateFormat';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';




function SecondBlock(props) {

  //console.log(props.data.length && props.data);


  const linkStyle = {
    position: "absolute",
    bottom: "5px",
    right: "20px",
    border: "1px solid #ccc",
    padding: "3px 18px"
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Blogs</h1>
        </div>
      </div>
      <div className='row'>
        {
          props.data.length > 0
            ? props.data.map(item => {
              const { nid, title, created, body } = item;
              return <div key={nid} className="row mt-5 mb-5">
                <div className="col-lg-6">
                  <section style={{
                    width: "100%",
                    position: "absolute",
                    bottom: "5px",
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <h3>{title}</h3>
                    <p>{DayMonthCommaYear(created)}</p>
                    <Link
                      style={linkStyle}
                      to={{
                        pathname: `/${pagelink.readmore}/${nid}`,
                        state: { pager: props.pager }
                      }}
                    >Read More</Link>
                  </section>
                </div>
                <div className="col-lg-6">
                  <section
                    className="first-big-letter"
                    style={{
                      borderLeft: "1px solid #ccc",
                      paddingLeft: "20px"
                    }}>
                    <DangerouslySetInnerHtml text={body} substr={300} />
                  </section>
                </div>
              </div>
            })
            : 'LOADING...'
        }
      </div>
    </>
  )
}

export default SecondBlock

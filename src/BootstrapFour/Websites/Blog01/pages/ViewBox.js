import React from 'react';
import { Link } from 'react-router-dom';
import DangerouslySetInnerHtml from '../components/DangerouslySetInnterHtml';
import { pagelink } from '../PageLink';


function ViewBox(props) {


  const { nid, title, body, taxoName, dateNonFormated, dateFormated, pager } = props;



  const monthname = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  function IsDateNonFormated(dateNonFormated) {
    const dt = new Date(dateNonFormated);
    const showDate = `${dt.getDate()}  ${monthname[dt.getMonth()]},  ${dt.getFullYear()}`;
    return dateNonFormated && showDate
  }

  //console.log("DATE ???", dt, dateNonFormated);




  return (
    <div className="mt-5 mb-5">
      <h2><DangerouslySetInnerHtml text={title} substr={0} /></h2>

      {/** TAXONOMY TERMS */}
      <DangerouslySetInnerHtml text={taxoName} substr={0} />

      {/** FORMATED DATE */}
      <p>{dateFormated}</p>

      {/** NON FORMATED DATE */}
      {IsDateNonFormated(dateNonFormated)}

      {/** MAIN TEXT BODY */}
      <DangerouslySetInnerHtml
        text={body}
        substr={props.substr ? props.substr : 300} />

      {/** LINK TO READ MORE PAGE */}
      <Link to={{
        pathname: `/${pagelink.readMore}/${nid}`,
        state: { pager: pager }
      }}>
        Read More
      </Link>

    </div>
  )
}
export default ViewBox
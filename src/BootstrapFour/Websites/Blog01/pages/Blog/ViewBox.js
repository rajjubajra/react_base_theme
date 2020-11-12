import React from 'react';
import { Link } from 'react-router-dom';
import DangerouslySetInnerHtml from '../../components/DangerouslySetInnterHtml';
import { pagelink } from '../../PageLink';


function ViewBox(props) {


  const { nid, title, body, taxoName, dateNonFormated, dateFormated } = props;



  const dt = new Date(dateNonFormated);

  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


  return (
    <div className="mt-5 mb-5">
      <h2>{title}</h2>

      {/** TAXONOMY TERMS */}
      <DangerouslySetInnerHtml text={taxoName} substr={0} />

      {/** FORMATED DATE */}
      <p>{dateFormated}</p>

      {/** NON FORMATED DATE */}
      <p> {dt.getDate()}  {month[dt.getMonth()]},  {dt.getFullYear()}</p>

      {/** MAIN TEXT BODY */}
      <DangerouslySetInnerHtml text={body} substr={300} />

      {/** LINK TO READ MORE PAGE */}
      <Link to={`/${pagelink.readMore}/${nid}`}>
        Read More
      </Link>
    </div>
  )
}
export default ViewBox
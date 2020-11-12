import React from 'react';
import { pagelink } from '../../../PageLink';
import { Link } from 'react-router-dom'



function Title(props) {

  return (
    <div>
      {/** TITLE  */}
      <h1 className="display-1">Blogs</h1>
      {/** SEARCH OR TITLE BOOLEAN */}
      <Link
        className={`${props.hideLink ? 'd-none' : 'd-flex'}`}
        to={`/${pagelink.search}`}>Search</Link>

    </div>
  )
}

export default Title

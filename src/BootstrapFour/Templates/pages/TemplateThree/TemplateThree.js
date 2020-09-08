import React from 'react'
import Nav from '../../components/header/Nav';
import { cssclass } from '../../config/CssClass';
import SideNav from '../../components/SideNav/SideNav';


export const TemplateThree = () => {
  return (
    <div className={cssclass.base_classname}>
      <Nav />
      <SideNav />
      <div className="container">
        <div className="row">
          <div className="col"><h1>Column 3</h1></div>
        </div>
      </div>

    </div>
  )
}

export default TemplateThree;

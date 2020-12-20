import React, { useState } from 'react';
import './style.scss';
import BtnNext from './Btn/BtnNext';
import BtnPrev from './Btn/BtnPrev';
import Cards from './Cards';
import { pagelink } from '../../../PageLink';
import { Link } from 'react-router-dom';
import IconClose from './IconClose';



const data = [

  {
    id: 1,
    title: "PlustIt Recruitment",
    linkref: "http://www.pulseitrecruitment.co.uk/",
    text: "Recruitment Agency",
    type: "Business",
    fetures: "<ul><li>Job Listing</li><li>CV upload Form</li><li>Contact Form</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/pulseIt.png"
  },
  {
    id: 1,
    title: "Everest Spice Plymouth",
    linkref: "http://www.everestspiceplymouth.uk/",
    text: "Restaurant",
    type: "Food",
    fetures: "<ul><li>Online Table Booking</li><li>Takeaway and Restaurnat Menu</li><li>Contact Form</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/everest-spice.png"
  },


];



function Clients(props) {

  const [viewCompo, setViewCompo] = useState(0);
  const [direction, setDirection] = useState("next");
  const dataLength = data.length;

  console.log("view compo", viewCompo, direction);

  const viewNext = {
    position: "absolute",
    right: "0px",
    top: "100px",
    opacity: 1,
    transition: "right 1s linear",
    width: "100%",
    height: "75vh"
  }

  const viewPrev = {
    position: "absolute",
    left: "0px",
    top: "100px",
    opacity: 1,
    transition: "left 1s linear",
    width: "100%",
    height: "75vh"
  }

  const stayRight = {
    position: "absolute",
    right: "-100vw",
    top: "100px",
    backgroundColor: "#ffffff"
  }

  const stayLeft = {
    position: "absolute",
    left: "-100vw",
    top: "100px"
  }

  console.log("scrooll", window.scroll);

  const viewHandler = (direction) => {
    direction === 'next'
      ? setViewCompo(viewCompo + 1)
      : setViewCompo(viewCompo - 1);
    setDirection(direction);
  }

  return (
    <div className='gallery min-vh-100'>
      {/** ICON CLOSED BACK TO THEMES PAGE */}
      <div className="w-100 d-flex justify-content-end pr-5 pt-3">
        <Link to={`${pagelink.home}`}><IconClose /></Link>
      </div>

      {/** THEMES LISTINGS */}
      <div className="page-block">
        {
          data.length > 0 &&
          data.map((item, index) => {
            return <div key={index}
              style={viewCompo === index
                ? direction === 'next' ? viewNext : viewPrev
                : index < viewCompo
                  ? stayLeft : stayRight}>

              <Cards
                title={item.title}
                linkref={item.linkref}
                text={item.text}
                type={item.type}
                bgImage={item.bgImage}
              />

              <BtnNext
                viewHandler={viewHandler}
                viewCompo={viewCompo}
                dataLength={dataLength}
              />
              <BtnPrev
                viewHandler={viewHandler}
                viewCompo={viewCompo}
              />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Clients;

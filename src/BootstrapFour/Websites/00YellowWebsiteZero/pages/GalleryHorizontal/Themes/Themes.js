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
    title: "Music One",
    linkref: "/b4MusicOne-home",
    text: "Music",
    type: "Band / Solo Artist",
    fetures: "<ul><li>Sort Playlist - Link to Spotiy</li><li>Tour Calendar</li><li>Gallery</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail2_0_0.png"
  },

  {
    id: 2,
    title: "Music Two",
    linkref: "/b4Music-two-home",
    text: "Music",
    type: "Band / Solo Artist",
    fetures: "<ul><li>Sort Playlist - Link to Spotiy</li><li>Tour Calendar</li><li>Gallery</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail3_0.png"
  },

  {
    id: 3,
    title: "Music Three",
    linkref: "/b4Music-three-home",
    text: "Music",
    type: "Band / Solo Artist",
    fetures: "<ul><li>Sort Playlist - Link to Spotiy</li><li>Tour Calendar</li><li>Gallery</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail4_0.png",
  },

  {
    id: 4,
    title: "Blog One",
    linkref: "/b4Blog-one-",
    text: "Blog",
    type: "Blog",
    fetures: "<ul><li>Blog Search</li><li>Blog by Category</li><li>Blog By month</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail5.png",
  },

  {
    id: 5,
    title: "Blog Two",
    linkref: "/b4Blog-two-",
    text: "Blog",
    type: "Blog",
    fetures: "<ul><li>Blog Search</li><li>Blog by Category</li><li>Blog By month</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail6.png",
  },

  {
    id: 6,
    title: "Blog Three",
    linkref: "/b4Blog-three-",
    text: "Blog",
    type: "Blog",
    fetures: "<ul><li>Blog Search</li><li>Blog by Category</li><li>Blog By month</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail7.png",
  },

  {
    id: 7,
    title: "Blog Four",
    linkref: "/b4Blog-four-",
    text: "Blog",
    type: "Blog",
    fetures: "<ul><li>Blog Search</li><li>Blog by Category</li><li>Blog By month</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Blog-4.png",
  },

  {
    id: 8,
    title: "Business One",
    linkref: "/b4-business-one-home",
    text: "Local Business / Professional service",
    type: "Business",
    fetures: "<ul><li>Gallery</li><li>Social Media Link</li><li>Contact Form</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Business1.png"
  },

  {
    id: 9,
    title: "Business Two",
    linkref: "/b4-business-two",
    text: "Local Business / Professional service",
    type: "Business",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Business2.png",
  },

  {
    id: 10,
    title: "Business Three",
    linkref: "/b4-business-three",
    text: "Local Business / Professional service",
    type: "Business",
    fetures: "<ul><li>Gallery</li><li>Social Media Link</li><li>Contact Form</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/business-3.png",
  },

];



function Themes(props) {

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

export default Themes;

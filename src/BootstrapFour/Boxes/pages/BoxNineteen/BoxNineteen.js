import React from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import DangerouslySetInnerHtml from './DangerouslySetInnterHtml';

function BoxNineteen() {

  const title = "Tatione sapiente officiis"

  const text = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aspernatur, tempora ipsa ratione sapiente officiis exercitationem provident quae unde earum mollitia, pariatur fugit soluta, beatae cum corporis odio quaerat reiciendis!</p>";

  const imageStyle = {
    width: "100%",
    MaxWidth: "250px",
    height: "400px",
    objectFit: "cover"
  }

  const textStyleDesktop = {
    position: "relative",
    left: "-100px",
    padding: "20px 40px",
    background: "#fff",
    outline: "1px solid #ccc",
    outlineOffset: "-10px",
    borderRight: "12px solid #ccc"
  }

  const textStyleTablet = {
    position: "relative",
    marginLeft: "100px",
    paddingLeft: "40px",
    borderLeft: "12px solid #ccc"
  }

  const textStyleMobile = {
    position: "relative",
    marginLeft: "20px",
    paddingLeft: "20px",
    borderLeft: "12px solid #ccc"
  }

  return (
    <div className='container min-vh-100'>

      <div className="row">
        <NavigationOne />
      </div>

      <div className="row">
        <div className="col-lg-6">

          <div className="d-flex">
            <div>
              <img style={imageStyle} src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/desk-3076954_1280.jpg" alt="" />
            </div>
            <div>
              <img style={imageStyle} src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/office-336368_1280.jpg" alt="" />
            </div>
          </div>

        </div>

        <div className="col-lg-6 d-flex min-vh-50 align-items-center">

          {/** DESKTOP ONLY VIEW */}
          <div className="d-none d-lg-block d-xl-block">
            <div style={textStyleDesktop}>
              <div className="title"><h1>{title}</h1></div>
              <div className="body">
                <DangerouslySetInnerHtml text={text} />
              </div>
            </div>
          </div>

          {/** TABLET ONLY VIEW */}
          <div className="d-none d-md-block d-lg-none d-xl-none mt-5">
            <div style={textStyleTablet}>
              <div className="title"><h1>{title}</h1></div>
              <div className="body">
                <DangerouslySetInnerHtml text={text} />
              </div>
            </div>
          </div>

          {/** MOBILE ONLY VIEW */}
          <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none mt-5">
            <div style={textStyleMobile}>
              <div className="title"><h1>{title}</h1></div>
              <div className="body">
                <DangerouslySetInnerHtml text={text} />
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default BoxNineteen

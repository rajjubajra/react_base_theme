import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function MainMenu() {

  const openMenu = useSelector(state => state.reducerOpenMeghaMenu.status);
  const menu = useSelector(state => state.reducerMagazineMenu.data);
  const menulength = useSelector(state => state.reducerMagazineMenu.dataLength);

  // console.log("Tyoof ", typeof (menu), "MANU DATA", menu);
  console.log("MEGHA MENU", openMenu);


  const menuStyle = {
    position: 'sticky',
    marginTop: openMenu ? 0 : "-2000px",
    marginBottom: "190px",
    transition: "margin 0.4s linear",
    zIndex: "-10",
    borderBottom: "1px solid #eee",
    display: openMenu ? "flex" : "none"
  }


  return (
    <div style={menuStyle} className="row">
      {
        menulength > 0
          ? menu.map(items => {
            const { title, uri, below, key } = items
            console.log(typeof (below));
            return <div key={key} className="col-lg-2 col-md-4 col-sm-6">
              <div className="m-3 p-2">
                <Link to={`/${uri}`}>
                  <h5>{title}</h5>
                </Link>
                <div className="list-group">
                  {
                    below && below.map(elm => {
                      const { title: subTitle, uri: subUri, key: subKey } = elm
                      return <Link key={subKey} className="list-group-item list-group-item-action" to={`/${subUri}`}>
                        <p>{subTitle}</p>
                      </Link>;
                    })
                  }
                </div>
              </div>
            </div>
          })
          : ''
      }
    </div>
  )
}

export default MainMenu

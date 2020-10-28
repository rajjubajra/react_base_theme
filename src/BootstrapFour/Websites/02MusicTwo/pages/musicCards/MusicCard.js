import { faFilter } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';




function MusicCard(props) {




  return (
    <>
      {props.img !== '' &&
        <Link to={`/${pagelink.playAll}/${props.id}`}>
          <div className="card bg-dark text-white mt-5">
            <img
              style={{
                width: "100%",
                height: "auto",
                margin: "0px 2px",
                outline: "3px solid #fff"
              }}
              src={props.img}
              alt={props.alt} />
            <div className="card-img-overlay">
              <p className="card-text">{props.title}</p>
            </div>
          </div>
        </Link>
      }
    </>
  )
}

export default MusicCard

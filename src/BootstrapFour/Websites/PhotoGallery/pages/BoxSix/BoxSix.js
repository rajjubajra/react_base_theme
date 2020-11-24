import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Boxes from './Boxes';




export const BoxSix = (props) => {

  const [photos, setPhotos] = useState([]);


  const baseUrl = 'http://yellow-website.com/d8-react-base-theme-backend';
  const d8VeiwPath = 'photo-placeholder';
  const d8ViewContextualFilter = props.id;
  const dataUrl = `${baseUrl}/${d8VeiwPath}/${d8ViewContextualFilter}`



  /** GET AND SET PHOTO */
  useEffect(() => {

    /** Empty photo array before new loading */
    setPhotos('');

    axios({
      method: 'GET',
      url: dataUrl,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then(res => {
        /** set the array in to the state */
        setPhotos(res.data[0].field_photo_placeholder);
      })
      .catch(err => console.log(err))
  }, [dataUrl])


  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];


  console.log("photos:", photos);


  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <h2>Tag Id: {d8ViewContextualFilter}</h2>
      </div>
      <div className="row">
        <Boxes
          photos={photos}
          days={days[0]}
          months={months[0]}
        />
      </div>
    </div>
  )
}

export default BoxSix;
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { photoUrl } from '../../components/PhotoPlaceholder/PhotoUrl';
import Boxes from './Boxes';




export const BoxSix = (props) => {

  const [photos, setPhotos] = useState([]);
  const dataUrl = photoUrl.URL;
  const dataLength = dataUrl.length
  const tagId = useSelector(state => state.reducerFetchPhoto.tag_id.id)
  console.log("TAG", typeof (tagId));

  useEffect(() => {
    axios({
      method: 'GET',
      url: dataUrl,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then(res => {
        console.log(res.data);
        let arr = [];
        /** multiple sub array in to one array */
        res.data.forEach(elem => {

          if (elem.field_placeholder_photo_tag[0].target_id === parseInt(tagId)) {
            elem.field_photo_placeholder.map(item => {
              return arr.push(item)
            })
          }
        })
        /** set the array in to the state */
        setPhotos(arr);

      })
      .catch(err => console.log(err))
  }, [dataUrl, tagId])


  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];


  console.log("photos:", photos);


  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <h2>Tag Id: {tagId}</h2>
      </div>
      <div className="row">
        <Boxes
          photos={photos}
          dataLength={dataLength}
          days={days[0]}
          months={months[0]}
        />
      </div>
    </div>
  )
}

export default BoxSix;
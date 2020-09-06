import React, { useEffect, useState } from 'react';
import { photoUrl } from './PhotoUrl'
import axios from 'axios';
import CustomPlaceholder from './CustomPlaceholder';

function PhotoFood(props) {

  const [photo, setPhoto] = useState([]);
  const [indexId, setIndexId] = useState(0);
  const dataUrl = photoUrl.URL;
  const tagId = 16; //Taxonomy target_id for "Food"

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
          if (elem.field_placeholder_photo_tag[0].target_id === tagId) {
            elem.field_photo_placeholder.map(item => {
              return arr.push(item)
            })
          }
        })
        /** set the array in to the state */
        setPhoto(arr);
      })
      .catch(err => console.log(err))
  }, [dataUrl])

  function getRandomArbitrary(min, max) {
    let randomIndex = Math.floor(Math.random() * ((max - 1) - min) + min);
    console.log("RANDOM INDEX", randomIndex);
    return randomIndex;
  }

  useEffect(() => {
    /** if the "photo" state has data,
     *  generate random Index id,
     *  in order to populate in to img tag */
    if (photo.length > 0) {
      setIndexId(getRandomArbitrary(0, photo.length))
    }
  }, [photo.length])

  console.log("Photo Travel", photo, 'Length', photo.length, 'index Id', indexId);

  const imgStyle = {
    width: props.width,
    height: props.height,
    objectFit: "cover"
  }

  return (
    <div>
      { /** if Photo has data populate Img Tag else View Custom blank placeholder */
        photo.length > 0
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          ? <img
            style={imgStyle}
            src={photo[indexId].url}
            alt="travel photo placeholder" />
          : <CustomPlaceholder width={props.width} height={props.height} />
      }
    </div>
  )

}

export default PhotoFood

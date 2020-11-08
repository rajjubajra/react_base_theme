import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';
import ViewImage from './ViewImage';
import DangerouslySetInnerHtml from '../../components/DangerouslySetInnterHtml';
import BoxArrowInRight from '../../components/Icons/BoxArrowInRight';
import BoxArrowInLeft from '../../components/Icons/BoxArrowInLeft';

function Category(props) {

  const [show, setShow] = useState(0);

  /** Categroy Status : true or false */
  const categoryStatus = useSelector(state => state.reducerFetchCategory.categoryStatus);
  /** Data array */
  const gallery = useSelector(state => state.reducerFetchData.payload);

  /** Image Category Gallery */
  const categoryGallery = gallery[props.id].images;
  //viewImage: view single image
  const categoryImageId = useSelector(state => state.reducerFetchCategory.imageId);
  /** view image true false */
  const imageView = useSelector(state => state.reducerFetchCategory.viewImage);


  function nextShow() {
    setShow(num => num + 3);
  }
  function prevShow() {
    setShow(num => num - 3)
  }

  //console.log("gallery lenth", categoryGallery.length);
  //  console.log("image id", categoryImageId, 'status', imageView);

  return (
    <div className="container">

      {/** CATEGORY TITLE */}
      <div className="row">
        <h1>Category: {gallery[props.id].title}</h1>
      </div>

      {/** CATEGORY IMAGE VIEW */}
      <div className="row justify-content-center">
        { /** Category Status is true */
          categoryStatus ?
            categoryGallery.map((item, index) => {

              return <div key={index}>

                { /** Single Image Larger view */
                  index === categoryImageId
                    ? <div className="col">
                      <ViewImage imageUrl={item.url} id={index} />
                    </div>
                    : ''
                }

                {/** All images, 3 images at a time */}
                <div key={index}
                  className={`col-lg-3 cols-md-6  col-sm-6 
                    ${(show === index) ||
                      (show + 1 === index) ||
                      (show + 2 === index)
                      ? 'd-block' : 'd-none'}`}>
                  <Card
                    id={index}
                    imageUrl={item.url}
                    alt={item.alt}
                    key={index}
                    imgWidth="300px"
                    imgHeight="300px"
                  />
                </div>
              </div>
            })
            : <div>LOADING...</div>
        }
      </div>


      {/** NEXT PREV BUTTON */}
      <div className="row justify-content-center">

        {/** prev button */}
        {show > 0
          ? <div className="btn" onClick={() => prevShow()}>
            <BoxArrowInLeft /> Prev</div>
          : <div className="btn disabled">Prev</div>}
        {/** next button */}

        {show < categoryGallery.length - 3
          ? <div className="btn" onClick={() => nextShow()}>Next  <BoxArrowInRight /></div>
          : <div className="btn disabled">Next</div>}

      </div>


      {/** TEXT CONTENT */}
      <div className="row mt-5">
        <div className="col">
          <DangerouslySetInnerHtml text={gallery[props.id].text} />
        </div>
      </div>


    </div>

  )
}
export default Category
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CategoryCard from './CategoryCard';
import { Container, Row, Col } from 'react-bootstrap';
import ViewImage from './ViewImage';

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

  /** text content to HTML */
  function textContent() {
    return { __html: gallery[props.id].text }
  }

  function nextShow() {
    setShow(num => num + 3);
  }
  function prevShow() {
    setShow(num => num - 3)
  }

  //console.log("gallery lenth", categoryGallery.length);
  //  console.log("image id", categoryImageId, 'status', imageView);

  return (
    <Container>
      <Row><h1>Category: {gallery[props.id].title}</h1></Row>
      <Row>
        { /** Category Status is true */
          categoryStatus ?

            categoryGallery.map((item, index) => {
              return <>
                { /** Single Image Larger view */
                  index === categoryImageId
                    ? <Col><ViewImage imageUrl={item.url} id={index} /></Col>
                    : ''
                }
                {/** All images, 3 images at a time */}
                <Col
                  lg={3}
                  sl={6}
                  md={6}
                  key={index}
                  className={(show === index) || (show + 1 === index) || (show + 2 === index)
                    ? 'd-block' : 'd-none'}>
                  <CategoryCard
                    id={index}
                    image={item.url}
                    alt={item.alt}
                  />
                </Col>
              </>
            })
            : <div>Data not found</div>
        }
        <div onClick={() => nextShow()}>
          {show < categoryGallery.length - 3 ? 'Next' : ''}
        </div>
        <div onClick={() => prevShow()}>
          {show > 0 ? 'Prev' : ''}
        </div>
      </Row>
      <Row>
        <div dangerouslySetInnerHTML={textContent()} />
      </Row>
    </Container>
  )
}

export default Category

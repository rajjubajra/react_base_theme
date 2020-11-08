import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './PhotoCard/Card';
import Header from '../components/headers/Header';
import { actionFetchData } from '../actions/actionFetchData';
import Category from './PhotoCard/Category';

function Home() {

  /** to fetch data from reducerFetchData */
  const dispatch = useDispatch();

  /** for random array index  for gallery image display */
  const [img, setImg] = useState(0);

  /** FETCH DATA FROM D8 rest */
  /** data */
  const gallery = useSelector(state => state.reducerFetchData.payload);
  /** fetch status */
  const dataFetched = useSelector(state => state.reducerFetchData.fetched);
  /** data array length */
  const gallength = useSelector(state => state.reducerFetchData.dataLength);
  /** fetch category */
  const categoryId = useSelector(state => state.reducerFetchCategory.categoryId);
  const categoryStatus = useSelector(state => state.reducerFetchCategory.categoryStatus);


  useEffect(() => {
    /** run fetch action */
    dispatch(actionFetchData());
  }, [dispatch])


  useEffect(() => {
    //generate random array index between 0 to array length
    //so that random image will be displayed in landing gallery
    setImg(Math.floor(Math.random() * gallength))
  }, [gallength])

  console.log("GALLERY", gallery);
  console.log("DATALENGTH", gallength, "img", img);
  console.log("category Id", categoryId);

  return (
    <>
      <Header />
      <div className="container photography-one min-vh-100">
        <div className="row justify-content-center mt-5">
          {
            dataFetched ?
              /** if category status is true  */
              categoryStatus ? <Category id={categoryId} /> :
                /** else view gallery */
                gallery.map((item, index) => {
                  return <Card key={index}
                    id={index}
                    imageUrl={item.images[0].url}
                    alt={item.images[0].alt}
                    title={item.title}
                    linkref={item.uuid}
                    imgWidth="300px"
                    imgHeight="300px"
                  />
                }) : 'DATA NOT FOUND'
          }
        </div>
      </div>
    </>
  )

}

export default Home

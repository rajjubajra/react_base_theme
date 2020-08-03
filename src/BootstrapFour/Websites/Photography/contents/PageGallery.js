import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Cards from './components/Cards';
import TitleNNav from '../../../B4Components/B4Header.sj/TitleNNav';
import Header from './headers/Header';
import { actionFetchData } from '../actions/actionFetchData';
import Category from './components/Category';

function PageGallery() {

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
    <div className="photography">

      <Header />

      <Container className={`mt-5`}>
        <main>
          <section>
            <TitleNNav title={"Photography"} href={"/websites-bootstrap"} />
          </section>
          <Row>
            {
              dataFetched ?
                /** if category status is true  */
                categoryStatus ? <Category id={categoryId} /> :
                  /** else view gallery */
                  gallery.map((item, index) => {
                    return <Cards
                      id={index}
                      image={item.images[0].url}
                      alt={item.images[0].alt}
                      title={item.title}
                      linkref={item.uuid}
                    />
                  }) : 'DATA NOT FOUND'
            }
          </Row>

        </main>
      </Container>
    </div>
  )
}

export default PageGallery

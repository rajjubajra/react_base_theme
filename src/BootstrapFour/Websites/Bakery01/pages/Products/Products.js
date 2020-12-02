import React from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { useSelector } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useParams } from 'react-router-dom';
import Card from './Card';


const data = [
  {
    id: "01",
    name: "Bread One",
    ingredients: "Ipsum dolor, Sit amet consectetur, Adipisicing elit, Est modi",
    rate: "£ 7.00",
    group: "bread",
    image: 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/DSC_2379_0.jpeg',
    alt: '',
  },
  {
    id: "02",
    name: "Bread Two",
    ingredients: "Ipsum dolor, Sit amet consectetur, Adipisicing elit, Est modi",
    rate: "£ 7.00",
    group: "bread",
    image: 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/DSC_2379_0.jpeg',
    alt: '',
  },
  {
    id: "03",
    name: "Bread Three",
    ingredients: "Ipsum dolor, Sit amet consectetur, Adipisicing elit, Est modi",
    rate: "£ 7.00",
    group: "bread",
    image: 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/DSC_2379_0.jpeg',
    alt: '',
  },
  {
    id: "04",
    name: "Bread Four",
    ingredients: "Ipsum dolor, Sit amet consectetur, Adipisicing elit, Est modi",
    rate: "£ 7.00",
    group: "bread",
    image: '',
    alt: '',
  },
  {
    id: "05",
    name: "Bread One",
    ingredients: "Ipsum dolor, Sit amet consectetur, Adipisicing elit, Est modi",
    rate: "£ 7.00",
    group: "bread",
    image: '',
    alt: '',
  },
  {
    id: "06",
    name: "Bread One",
    ingredients: "Ipsum dolor, Sit amet consectetur, Adipisicing elit, Est modi",
    rate: "£ 7.00",
    group: "bread",
    image: '',
    alt: '',
  },
  {
    id: "07",
    name: "Bread One",
    ingredients: "Ipsum dolor, Sit amet consectetur, Adipisicing elit, Est modi",
    rate: "£ 7.00",
    group: "bread",
    image: '',
    alt: '',
  },
  {
    id: "11",
    name: "Cake One",
    ingredients: "Ipsum dolor, Sit amet consectetur, Adipisicing elit, Est modi",
    rate: "£ 7.00",
    group: "cake",
    image: '',
    alt: '',
  },
  {
    id: "12",
    name: "Cake Two",
    ingredients: "Ipsum dolor, Sit amet consectetur, Adipisicing elit, Est modi",
    rate: "£ 7.00",
    group: "cake",
    image: '',
    alt: '',
  },
  {
    id: "13",
    name: "Cake Three",
    ingredients: "Ipsum dolor, Sit amet consectetur, Adipisicing elit, Est modi",
    rate: "£ 7.00",
    group: "cake",
    image: '',
    alt: '',
  },
  {
    id: "14",
    name: "Cake Four",
    ingredients: "Ipsum dolor, Sit amet consectetur, Adipisicing elit, Est modi",
    rate: "£ 7.00",
    group: "cake",
    image: '',
    alt: '',
  },
  {
    id: "15",
    name: "Cake One",
    ingredients: "Ipsum dolor, Sit amet consectetur, Adipisicing elit, Est modi",
    rate: "£ 7.00",
    group: "cake",
    image: '',
    alt: '',
  },
  {
    id: "16",
    name: "Cake One",
    ingredients: "Ipsum dolor, Sit amet consectetur, Adipisicing elit, Est modi",
    rate: "£ 7.00",
    group: "cake",
    image: '',
    alt: '',
  },
  {
    id: "17",
    name: "Cake One",
    ingredients: "Ipsum dolor, Sit amet consectetur, Adipisicing elit, Est modi",
    rate: "£ 7.00",
    group: "cake",
    image: '',
    alt: '',
  },
]

function Products() {

  /**  COLOUR MODE */
  const colourMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const variant = useSelector(state => state.reducerSelectColourMode.variant);

  /** URL PARAMS */
  const { grp } = useParams();


  return (
    <div className="bakery-one">
      <div className={colourMode}>

        <ColourMode />
        <NavigationOne />


        <div className="container mt-5">
          {/** title */}
          <div className="row justify-content-center mt-5">
            <h1 className="text-uppercase mt-5 mb-5 display-2"> - {grp} - </h1>
          </div>

          {/** list contents */}
          <div className="row justify-content-center mt-5 mb-5">
            {
              data.length > 0
              && data.map(item => {
                const { id, name, ingredients, rate, group, image, alt } = item
                return group === grp &&
                  <div key={id} className="col-lg-4 col-md-4 col-sm-6">
                    <Card
                      id={id}
                      name={name}
                      ingredients={ingredients}
                      rate={rate}
                      group={group}
                      image={image}
                      alt={alt}
                    />
                  </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

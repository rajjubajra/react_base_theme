import React, { useEffect, useState } from 'react';
import Nav from '../components/header/Nav';
import { useSelector } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import CustomPlaceholder from '../components/CustomPlaceholder';

export default function Home() {

  const [className, setClassName] = useState('light');
  //const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    // setColourVariant(variant);
  }, [colorMode, variant])


  return (
    <div className={className}>
      <ColourMode />
      <Nav />
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-lg-4">
            <h1>h1 : Home</h1>
            <h2>h2 : Home</h2>
            <h3>h3 : Home</h3>
            <h4>h4 : Home</h4>
            <h5>h5 : Home</h5>
            <h6>h6 : Home</h6>
            <div className="mt-5">
              <div className="btn btn-light">Button</div>
            </div>

          </div>
          <div className="col-lg-8">
            <CustomPlaceholder
              width="100%"
              height="300px"
            />

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga maxime, animi iure, inventore, perferendis quidem dolore vero cumque impedit provident eaque itaque quaerat a harum et consequatur saepe quis facilis.</p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt sequi ratione sapiente itaque, cumque enim dignissimos eius unde fuga cupiditate adipisci, culpa expedita impedit. Praesentium perferendis repudiandae iusto rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid qui voluptate numquam placeat molestias cum architecto, dolore voluptates veritatis fugit atque omnis, dolor libero et labore eligendi alias aliquam!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

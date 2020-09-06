import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ColourMode from '../../../components/ColourMode/ColourMode';
import PhotoMusic from '../../../components/PhotoPlaceholder/PhotoMusic';

export const ColumnOne = () => {

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
      <div className="container mt-5">
        <div className="row">
          <div className="col"><h1>Single Column Page</h1></div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div className="d-none d-lg-block" style={{ float: "left", margin: "0px 20px 0px 0px" }}>
              <PhotoMusic
                width="500px"
                height="300px"
              />
            </div>
            <div className="d-none d-md-block d-lg-none" style={{ float: "left", margin: "0px 20px 0px 0px" }}>
              <PhotoMusic
                width="500px"
                height="300px"
              />
            </div>
            <div className="d-none d-sm-block d-md-none" style={{ float: "left", margin: "0px 20px 20px 0px" }}>
              <PhotoMusic
                width="100%"
                height="300px"
              />
            </div>
            <div className="d-block d-sm-none" style={{ margin: "0px 20px 20px 0px" }}>
              <PhotoMusic
                width="100%"
                height="200px"
              />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga maxime, animi iure, inventore, perferendis quidem dolore vero cumque impedit provident eaque itaque quaerat a harum et consequatur saepe quis facilis.</p>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt sequi ratione sapiente itaque, cumque enim dignissimos eius unde fuga cupiditate adipisci, culpa expedita impedit. Praesentium perferendis repudiandae iusto rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid qui voluptate numquam placeat molestias cum architecto, dolore voluptates veritatis fugit atque omnis, dolor libero et labore eligendi alias aliquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga maxime, animi iure, inventore, perferendis quidem dolore vero cumque impedit provident eaque itaque quaerat a harum et consequatur saepe quis facilis.</p>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt sequi ratione sapiente itaque, cumque enim dignissimos eius unde fuga cupiditate adipisci, culpa expedita impedit. Praesentium perferendis repudiandae iusto rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid qui voluptate numquam placeat molestias cum architecto, dolore voluptates veritatis fugit atque omnis, dolor libero et labore eligendi alias aliquam! Praesentium perferendis repudiandae iusto rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid qui voluptate numquam placeat molestias cum architecto, dolore voluptates veritatis fugit atque omnis, dolor libero et labore eligendi alias aliquam!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ColumnOne;

import React, { useEffect, useState } from 'react';
import Nav from '../../components/header/Nav';
import { useSelector } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import CustomPlaceholder from '../../components/CustomPlaceholder';

export const ColumnTwo = () => {

  const [className, setClassName] = useState('light');
  const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    setColourVariant(variant);
  }, [colorMode, variant])


  return (
    <div className={className}>
      <ColourMode />
      <Nav />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col text-center"><h1>Three Column Page</h1></div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <h3 className="mb-3">First Column</h3>
            <div style={{ float: "left", margin: "-15px 20px 0px 0px" }}>
              <CustomPlaceholder
                width="200px"
                height="300px"
              />
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga maxime, animi iure, inventore, perferendis quidem dolore vero cumque impedit provident eaque itaque quaerat a harum et consequatur saepe quis facilis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga maxime, animi iure, inventore, perferendis quidem dolore vero cumque impedit provident eaque itaque quaerat a harum et consequatur saepe quis facilis.</p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt sequi ratione sapiente itaque, cumque enim dignissimos eius unde fuga cupiditate adipisci, culpa expedita impedit. Praesentium perferendis repudiandae iusto rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid qui voluptate numquam placeat molestias cum architecto, dolore voluptates veritatis fugit atque omnis, dolor libero et labore eligendi alias aliquam! eius unde fuga cupiditate adipisci, culpa expedita impedit. Praesentium perferendis repudiandae iusto rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid qui voluptate numquam placeat molestias cum architecto, dolore voluptates veritatis</p>
          </div>
          <div className="col-lg-4">
            <h3 className="mb-3">Second Column</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga maxime, animi iure, inventore, perferendis quidem dolore vero cumque impedit provident eaque itaque quaerat a harum et consequatur saepe quis facilis.</p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt sequi ratione sapiente itaque, cumque enim dignissimos eius unde fuga cupiditate adipisci, culpa expedita impedit. Praesentium perferendis repudiandae iusto rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid qui voluptate numquam placeat molestias cum architecto, dolore voluptates veritatis fugit atque omnis, dolor libero et labore eligendi alias aliquam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt sequi ratione sapiente itaque, cumque enim dignissimos eius unde fuga cupiditate adipisci, culpa expedita impedit. Praesentium perferendis repudiandae iusto rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid qui voluptate numquam placeat molestias cum architecto, dolore voluptates veritatis fugit atque omnis, dolor libero et labore eligendi alias aliquam!</p>
          </div>
          <div className="col-lg-4">
            <h3 className="mb-3">Third Column</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga maxime, animi iure, inventore, perferendis quidem dolore vero cumque impedit provident eaque itaque quaerat a harum et consequatur saepe quis facilis.</p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt sequi ratione sapiente itaque, cumque enim dignissimos eius unde fuga cupiditate adipisci, culpa expedita impedit. Praesentium perferendis repudiandae iusto rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid qui voluptate numquam placeat molestias cum architecto, dolore voluptates veritatis fugit atque omnis, dolor libero et labore eligendi alias aliquam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt sequi ratione sapiente itaque, cumque enim dignissimos eius unde fuga cupiditate adipisci, culpa expedita impedit. Praesentium perferendis repudiandae iusto rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid qui voluptate numquam placeat molestias cum architecto, dolore voluptates veritatis fugit atque omnis, dolor libero et labore eligendi alias aliquam!</p>
          </div>

        </div>


      </div>
    </div>
  )
}
export default ColumnTwo;

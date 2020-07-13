import React from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';

function TestPageTwo() {

  let { id } = useParams();

  console.log(id);

  return (
    <div className="container">
      <Header />

      <h1>Test Page Two [ Params: {id} ]</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nihil. Cum molestias temporibus molestiae itaque suscipit? Esse, doloribus officiis dicta, hic quod illo, veritatis omnis provident porro odio tempore eius!</p>
    </div>
  )
}

export default TestPageTwo

import React from 'react'
import { Route } from 'react-router-dom';
import TestPageOne from './TestPageOne';
import TestPageTwo from './TestPageTwo';


function ComponentTest() {
  return (
    <>
      <Route path="/test" component={TestPageOne} />
      <Route path="/test-page-two/:id" component={TestPageTwo} />
    </>
  )
}

export default ComponentTest

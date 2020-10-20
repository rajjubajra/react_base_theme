import React from 'react'
import { Route } from 'react-router-dom';
import TestPageOne from './TestPageOne';
import TestPageTwo from './TestPageTwo';
import IntersectionObs from './IntersectionObs';
import ScrollUpDown from './ScrollUpDown';


function ComponentTest() {
  return (
    <>
      <Route path="/test" component={TestPageOne} />
      <Route path="/test-page-two/:id" component={TestPageTwo} />
      <Route path="/intersection-observer" component={IntersectionObs} />
      <Route path="/scroll-up-down" component={ScrollUpDown} />
    </>
  )
}

export default ComponentTest

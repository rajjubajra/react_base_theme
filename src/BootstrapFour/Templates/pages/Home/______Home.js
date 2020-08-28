import React from 'react'
import Nav from '../../components/header/Nav';
import SideNav from '../../components/SideNav/SideNav';
import TemplateOne from './HomeOne/HomeOne';

export const Home = () => {
  return (
    <>

      <Nav />
      <SideNav />
      <TemplateOne />

    </>
  )
}

export default Home;

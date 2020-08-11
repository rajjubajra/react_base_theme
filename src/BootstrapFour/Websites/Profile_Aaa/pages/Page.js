import React from 'react';
import Home from './Home';
import Work from './Work';
import Project from './Project';
import Contact from './Contact';
import Nav from '../components/header/Nav';




function Page() {
  return (
    <div className="profile-aaa">
      <header>
        <Nav />
      </header>
      <section id="home">
        <Home />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>


    </div>
  )
}

export default Page

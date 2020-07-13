import React from 'react'
import { Route } from 'react-router-dom';
import PageLotusLanding from './PageLotusLanding';
import PageLotusAbout from './PageLotusAbout';
import PageLotusWhatWeDo from './PageLotusWhatWeDo';
import PageLotusContact from './PageLotusContact';
import PageLotusFAQ from './PageLotusFAQ';


const LotusRouter = () => {
  return (
    <>
      <Route exact path="/lotus" component={PageLotusLanding} />
      <Route path="/lotus-About-us" component={PageLotusAbout} />
      <Route path="/lotus-What-we-do" component={PageLotusWhatWeDo} />
      <Route path="/lotus-contact" component={PageLotusContact} />
      <Route path="/lotus-faq" component={PageLotusFAQ} />
    </>
  )
}

export default LotusRouter

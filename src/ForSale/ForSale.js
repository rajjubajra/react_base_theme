import React from 'react';
import './ForSale.scss';
import Cards from './Cards';



const ForSale = () => {

  return (
    <div className='container mt-5 min-vh-100'>
      <div className="row">
        <div className="col">
          <h1>Websites:</h1>
        </div>

      </div>

      <div className='row'>

        <Cards
          title="Music One"
          linkref="/b4MusicOne-home"
          text="Music"
          type="Band / Solo Artist"
        />

        <Cards
          title="Music Two"
          linkref="/b4Music-two-home"
          text="Music"
          type="Band / Solo Artist"
        />

        <Cards
          title="Music Three"
          linkref="/b4Music-three-home"
          text="Music"
          type="Band / Solo Artist"
        />

        <Cards
          title="Blog One"
          linkref="/b4Blog-one-"
          text="Blog"
          type="Blog"
        />




      </div>
    </div>
  )
}

export default ForSale

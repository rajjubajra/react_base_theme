import React from 'react';
import Cards from '../BootstrapFour/B4Components/Cards';
import TitleNNav from '../BootstrapFour/B4Components/B4Header/TitleNNav';



const Ecommerce = () => {

  return (
    <div className='container mt-5'>
      <TitleNNav title={'Online Shopping Websites'} subtitle="Ecommerce" href="/websites" />
      <div className="row">
        <Cards
          title="Lan Pasaa"
          text="Ecommerce - one"
          type="Shoping cart"
          linkref="/lanpasaa" />
      </div>
    </div>
  )
}

export default Ecommerce

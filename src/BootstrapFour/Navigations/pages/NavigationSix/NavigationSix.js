import React, { useState } from 'react';
import './NavigationSix.scss';
import TitleNNav from '../../../B4Components/B4Header/TitleNNav';
import Navigation from './Navigation/Navigation';
import NavIconThreeLines from './Navigation/NavIconThreeLines';

function NavigationSix() {
  const [view, setView] = useState(false);


  return (
    <div className="navigation-6">
      <TitleNNav title={'Navigation 6'} href="/b4navigations" />
      <span
        onClick={() => setView(view ? false : true)}
        className="d-flex justify-content-end" >
        <NavIconThreeLines />
      </span>

      <Navigation view={view} />



      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Page Contents</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatibus aut, deleniti nobis ratione quod, maiores veritatis ad eaque iusto modi optio aperiam nulla quo molestiae saepe nihil, explicabo nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quaerat fugit consequuntur veniam! Autem numquam unde provident repellat a impedit modi vitae quod corporis repellendus voluptates, id eos sint pariatur in dignissimos iusto aut sapiente? Odio repellat, molestias nemo autem ullam corporis aliquid dolores mollitia, dolor, pariatur velit natus consequuntur voluptatum sunt culpa quas! Nisi unde sunt assumenda libero nobis officia minima, laboriosam voluptatem nesciunt asperiores. Delectus ducimus laborum atque esse dicta ut.</p>
          </div>
        </div>
      </div>

    </div>


  )
}
export default NavigationSix
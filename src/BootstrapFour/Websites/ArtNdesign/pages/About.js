import React from 'react'
import RedSquare from '../components/RedSquare';
import BoxSeven from './BoxSeven/BoxSeven';

export const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestias accusantium sequi harum distinctio consequuntur ducimus quidem repellat? Ab voluptatum totam harum!</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h2>Sit amet consectetur adipisicing elit. Consequuntur explicabo odio dignissimos quisquam perspiciatis provident facilis non voluptas unde deserunt iusto aliquid voluptatem suscipit porro, minima ullam optio, dolor facere.</h2>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h3>
            Eaque quam eius veritatis tempora ullam! Quis excepturi nulla qui voluptas, quam nihil!
          </h3>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <RedSquare />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <BoxSeven />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col d-flex justify-content-center">
          <div className="btn btn-light">View More</div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <h3>Quia nam soluta? Corporis dolore quisquam laudantium reiciendis repellendus atque.</h3>
          <p>Orem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptate accusamus repellat sint delectus maxime quaerat quibusdam provident rem consequatur quasi porro nihil, debitis minus magnam! Maxime doloremque nemo illo.</p>
          <div className="btn btn-light mt-2 mb-5">Play</div>
        </div>
      </div>
    </div>
  )
}

export default About;

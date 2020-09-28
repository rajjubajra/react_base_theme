import React from 'react'
import CustomPlacehoder from './CustomPlaceholder';
import Text from './Text';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';


const data = [
  {
    id: 1,
    title: 'Ipsum dolor sit amet',
    body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit inventore voluptatem harum natus impedit reprehenderit cupiditate laudantium sequi voluptate doloribus, cum cumque sapiente consequuntur nam provident expedita voluptatum! Vel, tenetur!</P>'
  }
]

function BoxNine() {
  return (
    <div>
      <NavigationOne />

      {/** desktop and tablet lg, md and xl */}
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="small-font">[ Box - 9 ]</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <CustomPlacehoder width="100%" height="100vh" />
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div style={{
              display: "flex",
              alignItems: "center",
              height: "100vh",
            }}>
              <Text data={data} />
            </div>
          </div>
        </div>

        {/** Visible  Midium device */}
        <div className="row mt-5">
          <div className="col-lg-8 d-none d-md-block d-lg-none">
            small device
            <CustomPlacehoder width="300px" height="400px" />
          </div>
          <div className="col-lg-8 d-none d-md-block d-lg-none mt-5">
            <Text data={data} />
          </div>
        </div>


        {/** Visible  Small device */}
        <div className="row mt-5">
          <div className="col-lg-8 d-none d-sm-block d-md-none">
            small device
            <CustomPlacehoder width="300px" height="400px" />
          </div>
          <div className="col-lg-8 d-none d-sm-block d-md-none mt-5">
            <Text data={data} />
          </div>
        </div>

        {/** Visible Extra Small device */}
        <div className="row mt-5">
          <div className="col-lg-8 d-block d-sm-none">
            extra small device
            <CustomPlacehoder width="250px" height="400px" />
          </div>
          <div className="col-lg-8 d-block d-sm-none mt-5">
            <Text data={data} />
          </div>
        </div>





      </div>
    </div>
  )
}

export default BoxNine

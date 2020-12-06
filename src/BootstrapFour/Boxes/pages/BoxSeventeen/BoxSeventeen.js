import React from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import Card from './Card';


const data = [
  {
    id: 1,
    title: "Starter",
    rate: "£ 35",
    period: "Per Month",
    product: [
      { pid: 1, name: "gyme", status: "active" },
      { pid: 2, name: "Yoga", status: "active" },
      { pid: 3, name: "Cross Fit", status: "active" },
      { pid: 4, name: "Personal Training", status: "active" },
    ],
    link: "#"
  },
  {
    id: 2,
    title: "Basic",
    rate: "£ 50",
    period: "Per Month",
    product: [
      { pid: 1, name: "gyme", status: "active" },
      { pid: 2, name: "Yoga", status: "active" },
      { pid: 3, name: "Cross Fit", status: "active" },
      { pid: 4, name: "Personal Training", status: "active" },
    ],
    link: "#"
  },
  {
    id: 3,
    title: "Advance",
    rate: "£ 65",
    period: "Per Month",
    product: [
      { pid: 1, name: "gyme", status: "active" },
      { pid: 2, name: "Yoga", status: "active" },
      { pid: 3, name: "Cross Fit", status: "active" },
      { pid: 4, name: "Personal Training", status: "active" },
    ],
    link: "#"
  },

]


function BoxSeventeen() {

  return (
    <div className="container min-vh-100">
      <div className="row mb-5">
        <NavigationOne />
      </div>
      <div className="row">
        <div className="col d-flex flex-wrap justify-content-center">
          {
            data.length > 0 &&
            data.map(item => {
              return <Card
                title={item.title}
                rate={item.rate}
                period={item.period}
                product={item.product}
                link={item.link}
              />
            })
          }
        </div>


      </div>
    </div>
  )
}

export default BoxSeventeen
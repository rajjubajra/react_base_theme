import React from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import Card from './Card';


const data = [
  {
    id: 1,
    icon: "1",
    title: "Special Offer 1",
    text: "<p>Ucing elit. Suscipit earum alias animi delectus, inventore cumque eveniet molestiae laborum similique perferendis rem doloribus, maxime natus recusandae? Harum architecto fugit error dolor?</p>",
    link: "#"
  },
  {
    id: 2,
    icon: "2",
    title: "Special Offer 2",
    text: "<p>Adipisicing elit. Suscipit earum alias animi delectus, inventore cumque eveniet molestiae laborum similique perferendis rem doloribus, maxime natus recusandae? Harum architecto fugit error dolor?</p>",
    link: "#"
  },
  {
    id: 3,
    icon: "3",
    title: "Special Offer 3",
    text: "<p>Ietur adipisicing elit. Suscipit earum alias animi delectus, inventore cumque eveniet molestiae laborum similique perferendis rem doloribus, maxime natus recusandae? Harum architecto fugit error dolor?</p>",
    link: "#"
  },
  {
    id: 4,
    icon: "4",
    title: "Special Offer 4",
    text: "<p>Ysit amet consectetur adipisicing elit. Suscipit earum alias animi delectus, inventore cumque eveniet molestiae laborum similique perferendis rem doloribus, maxime natus recusandae? Harum architecto fugit error dolor?</p>",
    link: "#"
  },



]


function BoxEighteen() {

  return (
    <div className="container min-vh-100">
      <div className="row mb-5">
        <NavigationOne />
      </div>
      <div className="row box-eighteen">
        <div className="col d-flex flex-wrap justify-content-center">
          {
            data.length > 0 &&
            data.map(item => {
              return <Card
                title={item.title}
                text={item.text}
                icon={item.icon}
                link={item.link}
              />
            })
          }
        </div>


      </div>
    </div>
  )
}

export default BoxEighteen
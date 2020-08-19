import React, { useState } from 'react'
import { parse } from 'uuid';


const sectionStyle = {
  width: "100%",
  minHeight: "80vh"
}
const datestyle = {
  fontWeight: "100"
}

const titleStyle = {
  textTransform: "capitalize",
  fontWeight: "200",
  margin: "20px 0px"
}
const bodyStyle = {
  fontWeight: "100",

}



function BlogReadMore(props) {



  console.log("current", props.id, "last", props.id + 1);

  return (
    <section style={sectionStyle}>
      <p style={datestyle}> 19 Aug, 2020</p>
      {
        props.posts.length > 0
          ? props.posts.slice(props.id - 1, props.id).map((item, index) => {
            return <div key={index}>
              <h1 style={titleStyle}>{item.title}</h1>
              <div style={bodyStyle}>
                <p>Article: {item.id}</p>
                <p>{item.body}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus cumque quae, asperiores ipsa laborum iste voluptas saepe cum molestias quos laboriosam odio, ipsum quo eligendi sapiente atque fuga accusamus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum totam assumenda autem obcaecati distinctio accusantium earum fuga rerum. Ipsa velit nemo aliquid. Suscipit alias quasi totam omnis itaque porro perferendis!
                </p>
                <p>  Ipsum dolor sit amet consectetur adipisicing elit. Amet ab voluptate alias consequuntur minima quam maxime magnam, sequi nemo vitae enim? Officia unde vel itaque, exercitationem animi repellat excepturi mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore harum alias consectetur maxime minus praesentium ducimus est quasi reiciendis totam incidunt quisquam nesciunt, eos nulla velit, exercitationem optio molestias?</p>
              </div>
            </div>
          })
          : "Loading..."
      }

    </section>
  )
}

export default BlogReadMore

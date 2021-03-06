import React from 'react'

function AboutMobile() {

  const styleCenter = {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }


  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-11 d-flex justify-content-end border-right pr-4">
          <h1>About</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-11">
          <div style={styleCenter} className="pr-4 pl-4 border-left border-top">
            <h1>Introduction</h1>
            <section className="first-big-letter mt-3">
              <p>Drem ipsum dolor sit amet consectetur adipisicing elit. Dolore vel minus praesentium nihil veniam nostrum voluptatem illo? Delectus officiis laboriosam, doloremque molestias, reiciendis beatae mollitia laudantium perferendis blanditiis adipisci repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, enim eveniet pariatur voluptatum facere maiores ipsam id rerum quisquam, dolor saepe commodi sint voluptates accusantium suscipit adipisci optio, quaerat sit.</p>

              <p>A ipsum dolor sit amet consectetur adipisicing elit. Incidunt enim rem dolorum! Et ullam necessitatibus laborum incidunt velit ducimus beatae soluta! Voluptatum, distinctio tempore quidem tenetur ab praesentium molestias commodi.</p>

              <p>Dolor sit amet, consectetur adipisicing elit. Laudantium laboriosam similique deserunt tenetur consectetur consequatur ex suscipit in sed doloribus necessitatibus cumque sit harum vitae fugiat, quisquam soluta modi ipsa?</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMobile

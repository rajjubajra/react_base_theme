import React, { useState } from 'react'
import Header from './Header';
import Button from 'react-bootstrap/Button';

function TestPageOne() {

  const [page, setPage] = useState(0);

  const nextpage = () => (
    setPage(pagenum => pagenum + 1)
  )
  const prevpage = () => (
    setPage(pagenum => pagenum - 1)
  )

  return (
    <div className="container">

      <Header />
      <h1>Test Page One: {page}</h1>

      <Button onClick={nextpage}>Next</Button>
      <Button onClick={prevpage}>Prev</Button>
      <p>Tit amet consectetur adipisicing elit. Adipisci consectetur in quidem nihil tenetur tempora omnis quo quas eos numquam eaque laboriosam esse ut necessitatibus minus, nobis facere nam dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sapiente in sed, eveniet quae non ut asperiores magni excepturi voluptas numquam deleniti eligendi, adipisci facere illo nostrum mollitia iure voluptatem!</p>
    </div>
  )
}

export default TestPageOne

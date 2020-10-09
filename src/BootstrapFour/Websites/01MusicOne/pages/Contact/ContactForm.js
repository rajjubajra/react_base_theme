import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ContactForm() {


  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <Form onSubmit={() => handleSubmit()}>
      <Form.Row>
        <Form.Group as={Col} controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Tel</Form.Label>
          <Form.Control type="text" placeholder="Phone" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formEnquiry">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Message" />
        </Form.Group>
      </Form.Row>
      <Button variant="btn btn-light" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default ContactForm

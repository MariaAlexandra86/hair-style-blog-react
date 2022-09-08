import React from "react";
import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import GoogleMap from "../components/googleMap/googleMap";

const Contact = (props) => {
  const [error, setError] = useState({
    name: null,
    surname: null,
    email: null,
    phone: null,
  });

  const [formValues, setFormValues] = useState({
    name: null,
    surname: null,
    email: null,
    phone: null,
  });

  const formRef = useRef();


  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 ps-4 pe-4 w-100">
      <Form>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Please tell us your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Your email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Let us know what's on your mind."
            rows={5}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="contact-submit-button"
        >
          Submit
        </Button>
      </Form>
      <div className="m-2"><GoogleMap /></div>
    </div>
  );
};

export default Contact;

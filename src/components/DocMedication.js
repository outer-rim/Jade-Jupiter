import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export default () => {
  const [birthday, setBirthday] = useState("");
  const [name, setName] = useState("");
  console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I am called");
  }

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h1 className="text-center">Patient Medications</h1>
        <h5 className="mb-4">Add Patient Medication Details</h5>
        <Form>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your first name" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={4} className="mb-3">
              <Form.Group id="mid">
                <Form.Label>Medication ID</Form.Label>
                <Form.Control required type="number" placeholder="35" />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="dosage">
                <Form.Label>Dosage</Form.Label>
                <Form.Control required type="text" placeholder="6mg" />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="tid">
                <Form.Label>Treatment ID</Form.Label>
                <Form.Control required type="number" placeholder="35" />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            <span><Button variant="primary" type="submit" onClick = {handleSubmit}>Add</Button>
            </span>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

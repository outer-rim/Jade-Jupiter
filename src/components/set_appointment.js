import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const AppointmentForm = () => {
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
        <h5 className="mb-4">Set Appointment Form</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Patient ID</Form.Label>
                <Form.Control required type="number" placeholder="999" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Doctor ID</Form.Label>
                <Form.Control required type="number" placeholder="001" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Slot ID</Form.Label>
                <Form.Control required type="number" placeholder="123" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Room Number</Form.Label>
                <Form.Control required type="number" placeholder="145" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
            </Col>
            </Row>
            <div className="mt-3">
            <Button variant="primary" type="submit" onClick = {handleSubmit}>Set Appointment</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

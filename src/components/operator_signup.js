import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const OpsignUp = () => {
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
        <h5 className="mb-4">Operator Registration</h5>
        <Form>
          <Row>
          <Col md={5} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Operator Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your first name" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Operator Email</Form.Label>
                <Form.Control required type="email" placeholder="abc@abc.com" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="age">
                <Form.Label>Operator ID</Form.Label>
                <small style={{color: "red", fontWeight: "bold"}}>&nbsp;(Ignore For New Registrations)</small>
                <Form.Control required type="number" placeholder="35" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={4} className="mb-3">
              <Form.Group id="age">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Role</Form.Label>
                <Form.Control required type="number" placeholder="0" />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control required type="number" placeholder="+91 12345 67890" />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="my-4">Address</h5>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control as = "textarea" required type="text" placeholder="Enter address of the operator" />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
          <span><Button variant="primary" type="submit" onClick = {handleSubmit}>Register</Button> &nbsp; &nbsp;
            <Button variant="primary" type="submit" onClick = {handleSubmit}>Update</Button>
            </span>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

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
        <h1 className="text-center">Add Rooms</h1>
        <h5 className="mb-4">Add Room Details</h5>
        <Form>
        <Row className="align-items-center">
            <Col md={4} className="mb-3">
              <Form.Group id="room">
                <Form.Label>Room No.</Form.Label>
                <Form.Control required type="number" placeholder="35" />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="type">
                <Form.Label>Type</Form.Label>
                <Form.Control required type="text" placeholder="ICU" />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="available">
                <Form.Label>Available</Form.Label>
                <Form.Select defaultValue="0">
                  <option value="0">Yes</option>
                  <option value="1">No</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={4} className="mb-3">
              <Form.Group id="floor">
                <Form.Label>Block Floor</Form.Label>
                <Form.Control required type="number" placeholder="35" />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="code">
                <Form.Label>Block Code</Form.Label>
                <Form.Control required type="number" placeholder="35" />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="cost">
                <Form.Label>Cost</Form.Label>
                <Form.Control required type="number" placeholder="10000" />
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

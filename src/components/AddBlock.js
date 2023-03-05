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
        <h1 className="text-center">Add Blocks</h1>
        <h5 className="mb-4">Add Block Details</h5>
        <Form>
          
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="floor">
                <Form.Label>Floor</Form.Label>
                <Form.Control required type="number" placeholder="35" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="code">
                <Form.Label>Code</Form.Label>
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

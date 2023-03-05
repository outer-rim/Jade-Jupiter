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
        <h1 className="text-center">Patient Treatments</h1>
        <h5 className="mb-4">Add Patient Treatment Details</h5>
        <Form>
          <Row>
            <Col md={8} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your first name" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="pid">
                <Form.Label>Patient ID</Form.Label>
                <Form.Control required type="number" placeholder="35" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Doctor Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter doctor's name" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="age">
                <Form.Label>Doctor ID</Form.Label>
                <Form.Control required type="number" placeholder="35" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="illness">
                <Form.Label>Illness Details</Form.Label>
                <Form.Control as = "textarea" required type="text" placeholder="Enter the illness details" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="mb-3">
              <Form.Group id="tid">
                <Form.Label>Test ID</Form.Label>
                <Form.Control required type="number" placeholder="35" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="prid">
                <Form.Label>Procedure ID</Form.Label>
                <Form.Control required type="number" placeholder="35" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="sid">
                <Form.Label>Stay ID</Form.Label>
                <Form.Control required type="number" placeholder="35" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
            <Form.Group id="date">
                <Form.Label>Date</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={(e) => setBirthday(e._d)}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={birthday ? moment(birthday).format("DD/MM/YYYY") : ""}
                        placeholder="dd/mm/yyyy"
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Group id="fileURL">
                <Form.Label>Add File URL</Form.Label>
                <Form.Control required type="text" placeholder="Enter file URL" onChange={(e) => setName(e.target.value)} />
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

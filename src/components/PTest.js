import React, { useState } from "react";
import { BACKEND_URL } from "../constants.js";
import AugmentedAxios from "../utils/augmentedAxios";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export default () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [tname, setTname] = useState("");
  const [tid, setTid] = useState(0);
  const [stat, setStat] = useState("");
  const [aid, setAid] = useState(0);
  const [cost, setCost] = useState(0);
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    AugmentedAxios.post(`${BACKEND_URL}/test/create`, {
      name: tname,
      file_url: url,
      appointment_id: aid,
      report_status: stat,
      cost: cost,
      date: date,
    })
      .then((response) => {
        if (response.status === 200) {
          window.alert("Test for Patient Added Successfully");
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h1 className="text-center">Patient Tests</h1>
        <h5 className="mb-4">Add Patient Test Details</h5>
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
                <Form.Control required type="number" placeholder="35" onChange={(e) => setId(e.target.value)}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="mb-3">
              <Form.Group id="testName">
                <Form.Label>Test Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter test name" onChange={(e) => setTname(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="tid">
                <Form.Label>Test ID</Form.Label>
                <Form.Control required type="number" placeholder="35" onChange={(e) => setTid(e.target.value)}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="results">
                <Form.Label>Test Results / Details</Form.Label>
                <Form.Control as = "textarea" required type="text" placeholder="Enter the test results" onChange={(e) => setStat(e.target.value)}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="aid">
                <Form.Label>Appointment ID</Form.Label>
                <Form.Control required type="number" placeholder="35" onChange={(e) => setAid(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="cost">
                <Form.Label>Cost</Form.Label>
                <Form.Control required type="number" placeholder="35" onChange={(e) => setCost(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="date">
                <Form.Label>Date</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={(e) => setDate(e._d)}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={date ? moment(date).format("DD/MM/YYYY") : ""}
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
                <Form.Control required type="text" placeholder="Enter file URL" onChange={(e) => setUrl(e.target.value)} />
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

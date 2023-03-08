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
  const [doc, setDoc] = useState("");
  const [did, setDid] = useState(0);
  const [illness, setIllness] = useState("");
  const [tid, setTid] = useState(0);
  const [pid, setPid] = useState(0);
  const [sid, setSid] = useState(0);
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    AugmentedAxios.post(`${BACKEND_URL}/treatment/create`, {
    patient_id: id,
    doctor_id: did,
    file_url: url,
    illness_details: illness,
    test_id: tid,
    procedure_id: pid,
    stay_id: sid,
    date: date,
    })
      .then((response) => {
        if (response.status === 200) {
          window.alert("Treatment for Patient Added Successfully");
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
                <Form.Control required type="number" placeholder="35" onChange={(e) => setId(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Doctor Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter doctor's name" onChange={(e) => setDoc(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="age">
                <Form.Label>Doctor ID</Form.Label>
                <Form.Control required type="number" placeholder="35" onChange={(e) => setDid(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="illness">
                <Form.Label>Illness Details</Form.Label>
                <Form.Control as = "textarea" required type="text" placeholder="Enter the illness details" onChange={(e) => setIllness(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="mb-3">
              <Form.Group id="tid">
                <Form.Label>Test ID</Form.Label>
                <Form.Control required type="number" placeholder="35" onChange={(e) => setTid(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="prid">
                <Form.Label>Procedure ID</Form.Label>
                <Form.Control required type="number" placeholder="35" onChange={(e) => setPid(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
              <Form.Group id="sid">
                <Form.Label>Stay ID</Form.Label>
                <Form.Control required type="number" placeholder="35" onChange={(e) => setSid(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={3} className="mb-3">
            <Form.Group id="date">
                <Form.Label>Procedure Date</Form.Label>
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

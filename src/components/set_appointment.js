import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import AugmentedAxios from "../utils/augmentedAxios";
import { BACKEND_URL } from "../constants";


export const AppointmentForm = () => {
  const [patientId, setPatientId] = useState(0);
  const [doctorId, setDoctorId] = useState(0);
  const [slotId, setSlotId] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();
    AugmentedAxios.post(`${BACKEND_URL}/appointment/create`, {
      patient_id:patientId,
      doctor_id:doctorId,
      slot_id:slotId
    }).then((result) => {
      window.alert("Appointment Set Successfully");
      window.location.reload();
    }).catch((e) => {
      console.log(e);
    })
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
                <Form.Control required type="number" placeholder="999" onChange={(e) => setPatientId(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Doctor ID</Form.Label>
                <Form.Control required type="number" placeholder="001" onChange={(e) => setDoctorId(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Slot ID</Form.Label>
                <Form.Control required type="number" placeholder="123" onChange={(e) => setSlotId(e.target.value)} />
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

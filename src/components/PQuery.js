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
        <h4 className="mb-4 text-center" style = {{fontWeight: "bold"}}>Patient Information</h4>
          <Row>
            <Col md={12} className="mb-3">
              <h5 style = {{fontWeight: "bold"}}>General Information: </h5>
              <h6>Name: John Smith</h6>
              <h6>Gender: Male</h6>
              <h6>Age: 54</h6>
              <h6>Phone: +91 8745691230</h6>
              <hr />
              <h5 style = {{fontWeight: "bold"}}>Treatment Details: </h5>
              <h6>Treatment ID: 1</h6>
              <h6>Treatment Date: 1</h6>
              <h6 style = {{fontSize: "18px", color: "black"}}>Illness Details: <h6 style = {{fontSize: "16px", color: "black"}}>Fever with Vomiting</h6> </h6>
              <h6>Room Details: Room Number: 1, BlockFloor: 2, BlockCode: 3</h6>
              <h6>Files: <a href="https://moodlecse.iitkgp.ac.in" style = {{color: "blue"}}>Treatment File</a></h6>
              <h6>Procedure Name: Bypass Surgery</h6>
              <h6>Test Name: Lipid Profile</h6>
              <h6>Test Report: <a href="https://moodlecse.iitkgp.ac.in" style = {{color: "blue"}}>Test File</a></h6>
              <h6>Medicine Details: </h6>
              <h6>Medicine Name: Paracetamol, Dosage: 6mg</h6>
              <hr></hr>
              <h5 style = {{fontWeight: "bold"}}>Appointment Details: </h5>
              <h6>Appointment ID: 1</h6>
              <h6>Appointment Date: 1</h6>
              <h6>Time: 15:45 - 16:20</h6>
              <h6>Room Details: Room Number: 1, BlockFloor: 2, BlockCode: 3</h6>
              <h6>Test Name: Lipid Profile</h6>
              <h6>Test Report: <a href="https://moodlecse.iitkgp.ac.in" style = {{color: "blue"}}>Test File</a></h6>
              </Col>
              </Row>
              
      </Card.Body>
    </Card>
  );
};

import React, { useState } from "react";
import { BACKEND_URL } from "../constants.js";
import AugmentedAxios from "../utils/augmentedAxios";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
  Image,
} from "@themesberg/react-bootstrap";
import axios from "axios";

export default () => {
  const [file, setFile] = useState();
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [tname, setTname] = useState("");
  const [tid, setTid] = useState(0);
  const [stat, setStat] = useState("");
  const [aid, setAid] = useState(0);
  const [cost, setCost] = useState(0);
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [file_uploaded, setFile_uploaded] = useState("");

  const handleFileChange = (e) => {
    e.preventDefault();
    if (e.target.files) {
      setFile(e.target.files[0]);
      setFile_uploaded(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      window.alert("Please upload file!");
      return;
    }
    const formData = new FormData();
		formData.append('image', file);

    AugmentedAxios.post(`${BACKEND_URL}/test/upload`, formData, { headers:{ "Content-Type": "multipart/form-data"} })
      .then((res) => {
        console.log(res);

        AugmentedAxios.post(`${BACKEND_URL}/test/create`, {
          name: tname,
          file_url: res.data.file_url,
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
      })
      .catch((e) => {
        window.alert("Error uploading file!");
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
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your first name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="pid">
                <Form.Label>Patient ID</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="35"
                  onChange={(e) => setId(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="mb-3">
              <Form.Group id="testName">
                <Form.Label>Test Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter test name"
                  onChange={(e) => setTname(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="tid">
                <Form.Label>Test ID</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="35"
                  onChange={(e) => setTid(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="results">
                <Form.Label>Test Results / Details</Form.Label>
                <Form.Control
                  as="textarea"
                  required
                  type="text"
                  placeholder="Enter the test results"
                  onChange={(e) => setStat(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="aid">
                <Form.Label>Appointment ID</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="35"
                  onChange={(e) => setAid(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="cost">
                <Form.Label>Cost</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="35"
                  onChange={(e) => setCost(e.target.value)}
                />
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
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={date ? moment(date).format("DD/MM/YYYY") : ""}
                        placeholder="dd/mm/yyyy"
                        onFocus={openCalendar}
                        onChange={() => {}}
                      />
                    </InputGroup>
                  )}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col xs={12}>

            <Card border="light" className="bg-white shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-4">Upload File</h5>
                <div className="d-xl-flex align-items-center">
                  <div className="user-avatar xl-avatar">
                    <Image fluid rounded src="https://conceptdraw.com/a1717c3/p2/preview/640/pict--file-folder-office-vector-stencils-library" />
                  </div>
                  <div className="file-field">
                    <div className="d-flex justify-content-xl-center ms-xl-3">
                      <div className="d-flex">
                        <span className="icon icon-md">
                          <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                        </span>
                        <input type="file" onChange={handleFileChange}/>
                        <div className="d-md-block text-start">
                          <div className="fw-normal text-dark mb-1">Choose File</div>
                          <div className="text-gray small">
                            {file_uploaded}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          <div className="mt-3">
            <span>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Add
              </Button>
            </span>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

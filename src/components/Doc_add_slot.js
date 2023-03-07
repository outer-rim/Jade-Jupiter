import React, { useState } from "react";
// import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
} from "@themesberg/react-bootstrap";
import AugmentedAxios from "../utils/augmentedAxios";
import { BACKEND_URL } from "../constants";
import moment from "moment";

export const DocAddSlot = () => {
  const [birthday, setBirthday] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  console.log(starttime);

  const [name, setName] = useState("");
  console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAdd = (e) => {
    e.preventDefault();

    let start = moment(birthday).format("YYYY-MM-DD").toString();
    start += `T${starttime}`;

    let end = moment(birthday).format("YYYY-MM-DD").toString();
    end += `T${endtime}`;
    const doctor_id = JSON.parse(localStorage.getItem("profile")).id;
    console.log(doctor_id);

    AugmentedAxios.post(`${BACKEND_URL}/slot/add`, {
      doctor_id,
      starttime: start,
      endtime: end,
    })
      .then((response) => {
        if (response.status === 200) {
          window.alert("Slot Added Successfully");
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h1 className="text-center">Add Slot</h1>
        <h5 className="mb-4">Add Slot Details</h5>
        <Form>
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group id="birthday">
                <Form.Label>Date</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={(e) => setBirthday(e._d)}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={
                          birthday ? moment(birthday).format("DD/MM/YYYY") : ""
                        }
                        placeholder="dd/mm/yyyy"
                        onFocus={openCalendar}
                        onChange={() => {}}
                      />
                    </InputGroup>
                  )}
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="name">
                <Form.Label>Start Time</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </InputGroup.Text>
                  <Form.Control
                    required
                    type="time"
                    value={starttime}
                    placeholder="hh:mm"
                    onChange={(e) => {
                      setStarttime(e.target.value);
                    }}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="cost">
                <Form.Label>End Time</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </InputGroup.Text>
                  <Form.Control
                    required
                    type="time"
                    value={endtime}
                    placeholder="hh:mm"
                    onChange={(e) => {
                      setEndtime(e.target.value);
                    }}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            <span>
              <Button variant="primary" type="submit" onClick={handleAdd}>
                Add
              </Button>
            </span>
          </div>
          <br />
          <Row>
            <h5 className="mb-4">Get Slot Details</h5>
            <Col md={6} className="mb-3">
              <Form.Group id="birthday">
                <Form.Label>Date</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={(e) => setBirthday(e._d)}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={
                          birthday ? moment(birthday).format("DD/MM/YYYY") : ""
                        }
                        placeholder="dd/mm/yyyy"
                        onFocus={openCalendar}
                        onChange={(e) => {
                          setBirthday(e.target.value);
                        }}
                      />
                    </InputGroup>
                  )}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            <span>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Get All Slots
              </Button>
            </span>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

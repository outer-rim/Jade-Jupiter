import { DocQueForm } from "../components/doctor_appointment_query";
import { AppointmentForm } from "../components/set_appointment";
import { PatientTable, RoomTable, SlotTable } from "../components/Widgets";
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import React from "react";
import { BACKEND_URL } from "../constants.js";
import axios from "axios";
import AugmentedAxios from "../utils/augmentedAxios";
import { useState, useEffect } from "react";

export default() => {

  // useEffect(() => {
  //   AugmentedAxios.get(`${BACKEND_URL}/block/list`).then((res) => {
  //     setRoom(res.data.blocks);
  //   });
  // }, []);

    return (
        <>
        <h1 className="text-center">Manage Appointments</h1>
        <Row>
        <Col xs={12} xl={6}>
          <DocQueForm />
        </Col>
        <Col xs = {12} xl={6}>
        <AppointmentForm />
      </Col>
        </Row>
        <Row>
          <Col xs ={12} xl={1}></Col>
        <Col xs={12} xl={10}>
        < SlotTable />
        </Col>
        <br />
        </Row>
        </>
    );
};
import { AdmitForm } from "../components/admit_form";
import { PatientTable, RoomTable } from "../components/Widgets";
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import React from "react";

export default() => {
    return (
        <>
        <h1 className="text-center">Patient Admission</h1>
        <AdmitForm />
        <Row>
        <Col xs={12} xl={6}>
          <PatientTable />
        </Col>
        <Col xs = {12} xl={6}>
      < RoomTable />
      </Col>
        </Row>
        </>
    );
};
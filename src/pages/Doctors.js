import { AdmitForm } from "../components/admit_form";
import { DoctorTable, PatientTable, RoomTable } from "../components/Widgets";
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import React from "react";

export default() => {
    return (
        <>
        <h1 className="text-center">List of All Doctors</h1>
        <DoctorTable />
        </>
    );
};
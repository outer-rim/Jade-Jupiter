import { PatientTableForAppointDoc, PatientTableForDoc } from "../components/Widgets";
import React from "react";

export default() => {
    return (
        <>
        <h1 className="text-center">List of Treated Patients</h1>
        <PatientTableForDoc />
        <br />
        <h1 className="text-center">List of Patients with Appointments</h1>
        <PatientTableForAppointDoc />
        </>
    );
};
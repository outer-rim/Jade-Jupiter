import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';

import { TransactionsTable } from "../components/Widgets";

export default () => {
  const handlesub = (e) => {
    e.preventDefault();
    console.log("I am called");
  }
  return (
    <>
      <h2 className="text-center">Patient Discharge Information</h2>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <p className="mb-0">Enter patient ID of patient to be discharged</p>
          <Form className="navbar-search">
              <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge">
                  <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                  <Form.Control type="number" placeholder="999" />
                  <Button variant="info" className="me-2" style = {{color: "white"}} onClick = {handlesub}>
                  <span>Discharge</span>
                  </Button>
                </InputGroup>
              </Form.Group>
          </Form>
        </div>
      </div>

      <TransactionsTable />
    </>
  );
};

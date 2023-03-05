import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faSearch, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button,Form, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import { GeneralInfoForm } from "../components/Patient_signup";
import { PageTrafficTable, RankingTable } from "../components/Tables";

import Profile3 from "../assets/img/team/profile-picture-3.jpg";


export default () => {
  const handlesub = (e) => {
    e.preventDefault();
    console.log("I am called");
  }

  return (
    <>
      <h1 className="text-center">Remove Stakeholders</h1>
      <Row>
      <Col xs={12} xl={2}>
        </Col>
        <Col xs={12} xl={4}>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      <Form className="navbar-search">
        <h6>Enter Doctor ID of Doctor to be Deleted</h6>
              <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge">
                  <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                  <Form.Control type="number" placeholder="999" />
                  <Button variant="danger" className="me-2" style = {{color: "white"}} onClick = {handlesub}>
                  <span>Remove Doctor</span>
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>
      </div>
        </Col>
        <Col xs={12} xl={4}>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      <Form className="navbar-search">
        <h6>Enter Operator ID of Operator to be Deleted</h6>
              <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge">
                  <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                  <Form.Control type="number" placeholder="999" />
                  <Button variant="danger" className="me-2" style = {{color: "white"}} onClick = {handlesub}>
                  <span>Remove Operator</span>
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>
      </div>
        </Col>
      </Row>
    </>
  );
};


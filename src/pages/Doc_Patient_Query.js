import PQuery from "../components/PQuery";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faSearch, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button,Form, InputGroup, Dropdown } from '@themesberg/react-bootstrap';

export default() => {
    const handlesub = (e) => {
        e.preventDefault();
        console.log("I am called");
      }
    return (
        <>
        <h1 className="text-center">Patient Query</h1>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Form className="navbar-search">
        <h6>Enter Patient ID of patient</h6>
              <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge">
                  <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                  <Form.Control type="number" placeholder="999" />
                  <Button variant="info" className="me-2" style = {{color: "white"}} onClick = {handlesub}>
                  <span>Search Patient</span>
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>
        </div>
        <PQuery />
        </>
    );
};
import { OpsignUp } from '../components/operator_signup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Button, ButtonGroup, Form, InputGroup, Dropdown} from '@themesberg/react-bootstrap';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faSearch, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import React from "react";


export default() => {
    const handlesub = (e) => {
        e.preventDefault();
        console.log("I am called");
      }
    return (
        <>
        <h1 className="text-center">Operator Registration</h1>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      <Form className="navbar-search">
        <h6>Enter Operator ID of Operator to be updated</h6>
              <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge">
                  <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                  <Form.Control type="number" placeholder="245" />
                  <Button variant="info" className="me-2" style = {{color: "white"}} onClick = {handlesub}>
                  <span>Search Operator</span>
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>
      </div>
        <OpsignUp />
        </>
    );
};
import { DocsignUp } from "../components/doctor_signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Col,
  Row,
  Button,
  ButtonGroup,
  Form,
  InputGroup,
  Dropdown,
} from "@themesberg/react-bootstrap";
import {
  faBoxOpen,
  faCartArrowDown,
  faChartPie,
  faChevronDown,
  faClipboard,
  faSearch,
  faCommentDots,
  faFileAlt,
  faPlus,
  faRocket,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";

export default () => {
  const handlesub = (e) => {
    e.preventDefault();
    console.log("I am called");
  };

  const doctor = {
    id: -1,
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    licence: "",
    specialization: "",
    position: "",
  };
  return (
    <>
      <h1 className="text-center">Doctor Registration</h1>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Form className="navbar-search">
          <h6>Enter Doctor ID of Doctor to be updated</h6>
          <Form.Group id="topbarSearch">
            <InputGroup className="input-group-merge">
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="number" placeholder="001" />
              <Button
                variant="info"
                className="me-2"
                style={{ color: "white" }}
                onClick={handlesub}
              >
                <span>Search Doctor</span>
              </Button>
            </InputGroup>
          </Form.Group>
        </Form>
      </div>
      <DocsignUp doctor={doctor} />
    </>
  );
};

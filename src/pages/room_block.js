import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faSearch, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button,Form, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import { GeneralInfoForm } from "../components/Patient_signup";
import { PageTrafficTable, RankingTable } from "../components/Tables";
import AddRoom from "../components/AddRoom";
import AddBlock from "../components/AddBlock";
import { AllRoomTable, BlockTable } from "../components/Widgets";

export default () => {
    const handlesub = (e) => {
      e.preventDefault();
      console.log("I am called");
    }
  
    return (
      <>
        <Row>
          <Col xs={12} xl={6}>
            <AddRoom />
          </Col>
          <Col xs={12} xl={6}>
            <AddBlock />
          </Col>
          <Col xs={12} xl={6}>
            <AllRoomTable />
          </Col>
          <Col xs={12} xl={6}>
            <BlockTable />
          </Col>
        </Row>
      </>
    );
  };
  
  
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faSearch, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button,Form, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import { GeneralInfoForm } from "../components/Patient_signup";
import { PageTrafficTable, RankingTable } from "../components/Tables";
import AddProcedure from "../components/AddProcedure";
import { ProcedureTable } from "../components/Widgets";


import Profile3 from "../assets/img/team/profile-picture-3.jpg";

export default () => {
    const handlesub = (e) => {
      e.preventDefault();
      console.log("I am called");
    }

    return (
        <>  
          <Row>
            <Col xs={12} xl={12}>
              <AddProcedure />
            </Col>
            <Col xs={12} xl={12}>
              <ProcedureTable />
            </Col>
          </Row>
        </>
      );
}
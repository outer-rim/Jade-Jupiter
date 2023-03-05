
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { ProfileCardWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";
import { ProfileDetailsWidget } from "../../components/Widgets";

export default () => {
  return (
    <>
    <br />
    <h1 className="text-center">Profile Details</h1>
    <br />
    <Row>
        <Col xs={12} xl={6}>
          <ProfileCardWidget />
        </Col>
        <Col xs = {12} xl={6}>
      < ProfileDetailsWidget />
      </Col>
      </Row>
    </>
  );
};

import {
  Col,
  Row,
  Button,
  Dropdown,
  ButtonGroup,
} from "@themesberg/react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../constants.js";
import axios from "axios";
import AugmentedAxios from "../utils/augmentedAxios";
import InvoicePdf from "../components/invoicePdf.js";

export default () => {
    const data = {
        length: '100'
    };
  return (
    <>
      <InvoicePdf data = {data} />
    </>
  );
};

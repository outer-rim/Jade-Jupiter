import React, { Component } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faPhone, faStethoscope,faCodeBranch, faShoppingCart, faCalendar, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload, faMap, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Image, ListGroup, Tooltip, OverlayTrigger, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ReactHero from "../../assets/img/brand/light.svg";
import TopNav from "../../components/top_nav";
import Footer from "../../components/foot";

import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
  faMale,
  faParagraph
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { FRONTEND_URL, BACKEND_URL } from "../../constants.js";
import axios from "axios";
class UserCards extends Component {
  state = {
    data: [],
    per: 9,
    page: 1,
    total_pages: null
  };

  uppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results
        });
      });
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadData
    );
  };

  componentDidMount() {
    this.loadData();
  }

  render(){
    return (
      <>
      <TopNav />
      <div className="clearfix container">
        <div xs={12} className="text-center d-flex align-items-center justify-content-center">
               <h1>Our Doctors</h1>
        </div>
        <br></br>
        <div className="row">
          {this.state.data.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {this.uppercase(data.name.first) +
                      " " +
                      this.uppercase(data.name.last)}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      this.uppercase(data.location.state)}
                    <br />
                    <span className="phone">{data.phone}</span>
                  </p>
                </div>
              </div>
              <br></br>
            </div>
          ))}
        </div>
        <br></br>
        {/* <button
          className="btn btn-light btn-block w-50 mx-auto"
          onClick={e => {
            this.loadMore();
          }}
        >
          Load More Users
        </button> */}
        <Row>
        <Col xs={12} className="text-center d-flex align-items-center justify-content-center">
                <Button
                  as={Link}
                  variant="primary"
                  className="animate-hover"
                  to={Routes.Presentation.path}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="animate-center-3 me-3 ms-2"
                  />
                  Go back home
                </Button>
                </Col>
      </Row>
        <br />
      </div>
      
      <Footer />
      </>
    );
  }
}

export default UserCards;

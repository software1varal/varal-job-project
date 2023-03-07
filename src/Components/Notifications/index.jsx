import "./index.css";

import { Col, Container, Row } from "react-bootstrap";

import Appbar from "../../Shared/Navbar/Appbar";
import FilterIconButton from "./FilterButton";
import React from "react";
import bellIcon from "../../asset/bell-icon.svg";
import mailIcon from "../../asset/mail.svg";
import { notificationList } from "../../mockData";
import openMailIcon from "../../asset/mail-open.svg";

function Notifications() {
  return (
    <>
      <Appbar />
      <Container>
        <div className="notifications-container">
          <Row>
            <Col sm className="page-heading">
              <p>Notifications ({notificationList.length})</p>
            </Col>
            <Col sm className="filter-col">
              <FilterIconButton />
            </Col>
          </Row>
          <div className="notification-list">
            {notificationList.map((message, index) => (
              <div
                className="notify-list-item"
                style={{
                  backgroundColor: !message.read
                    ? "rgba(143, 183, 225, 0.1)"
                    : "#fff",
                }}
              >
                <div className="bell-icon icon">
                  <img src={bellIcon} />
                </div>
                <div className="notification-description">
                  <span>{message.description}</span>
                  <p className="time">{message.time} min ago</p>
                </div>
                <div className="notification-read icon">
                  <img src={message.read ? openMailIcon : mailIcon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Notifications;

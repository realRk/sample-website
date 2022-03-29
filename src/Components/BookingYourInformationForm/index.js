import { RightOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import Dropdown from "../Dropdown";
import TextField from "../TextField";

export default function BookingYourInformationForm({ styles, setTab }) {
  return (
    <>
      <Row className={styles.mt3}>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <TextField label="First name" placeholder="Enter first name" />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <TextField label="Last name" placeholder="Enter last name" />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <TextField label="Trading name" placeholder="Enter trading name" />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <TextField label="Postcode" placeholder="Enter postcode" />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <TextField
            label="TOWN/CITY/SUBURB"
            placeholder="Enter town/city/suburb"
          />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Dropdown label="State" placeholder="Choose State" />
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <TextField
            label="Postal Address"
            placeholder="Enter Postal Address"
          />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <TextField label="Phone" placeholder="Enter phone" />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <TextField label="Mobile" placeholder="Enter Phone number" />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <TextField label="Grower Email" placeholder="Enter grower email" />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <TextField label="uhf number" placeholder="Enter UHF Number" />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <TextField
            label="GROWER'S NUTRIEN ACCOUNT NUMBER"
            placeholder="Enter grower's nutrien account number"
          />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Dropdown label="Billing Store" placeholder="Enter billing store" />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <TextField label="Store contact" placeholder="Enter store contact" />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <TextField
            label="STORE CONTACT'S PHONE"
            placeholder="Enter store contact's phone"
          />
        </Col>
      </Row>
      <div className={styles.footerBtnWrap}>
        <Button className={styles.nextBtn} onClick={() => setTab(2)}>
          Next <RightOutlined />
        </Button>
      </div>
    </>
  );
}

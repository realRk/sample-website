import { LeftOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import Dropdown from "../Dropdown";
import TextField from "../TextField";

export default function BookingFarmInformationForm({ styles, setTab, tab }) {
  return (
    <>
      <Row className="mt-3" align="middle">
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <TextField label="Farm Name" placeholder="Enter famer name" />
          <TextField label="Sign at gate" />
          <TextField label="Gate Number" />
          <TextField label="location details" />
          <TextField label="ADDITIONAL LOCATION DETAILS" />
          <Row>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <TextField label="Latitude" />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <TextField label="LONGITUDE" />
            </Col>
          </Row>
          <Row align="middle" justify="space-between" className="mt-2">
            <Col span={24}>
              <p className={styles.label}>
                PREFERRED WEEK FOR THE JOB EXECUTION *
              </p>
            </Col>
            <Col xl={6} lg={6} md={6} sm={24} xs={24}>
              <Dropdown label="" mandatory={false} placeholder="2022" />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Dropdown label="" mandatory={false} placeholder="February" />
            </Col>
            <Col xl={6} lg={6} md={6} sm={24} xs={24}>
              <Dropdown label="" mandatory={false} placeholder="1st Week" />
            </Col>
          </Row>
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <div className="mx-2">
            <p className={styles.label}>PICK YOUR FARM LOCATION</p>
          </div>
          <div className={styles.mapWrap}>
            <img
              alt="map"
              src="https://i.stack.imgur.com/HILmr.png"
              className={styles.map}
            />
          </div>
        </Col>
      </Row>
      <div className={styles.footerBtn}>
        <PlusOutlined />
        <p className="mb-0 mx-2">ADD ANOTHER FARM</p>
      </div>
      <div className="d-flex w-100 justify-content-between align-items-center p-2">
        <Button className={styles.prevBtn} onClick={() => setTab(1)}>
          <LeftOutlined /> Previous
        </Button>
        <Button className={styles.nextBtn} onClick={() => setTab(3)}>
          Next <RightOutlined />
        </Button>
      </div>
    </>
  );
}

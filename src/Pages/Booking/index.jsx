/* eslint-disable jsx-a11y/no-distracting-elements */
import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingFarmInformationForm from "../../Components/BookingFarmInformationForm";
import BookingJobDetailsForm from "../../Components/BookingJobDetailsForm";
import BookingYourInformationForm from "../../Components/BookingYourInformationForm";
import PriceListingComponent from "../../Components/PriceListingComponent";
import styles from "./booking.module.css";

export default function Booking() {
  const [tab, setTab] = useState(1);
  const navigate = useNavigate();
  return (
    <div className={styles.bookingWrapper}>
      <div>
        <marquee width="100%" direction="left" height="auto" bgcolor="#015092">
          <p className={styles.marqueeText}>
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Enim ad minim veniam, quis no
          </p>
        </marquee>
        <div className={styles.header}>
          <div className={styles.div1}>
            <p className={styles.head1}>SeedShield booking form</p>
          </div>
          <div className={styles.div2}>
            <Button
              className={styles.jobsBtn}
              onClick={() => navigate("/jobs")}
            >
              My Jobs
            </Button>
          </div>
        </div>
        <div className={styles.content}>
          <Row>
            <Col xl={16} lg={16} md={14} sm={24} xs={24}>
              <div className={styles.form}>
                <Row className={styles.tab}>
                  <Col
                    span={8}
                    className={tab === 1 ? styles.tabsActive : styles.tabs}
                    onClick={() => setTab(1)}
                  >
                    Your Information
                  </Col>
                  <Col
                    span={8}
                    className={tab === 2 ? styles.tabsActive : styles.tabs}
                    onClick={() => setTab(2)}
                  >
                    Farm Information
                  </Col>
                  <Col
                    span={8}
                    className={tab === 3 ? styles.tabsActive : styles.tabs}
                    onClick={() => setTab(3)}
                  >
                    Job Details
                  </Col>
                </Row>
                {tab === 1 && (
                  <BookingYourInformationForm
                    styles={styles}
                    setTab={setTab}
                    tab={tab}
                  />
                )}
                {tab === 2 && (
                  <BookingFarmInformationForm
                    styles={styles}
                    setTab={setTab}
                    tab={tab}
                  />
                )}
                {tab === 3 && (
                  <BookingJobDetailsForm
                    styles={styles}
                    setTab={setTab}
                    tab={tab}
                  />
                )}
              </div>
            </Col>

            <Col xl={8} lg={8} md={10} sm={24} xs={24}>
              <PriceListingComponent />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

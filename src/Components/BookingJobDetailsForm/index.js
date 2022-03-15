import {
  DeleteOutlined,
  DownCircleOutlined,
  LeftOutlined,
  PlusOutlined,
  RightOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Col, Collapse, Row } from "antd";
import React from "react";
import Dropdown from "../Dropdown";
import TextField from "../TextField";

import style from "./index.module.css";

export default function BookingJobDetailsForm({ styles, setTab }) {
  const { Panel } = Collapse;
  return (
    <div className="mt-2">
      <div className={style.form}>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIconPosition="right"
          expandIcon={({ isActive }) =>
            isActive ? <UpCircleOutlined /> : <DownCircleOutlined />
          }
        >
          <Panel header="Farm 1" key="1">
            <Row className="my-2" align="middle">
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <Dropdown label={"Crop type"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"Number of Varieties"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={4} xs={4}>
                <div className="w-100 d-flex justify-content-end">
                  <Button shape="circle" icon={<DeleteOutlined />} />
                </div>
              </Col>
            </Row>
            <Row className={style.variety} align="middle">
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"Name of Varieties"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED GRADED (TONNES )"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField
                  label={"MARKET CLEANED (TONNES)"}
                  mandatory={false}
                />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED TREATED (TONNES)"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField
                  label={"SEED TREATMENT PRODUCTS"}
                  mandatory={false}
                />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED TREATMENT RATE"} mandatory={false} />
              </Col>
            </Row>
            <Row className={style.variety} align="middle">
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"Name of Varieties"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED GRADED (TONNES )"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField
                  label={"MARKET CLEANED (TONNES)"}
                  mandatory={false}
                />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED TREATED (TONNES)"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField
                  label={"SEED TREATMENT PRODUCTS"}
                  mandatory={false}
                />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED TREATMENT RATE"} mandatory={false} />
              </Col>
            </Row>
            <hr />
            <Row className="my-2" align="middle">
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <Dropdown label={"Crop type"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"Number of Varieties"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={4} xs={4}>
                <div className="w-100 d-flex justify-content-end">
                  <Button shape="circle" icon={<DeleteOutlined />} />
                </div>
              </Col>
            </Row>
            <Row className={style.variety} align="middle">
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"Name of Varieties"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED GRADED (TONNES )"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField
                  label={"MARKET CLEANED (TONNES)"}
                  mandatory={false}
                />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED TREATED (TONNES)"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField
                  label={"SEED TREATMENT PRODUCTS"}
                  mandatory={false}
                />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED TREATMENT RATE"} mandatory={false} />
              </Col>
            </Row>
            <div className={styles.footerBtn}>
              <PlusOutlined />
              <p className="mb-0 mx-2">ADD ROW</p>
            </div>
          </Panel>
        </Collapse>
      </div>
      <div className={style.form}>
        <Collapse
          bordered={false}
          expandIconPosition="right"
          expandIcon={({ isActive }) =>
            isActive ? <UpCircleOutlined /> : <DownCircleOutlined />
          }
        >
          <Panel header="Farm 2" key="1">
            <Row className="my-2" align="middle">
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <Dropdown label={"Crop type"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"Number of Varieties"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={4} xs={4}>
                <div className="w-100 d-flex justify-content-end">
                  <Button shape="circle" icon={<DeleteOutlined />} />
                </div>
              </Col>
            </Row>
            <Row className={style.variety} align="middle">
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"Name of Varieties"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED GRADED (TONNES )"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField
                  label={"MARKET CLEANED (TONNES)"}
                  mandatory={false}
                />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED TREATED (TONNES)"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField
                  label={"SEED TREATMENT PRODUCTS"}
                  mandatory={false}
                />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED TREATMENT RATE"} mandatory={false} />
              </Col>
            </Row>
            <Row className={style.variety} align="middle">
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"Name of Varieties"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED GRADED (TONNES )"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField
                  label={"MARKET CLEANED (TONNES)"}
                  mandatory={false}
                />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED TREATED (TONNES)"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField
                  label={"SEED TREATMENT PRODUCTS"}
                  mandatory={false}
                />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED TREATMENT RATE"} mandatory={false} />
              </Col>
            </Row>
            <hr />
            <Row className="my-2" align="middle">
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <Dropdown label={"Crop type"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"Number of Varieties"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={4} xs={4}>
                <div className="w-100 d-flex justify-content-end">
                  <Button shape="circle" icon={<DeleteOutlined />} />
                </div>
              </Col>
            </Row>
            <Row className={style.variety} align="middle">
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"Name of Varieties"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED GRADED (TONNES )"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField
                  label={"MARKET CLEANED (TONNES)"}
                  mandatory={false}
                />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED TREATED (TONNES)"} mandatory={false} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField
                  label={"SEED TREATMENT PRODUCTS"}
                  mandatory={false}
                />
              </Col>
              <Col xl={8} lg={8} md={8} sm={10} xs={10}>
                <TextField label={"SEED TREATMENT RATE"} mandatory={false} />
              </Col>
            </Row>
            <div className={styles.footerBtn}>
              <PlusOutlined />
              <p className="mb-0 mx-2">ADD ROW</p>
            </div>
          </Panel>
        </Collapse>
      </div>
      <div className="p-3 d-flex flex-column">
        <Checkbox>
          <span className={styles.checkboxText}>
            I acknowledge that diesel to operate SeedShield Generator is input
            required at the completion of this job and any chemical not supplied
            by SeedShield will incur additional charges
          </span>
        </Checkbox>
        <br />
        <Checkbox>
          <span className={styles.checkboxText}>
            Please note there will be a set up/relocation fee for any complete
            or partially complete job of 50 tonnes or less. <br />- CC24
            (smaller machine) $700 <br />- TS35 (larger machine) $1000
          </span>
        </Checkbox>
        <br />
        <Checkbox>
          <span className={styles.checkboxText}>
            Line Fee – Any Line of Grain less than 15 tonne will be charged at
            $150/line (excluding Canola Sizing and Speciality Seeds)
          </span>
        </Checkbox>
        <br />
        <Checkbox>
          <span className={styles.checkboxText}>
            Any chemical NOT supplied by SeedShield will incur an additional
            charge of $5/L.
          </span>
        </Checkbox>
      </div>
      <div className="d-flex w-100 justify-content-between align-items-center p-2">
        <Button className={styles.prevBtn} onClick={() => setTab(2)}>
          <LeftOutlined /> Previous
        </Button>
        <Button className={styles.nextBtn} onClick={() => alert("success")}>
          Submit <RightOutlined />
        </Button>
      </div>
    </div>
  );
}

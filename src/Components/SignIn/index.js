import React from "react";
import { Input, Select, Button, Row, Col } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./signIn.css";
const { Option } = Select;
const SignIn = ({ onModeChange }) => {
  return (
    <div className="container-fluid sign-in-div">
      <div>
        <span className="login-label-sign-in">Log in</span>
      </div>
      <Row>
        <Col>
          <Input
            prefix={<UserOutlined style={{ color: "#9c9c9c" }} />}
            size="large"
            placeholder="Email Address"
            className="sign-up-email-input-style"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input
            prefix={<LockOutlined style={{ color: "#9c9c9c" }} />}
            type={"Password"}
            size="large"
            placeholder="Password"
            className="sign-in-password-input-style"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input
            prefix={<EnvironmentOutlined style={{ color: "#9c9c9c" }} />}
            size="large"
            placeholder="Enter your Postcode"
            className="sign-in-password-input-style"
          />
        </Col>
      </Row>
      {/* <Row>
        <Col xl={{ span: 16 }}>
          <Select
            className="antd-custom-select-country-select"
            size="large"
            placeholder="Choose your state"
            optionFilterProp="children"
            onChange={() => {}}
            onSearch={() => {}}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Col>
      </Row> */}
      <Row>
        <Col xl={{ span: 16 }}>
          <Button type="text" className="sign-in-button">
            LOG IN
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xl={{ span: 16 }}>
          <Button type="text" className="or-signup-href-link">
            <span>Or login with</span>{" "}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="auth-button-group">
          <Button
            icon={
              <img
                style={{ marginRight: "10px" }}
                alt="google"
                src={require("../../assets/glogo.png")}
              />
            }
            type="text"
            className="google-button-auth-zero"
          >
            Google
          </Button>
          <Button
            icon={
              <img
                style={{ marginRight: "10px" }}
                alt="google"
                src={require("../../assets/vlogo.png")}
              />
            }
            type="text"
            className="vwork-button-auth-zero"
          >
            VWork
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xl={{ span: 16 }}>
          <Button type="text" className="signup-href-link">
            <span onClick={() => onModeChange(window.screen.width)}>
              Not a registered user?{" "}
              <span style={{ color: "#7ECC01" }}>Sign</span> up now!
            </span>{" "}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;

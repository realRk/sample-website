import React from "react";
import { Input, Select, Button, Row, Col } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import "./index.css";
const { Option } = Select;
const SignUp = ({ onModeChange }) => {
  return (
    <div className="container-fluid">
      <div>
        <span className="login-label-sign-up">Sign up</span>
      </div>
      <Row>
        <Col xl={{ span: 8, offset: "1" }}>
          <Input
            size="large"
            placeholder="First Name"
            className="signup-first-name"
          />
        </Col>
        <Col xl={{ span: 8 }}>
          <Input
            size="large"
            placeholder="Last Name"
            className="signup-second-name"
          />
        </Col>
      </Row>
      <Row>
        <Col xl={{ span: 16, offset: 1 }}>
          <Input
            size="large"
            placeholder="Email Address"
            className="sign-up-email-style"
          />
        </Col>
      </Row>
      <Row>
        <Col xl={{ span: 8, offset: "1" }}>
          <Input
            type={"password"}
            size="large"
            placeholder="Password"
            className="signup-first-password"
          />
        </Col>
        <Col xl={{ span: 8 }}>
          <Input
            type={"password"}
            size="large"
            placeholder="Confirm password"
            className="signup-second-password"
          />
        </Col>
      </Row>
      <Row>
        <Col xl={{ span: 16, offset: 1 }}>
          <Input
            // prefix={<EnvironmentOutlined style={{ color: "#9c9c9c" }} />}
            size="large"
            placeholder="Enter your Postcode"
            className="sign-up-email-style"
          />
        </Col>
      </Row>
      {/* <Row>
        <Col xl={{ span: 16, push: 4 }}>
          <Select
            prefix={<UserOutlined />}
            clearIcon={true}
            className="antd-custom-select country-select"
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
          <Button type="text" className="sign-up-button">
            SIGN UP
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xl={{ span: 16 }}>
          <Button type="text" className="login-href-link">
            <span onClick={() => onModeChange(window.screen.width)}>
              Already a registered user?{" "}
              <span style={{ color: "#7ECC01" }}>Login</span> now!
            </span>{" "}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;

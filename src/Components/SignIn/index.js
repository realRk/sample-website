import React, { useEffect } from "react";
import { Input, Select, Button, Row, Col, Form, notification, message } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./signIn.css";
import { useNavigate } from "react-router-dom";
import { useAuthUiContext } from "../UserAuthentication/AuthUIContext";
const { Option } = Select;
const SignIn = ({ onModeChange }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { userSignIn, state } = useAuthUiContext();
  let { user } = state;
  const openNotificationWithIcon = (type,title,message) => {
    notification[type]({
      message: `${title}`,
      description:`${message}`
    });
  };
  useEffect(() => {
    console.log(user);
    let userName = user?.userData?.displayName;
    user?.access_token &&
      localStorage.setItem("access_token", user?.access_token);
    user?.access_token && localStorage.setItem("user_name", userName);
    user?.access_token&&openNotificationWithIcon('success','Login success','')
    user?.access_token && navigate("/admin");
  }, [user]);
  const onLoginButtonClicked = (values) => {
    let { email, password } = values;
    let params = {
      email: email,
      password: password,
    };
    userSignIn(params,()=>openNotificationWithIcon('warning','Login failed',''))

  };
  return (
    <div className="container-fluid sign-in-div">
      <div>
        <span className="login-label-sign-in">Log in</span>
      </div>
      <Form
        form={form}
        autoComplete="off"
        onFinish={onLoginButtonClicked}
        onFinishFailed={(errorInfo) => {
          console.log(errorInfo);
        }}
      >
        <Row>
          <Col>
            <Form.Item
              name="email"
              rules={[
                {
                  required: "true",
                  message: "email is required",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined style={{ color: "#9c9c9c" }} />}
                size="large"
                placeholder="Email Address"
                className="sign-up-email-input-style"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item
              name="password"
              rules={[
                {
                  required: "true",
                  message: "password is required",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined style={{ color: "#9c9c9c" }} />}
                type={"Password"}
                size="large"
                placeholder="Password"
                className="sign-in-password-input-style"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item
              name="postcode"
              rules={[
                {
                  required: "true",
                  message: "postcode is required",
                },
              ]}
            >
              <Input
                prefix={<EnvironmentOutlined style={{ color: "#9c9c9c" }} />}
                size="large"
                placeholder="Enter your Postcode"
                className="sign-in-password-input-style"
              />
            </Form.Item>
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
            <Form.Item>
              <Button
                type="text"
                className="sign-in-button"
                // onClick={() => navigate("/customers-list")}
                htmlType="submit"
              >
                LOG IN
              </Button>
            </Form.Item>
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
                <span style={{ color: "#7ECC01" }}>Sign up</span> now!
              </span>{" "}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SignIn;

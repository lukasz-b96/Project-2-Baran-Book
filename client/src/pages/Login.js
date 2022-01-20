import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/userActions";
import "./css/Pages.css";
function Login() {
  const dispatch = useDispatch();

  function login(values) {
    // console.log(values);
    dispatch(userLogin(values));
  }
  return (
    <div className="register-login">
      <div className="d-flex align-items-center justify-content-center">
        <img
          className="mb-5 mt-5"
          src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`}
        />
      </div>
      <Row justify="center">
        <Col lg={10} xs={24}>
          <Form layout="vertical" className="bs1 p-4" onFinish={login}>
            <h3>Login</h3>
            <hr></hr>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <div>
              <Button htmlType="submit">Login</Button>
            </div>
            <Link to="/register">Click here to Register</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;

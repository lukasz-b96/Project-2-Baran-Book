import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/UserActions";
import "./css/Pages.css";
function Login() {
  const dispatch = useDispatch();

  function login(values) {
    // console.log(values);
    dispatch(userLogin(values));
  }
  return (
    <div className="register-login">
      <div className="card-main">
        <div className="d-flex align-items-center justify-content-center">
          <img
            alt="logo"
            className="logo2"
            src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`}
          />
        </div>

        <Form layout="vertical" className="bs1 p-4" onFinish={login}>
          <h3>Login</h3>
          <hr></hr>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true }]}
            placeholder="e.g. Messi"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
            placeholder="e.g. Messi"
          >
            <Input.Password />
          </Form.Item>

          <div>
            <Button htmlType="submit">Login</Button>
          </div>
          <div className="pt-3">
            <Link to="/register">Click here to Register</Link>
          </div>
        </Form>

        <span className="mt-2 mb-1"></span>
      </div>
    </div>
  );
}

export default Login;

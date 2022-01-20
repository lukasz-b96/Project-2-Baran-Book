import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/actions/userActions";
import "./css/Pages.css";
function Register() {
  const dispatch = useDispatch();
  function register(values) {
    // console.log(values);
    delete values.cpassword;
    dispatch(userRegister(values));
  }
  return (
    <div>
      <div className="register-login ">
        <div className="d-flex align-items-center justify-content-center">
          <img
            className="mb-5  logo2"
            src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`}
          />
        </div>

        <Row justify="center" className="">
          <Col lg={6} xs={15}>
            <Form
              layout="vertical"
              className="bs1 p-4 align-items-center"
              onFinish={register}
            >
              <h3>Register</h3>
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
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="cpassword"
                type="password"
                rules={[
                  { required: true },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <div>
                <Button htmlType="submit">Register</Button>
              </div>
              <div className="pt-3">
                <Link to="/login">Already registered, click here to login</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Register;

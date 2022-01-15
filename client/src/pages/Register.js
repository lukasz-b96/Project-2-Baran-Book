import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/actions/userActions";
function Register() {
  const dispatch = useDispatch();
  function register(values) {
    console.log(values);
    delete values.cpassword;
    dispatch(userRegister(values));
  }
  return (
    <div>
      <Row justify="center" className="register-div">
        <Col lg={10} xs={24}>
          <Form layout="vertical" className="bs1 p-4" onFinish={register}>
            <h3>Register</h3>
            <hr></hr>
            <Form.Item
              label="username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="confirmpassword"
              name="cpassword"
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
              <Input />
            </Form.Item>

            <div>
              <Button htmlType="submit">Register</Button>
            </div>
            <Link to="/login">Already registered, click here to login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;

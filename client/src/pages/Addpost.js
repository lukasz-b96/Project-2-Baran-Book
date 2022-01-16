//rfce react function components export
import { Form, Col, Row, Input } from "antd";
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
const { TextArea } = Input;
function Addpost() {
  return (
    <DefaultLayout>
      <Row>
        <Col lg={12}>
          <Form>
            <Form.Item name="description" label="Description">
              <TextArea></TextArea>
            </Form.Item>
            <Form.Item name="image" label="Image">
              <TextArea></TextArea>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default Addpost;

//rfce react function components export
import { Form, Col, Row, Input, Button } from "antd";
import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import "./Addpost.css";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postActions";
const { TextArea } = Input;

function Addpost() {
  //hook
  const [image, setimage] = useState("");
  const dispatch = useDispatch();

  function handleFileInput(e) {
    const file = e.target.files[0];
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      //console.log(reader.result);
      setimage(reader.result);
    };
  }

  const validImage = new RegExp(/\.(jpg|jpeg|png)$/);

  function addpost(values) {
    values.image = image;
    // console.log(values.image);
    dispatch(addPost(values));
  }

  return (
    <DefaultLayout>
      <Row justify="center">
        <Col lg={12}>
          <Form className="bs1 p-3 mt-5" layout="vertical" onFinish={addpost}>
            <h3>Add new Post</h3>
            <Form.Item name="description" label="Description">
              <TextArea></TextArea>
            </Form.Item>
            <Form.Item
              name="image"
              label="Image"
              rules={[
                { required: true },
                () => ({
                  validator(_, value) {
                    // console.log(_);
                    if (validImage.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("It is not an image!"));
                  },
                }),
              ]}
            >
              <Input type="file" onChange={handleFileInput}></Input>
            </Form.Item>

            <div>{image !== "" && <img src={image} className="image" />}</div>
            <Button type="primary" htmlType="submit">
              Post
            </Button>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default Addpost;

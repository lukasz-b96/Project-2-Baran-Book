//rfce react function components export
import { Form, Col, Row, Input, Button } from "antd";
import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postActions";
import "./css/Pages.css";
const { TextArea } = Input;

function AddPost() {
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

  function addpost(values) {
    values.image = image;
    // console.log(values.image);
    dispatch(addPost(values));
  }

  return (
    <DefaultLayout>
      <div className="card-main">
        <Form className="bs1 p-3 mt-5" layout="vertical" onFinish={addpost}>
          <h3>Add new Post</h3>
          <Form.Item name="description" label="Description">
            <TextArea></TextArea>
          </Form.Item>
          <Form.Item name="image" label="Image" rules={[{ required: true }]}>
            <Input type="file" onChange={handleFileInput}></Input>
          </Form.Item>

          <div>
            {image !== "" && <img src={image} className="postimage2 mr-3" />}
          </div>
          <Button type="primary" htmlType="submit">
            Post
          </Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default AddPost;

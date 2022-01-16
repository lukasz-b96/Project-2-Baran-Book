import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import Post from "../components/Post";

function Home() {
  const { users } = useSelector((state) => state.userReducer);
  const { posts } = useSelector((state) => state.postsReducer);
  return (
    <DefaultLayout>
      <Row justify="center">
        <Col lg={16} xs={24} className="max-size">
          {posts.map((post, index) => {
            return <Post key={index} post={post} />;
          })}
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default Home;

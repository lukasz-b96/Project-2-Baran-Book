import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import Post from "../components/Post";
function Home() {
  const { posts } = useSelector((state) => state.postsReducer);
  return (
    <DefaultLayout>
      <Row justify="center">
        {console.log(posts)}
        <Col lg={12} xs={24}>
          {posts.map((post, index) => {
            return <Post key={index} post={post} />;
          })}
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default Home;

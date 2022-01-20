import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import Post from "../components/Post";
import "./css/Pages.css";
function Home() {
  const { posts } = useSelector((state) => state.postsReducer);
  return (
    <DefaultLayout>
      <div className="m-3">
        {posts.map((post, index) => {
          return (
            <div key={index} className="card-main">
              <Post post={post} />
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
}

export default Home;

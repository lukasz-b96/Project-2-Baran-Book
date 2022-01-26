import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import Post from "../components/Post";
import "./css/Pages.css";
function Home() {
  const { posts } = useSelector((state) => state.postsReducer);
  return (
    <DefaultLayout>
      <div className="">
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

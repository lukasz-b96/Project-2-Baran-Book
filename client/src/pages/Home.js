//rfce react function components export
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";

function Home() {
  const { users } = useSelector((state) => state.userReducer);
  const { posts } = useSelector((state) => state.postsReducer);
  return (
    <DefaultLayout>
      Home
      <h2> {posts.length}</h2>
    </DefaultLayout>
  );
}

export default Home;

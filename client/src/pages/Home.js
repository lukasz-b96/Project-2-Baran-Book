//rfce react function components export
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";

function Home() {
  const { users } = useSelector((state) => state.userReducer);
  return (
    <DefaultLayout>
      Home
      <h2>Users length = {users.length}</h2>
    </DefaultLayout>
  );
}

export default Home;

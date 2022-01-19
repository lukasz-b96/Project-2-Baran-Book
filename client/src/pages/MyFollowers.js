import { Col, Row, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import User from "../components/User";
import { getAllUsers } from "../redux/actions/userActions";
const currentUser = JSON.parse(localStorage.getItem("user"));
function AllUsers() {
  const { users } = useSelector((state) => state.usersReducer);

  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <DefaultLayout>
      <div>
        <Row justify="center" className="mt-4">
          Siema
        </Row>
        <Row justify="center" gutter={16} className="mt-3">
          {users
            .filter((obj) => currentUser.followers.includes(obj._id))
            .map((user, index) => {
              {
                console.log(currentUser.followers);
              }
              return <User key={index} user={user} />;
            })}
        </Row>
      </div>
    </DefaultLayout>
  );
}

export default AllUsers;

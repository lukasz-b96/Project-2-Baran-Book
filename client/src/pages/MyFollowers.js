import { Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import User from "../components/User";
import { getAllUsers } from "../redux/actions/UserActions";
import "./css/Pages.css";
const currentUser = JSON.parse(localStorage.getItem("user"));
function AllUsers() {
  const { users } = useSelector((state) => state.usersReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DefaultLayout>
      <div>
        <Row justify="center" className="mt-4">
          <h1>Followers:</h1>
        </Row>
        <Row justify="center" className="mt-3">
          {users
            .filter((obj) => currentUser.followers.includes(obj._id))
            .map((user, index) => {
              return (
                <div className="ml-2" key={index}>
                  <User user={user} />
                </div>
              );
            })}
        </Row>
      </div>
    </DefaultLayout>
  );
}

export default AllUsers;

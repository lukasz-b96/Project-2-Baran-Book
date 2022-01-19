import { Col, Row, Input } from "antd";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import User from "../components/User";
import { getAllUsers } from "../redux/actions/userActions";

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
        <Row justify="center">
          <Col lg={20} className="d-flex mt-3">
            <Input
              placeholder="search users"
              className="search users bs1"
              value={searchKey}
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row justify="center" gutter={16} className="mt-3">
          {users
            .filter((obj) =>
              obj.username.toLowerCase().includes(searchKey.toLowerCase())
            )
            .map((user, index) => {
              return <User key={index} user={user} />;
            })}
        </Row>
      </div>
    </DefaultLayout>
  );
}

export default AllUsers;

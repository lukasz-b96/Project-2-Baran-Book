import { Button, Col, Row, Input } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import {
  followUser,
  getAllUsers,
  unfollowUser,
} from "../redux/actions/userActions";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LogoutOutlined,
  UserAddOutlined,
  CheckOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;

function User({ user }) {
  const { users } = useSelector((state) => state.usersReducer);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const { followLoading, unfollowLoading } = useSelector(
    (state) => state.alertsReducer
  );
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [followLoading, unfollowLoading]);
  return (
    <div>
      {currentUser._id !== user._id && (
        <Col lg={5} xs={24} className="text-left">
          <div className="bs1 p-2 mt-3">
            <div>{user.username}</div>
            <p>{moment(user.createdAt).format("MMM DD yyyy")}</p>

            {user.followers.find((obj) => obj == currentUser._id) ? (
              <div className="d-flex">
                <Button
                  className="ml-2"
                  onClick={() => {
                    dispatch(
                      unfollowUser({
                        currentuserid: currentUser._id,
                        receiveruserid: user._id,
                      })
                    );
                  }}
                >
                  UnFollow
                </Button>
              </div>
            ) : (
              <Button
                icon={<UserAddOutlined />}
                onClick={() => {
                  dispatch(
                    followUser({
                      currentuserid: currentUser._id,
                      receiveruserid: user._id,
                    })
                  );
                }}
              >
                Follow
              </Button>
            )}
          </div>
        </Col>
      )}
    </div>
  );
}

export default User;

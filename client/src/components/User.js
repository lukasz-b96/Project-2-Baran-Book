import { Button, Col } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/Components.css";
import {
  followUser,
  getAllUsers,
  unfollowUser,
} from "../redux/actions/UserActions";

function User({ user }) {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const { followLoading, unfollowLoading } = useSelector(
    (state) => state.alertsReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followLoading, unfollowLoading]);
  return (
    <div class="fix-user">
      {currentUser._id !== user._id && (
        <Col lg={5} xs={24} className="text-left">
          <div className="bs1 p-3 mt-3">
            <span className="d-flex justify-content-center mb-2 username">
              {user.username}
            </span>
            <span className="d-flex justify-content-center font-weight-bold disc">
              User Joined:
            </span>
            <span className="d-flex justify-content-center disc">
              {moment(user.createdAt).format("DD.MM.YYYY HH:mm")}
            </span>
            {user.followers.find((obj) => obj === currentUser._id) ? (
              <div className=" mt-2 ">
                <Button
                  type="primary"
                  className=" d-flex m-auto bs1 "
                  onClick={() => {
                    dispatch(
                      unfollowUser({
                        currentuserid: currentUser._id,
                        receiveruserid: user._id,
                      })
                    );
                  }}
                >
                  Unfollow
                </Button>
              </div>
            ) : (
              <div className=" mt-2">
                <Button
                  className=" d-flex m-auto bs1 "
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
              </div>
            )}
          </div>
        </Col>
      )}
    </div>
  );
}

export default User;

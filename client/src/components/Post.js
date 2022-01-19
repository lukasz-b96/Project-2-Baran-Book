import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  HeartFilled,
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Row, Col, Input } from "antd";
import { getAllPosts, likeOrUnlikePost } from "../redux/actions/postActions";

const { TextArea } = Input;
function Post({ post }) {
  const dispatch = useDispatch();
  const currentuser = JSON.parse(localStorage.getItem("user"));
  const alreadyLiked = post.likes.find(
    (obj) => obj.user.toString() == currentuser._id
  );

  const { likeOrUnlikeLoading } = useSelector((state) => state.alertsReducer);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [likeOrUnlikeLoading]);

  // return <div>{posts["post"].description}</div>;
  return (
    <div className="bs1  p-2 mt-4">
      <div className="d-flex align-items-center">
        <img
          className="username ml-2"
          src="https://img.icons8.com/plumpy/25/000000/username.png"
        />
        <span className="username ml-2 mr-2">{currentuser.username}</span>
      </div>
      {/*  */}
      <img src={post.image} className="postimage " />
      {/*  */}

      <div className="m-auto">
        <p className="ds1 mt1 mb-1 text-left">{post.description}</p>
      </div>
      {/*  */}
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center mr-3">
          <HeartFilled
            className="ml-1"
            style={{ color: alreadyLiked ? "#1257E2" : "#607189" }}
            onClick={() => {
              dispatch(likeOrUnlikePost({ postid: post._id }));
            }}
          />
          <p className="ds1">{post.likes.length}</p>
        </div>
        <div>
          <p className="ds1">
            {moment(post.createdAt).format("DD.MM.YYYY HH:mm")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;

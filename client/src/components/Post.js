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
const { TextArea } = Input;

function Post({ post }) {
  // return <div>{posts["post"].description}</div>;
  return (
    <div className="bs1 p-2 mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {post.user.profilePicUrl == "" ? (
            <img
              src={
                "https://res.cloudinary.com/dvmyaxsla/image/upload/v1642368424/barangram/default/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju_hluf5h.jpg"
              }
              height="35"
              width="35"
              style={{ borderRadius: "50%" }}
            />
          ) : (
            <img
              src={post.user.profilePicUrl}
              height="35"
              width="35"
              style={{ borderRadius: "50%" }}
            />
          )}
          <Link to="/" className="ml-2">
            {post.user.username}
          </Link>
        </div>

        <div>
          <p>{moment(post.createdAt).format("DD.MM.YYYY HH:mm")}</p>
        </div>
      </div>
      {/*  */}
      <img src={post.image} className="postimage " />
      {/*  */}
      <p className="mt1 mb-1 text-left">{post.description}</p>
      {/*  */}
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center mr-3">
          <HeartFilled />
          <p>{post.likes.length}</p>
        </div>
        <div className="d-flex align-items-center">
          <CommentOutlined />
          <p>{post.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;

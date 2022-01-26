import React, { useEffect } from "react";
import moment from "moment";
import { HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, likeOrUnlikePost } from "../redux/actions/PostActions";
import "./css/Components.css";

function Post({ post }) {
  const dispatch = useDispatch();
  const currentuser = JSON.parse(localStorage.getItem("user"));
  const alreadyLiked = post.likes.find(
    (obj) => obj.user.toString() === currentuser._id
  );

  const { likeOrUnlikeLoading } = useSelector((state) => state.alertsReducer);
  useEffect(() => {
    dispatch(getAllPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likeOrUnlikeLoading]);

  return (
    <div className="bs1  p-2 mt-4">
      <div className="d-flex align-items-center">
        <img
          className="username ml-2"
          src="https://img.icons8.com/plumpy/25/000000/username.png"
          alt="pic"
        />
        <span className="username ml-2 mr-2">{post.user.username}</span>
      </div>

      <img src={post.image} className="postimage " alt="pic" />

      <div className="m-auto">
        <p className="ds1 mt1 mb-1 text-left">{post.description}</p>
      </div>

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

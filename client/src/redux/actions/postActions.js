import { message } from "antd";
import axios from "axios";

export const addPost = (values) => async (dispatch) => {
  //start with
  const validImageSecond = new RegExp(/^data:image/);
  try {
    if (validImageSecond.test(values.image)) {
      values.user = JSON.parse(localStorage.getItem("user"))._id;
      values.likes = [];
      values.comments = [];

      dispatch({ type: "LOADING", payload: true });
      try {
        await axios.post("/api/posts/addpost", values);
        dispatch({ type: "LOADING", payload: false });
        message.success("post added sucessfully");
        //window.location.href = "/login";
      } catch (error) {
        console.log(error);
        dispatch({ type: "LOADING", payload: false });
        message.error("something went wrong with adding posts");
      }
    } else {
      message.error("NOT AN IMAGE");
    }
  } catch (error) {
    message.error("something went wrong with adding posts");
  }
};

export const getAllPosts = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  console.log("WORKING");
  try {
    const response = await axios.get("/api/posts/getallposts");
    dispatch({ type: "LOADING", payload: false });
    dispatch({ type: "GET_ALL_POSTS", payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("something went wrong");
  }
};

export const likeOrUnlikePost = (values) => async (dispatch) => {
  values.userid = JSON.parse(localStorage.getItem("user"))._id.toString();

  console.log(values);
  dispatch({ type: "LIKE_UNLIKE_LOADING", payload: true });

  try {
    await axios.post("/api/posts/likeorunlikepost", values);
    dispatch({ type: "LIKE_UNLIKE_LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LIKE_UNLIKE_LOADING", payload: false });
    message.error("something went wrong");
  }
};

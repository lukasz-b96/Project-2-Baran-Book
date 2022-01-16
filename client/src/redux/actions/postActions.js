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
    message.error("something went wrong with adding posts, NOT AN IMAGE");
  }
};

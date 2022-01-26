import { message } from "antd";
import axios from "axios";

export const userRegister = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/api/users/register", values);
    dispatch({ type: "LOADING", payload: false });
    message.success("user register sucessfully");
    window.location.href = "/login";
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("something went wrong with registration");
  }
};

export const userLogin = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/users/login", values);
    dispatch({ type: "LOADING", payload: false });
    message.success("login success");
    localStorage.setItem("user", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("login failed");
  }
};

export const getAllUsers = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.get("/api/users/getallusers");
    dispatch({ type: "LOADING", payload: false });
    dispatch({ type: "GET_ALL_USERS", payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("something went wrong");
  }
};

export const followUser = (values) => async (dispatch) => {
  dispatch({ type: "FOLLOW_LOADING", payload: true });

  try {
    await axios.post("/api/users/followuser", values);
    dispatch({ type: "FOLLOW_LOADING", payload: false });
    message.success("Followed successfully");
  } catch (error) {
    console.log(error);
    dispatch({ type: "FOLLOW_LOADING", payload: false });
    message.error("something went wrong");
  }
};

export const unfollowUser = (values) => async (dispatch) => {
  dispatch({ type: "UNFOLLOW_LOADING", payload: true });

  try {
    await axios.post("/api/users/unfollowuser", values);
    dispatch({ type: "UNFOLLOW_LOADING", payload: false });
    message.success("UnFollowed successfully");
  } catch (error) {
    console.log(error);
    dispatch({ type: "UnFOLLOW_LOADING", payload: false });
    message.error("something went wrong");
  }
};

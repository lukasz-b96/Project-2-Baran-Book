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

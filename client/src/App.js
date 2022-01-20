import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import "antd/dist/antd.min.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "./redux/actions/postActions";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AllUsers from "./pages/AllUsers";
import MyFollowers from "./pages/MyFollowers";
import About from "./pages/About";

function App() {
  const { loading, likeOrUnlikeLoading } = useSelector(
    (state) => state.alertsReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="App">
      {(loading || likeOrUnlikeLoading) && (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <Router>
        <Routes>
          {/* react-router-dom version 6  */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/addpost" exact element={<AddPost />} />
            <Route path="/allusers" exact element={<AllUsers />} />
            <Route path="/myfollowers" exact element={<MyFollowers />} />
            <Route path="/about" exact element={<About />} />
          </Route>

          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

export const ProtectedRoute = (props) => {
  if (localStorage.getItem("user")) {
    localStorage.getItem("user");
    return <Outlet {...props} />;
  } else {
    return <Navigate to="/login/" />;
  }
};

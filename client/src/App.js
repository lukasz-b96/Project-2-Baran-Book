import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Addpost from "./pages/Addpost";
import Profile from "./pages/Profile";
import "antd/dist/antd.min.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "./redux/actions/postActions";

function App() {
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="App">
      {loading && (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <Router>
        <Routes>
          {/* react-router-dom version 6  */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/addpost" exact element={<Addpost />} />
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
    console.log(props);
    console.log({ ...props });
    localStorage.getItem("user");
    return <Outlet {...props} />;
  } else {
    return <Navigate to="/login/" />;
  }
};

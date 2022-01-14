import "./App.css";
import { BrowserRouter, path, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Addpost from "./pages/Addpost";
import Profile from "./pages/Profile";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* react-router-dom version 6  */}
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/addpost" exact element={<Addpost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

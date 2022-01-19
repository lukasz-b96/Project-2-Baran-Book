import React from "react";
import { Layout } from "antd";

import { Link } from "react-router-dom";
import "./defaultlayout.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Dropdown from "react-bootstrap/Dropdown";

const { Header, Content } = Layout;
const currentuser = JSON.parse(localStorage.getItem("user"));

class DefaultLayout extends React.Component {
  render() {
    return (
      <div className="background">
        <Layout>
          <Layout className="site-layout">
            <Header className="site-layout-background " style={{ padding: 0 }}>
              <Navbar bg="dark">
                <Nav className="container-fluid align-items-center justify-content-between">
                  <Nav.Item>
                    <Navbar.Brand as={Link} to="/" className="animation1 ">
                      <img
                        className="ml-2 mr-2 "
                        src="https://img.icons8.com/plumpy/25/000000/username.png"
                      />
                      {currentuser.username}
                    </Navbar.Brand>
                  </Nav.Item>

                  <Nav.Item className="nav-toggle ml-auto">
                    <Navbar.Brand as={Link} to="/" className="animation3">
                      <img
                        className="username ml-2 mr-2 logo"
                        src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`}
                      />
                    </Navbar.Brand>
                  </Nav.Item>

                  <Nav.Item className="nav-toggle ml-auto">
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown"
                        variant="secondary"
                        className="animation5"
                      >
                        <span className="mr-4">Toggle Menu</span>

                        <img
                          src="https://img.icons8.com/plumpy/24/26e07f/drag-list-down.png"
                          alt="pic"
                        />
                      </Dropdown.Toggle>

                      <Dropdown.Menu variant="dark" className="animation2">
                        <Dropdown.Item href="/">
                          <img
                            src="https://img.icons8.com/plumpy/24/26e07f/home--v1.png"
                            alt="pic"
                          />
                          <span className="ml-2">Home</span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/about">
                          <img
                            src="https://img.icons8.com/plumpy/24/26e07f/info.png"
                            alt="pic"
                          />
                          <span className="ml-2">About</span>
                        </Dropdown.Item>

                        <Dropdown.Item href="/addpost">
                          <img
                            src="https://img.icons8.com/plumpy/23/26e07f/upload-2.png"
                            alt="pic"
                          />
                          <span className="ml-2">Add Post</span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/allusers">
                          <img
                            src="https://img.icons8.com/plumpy/24/000000/add-user-male.png"
                            alt="pic"
                          />

                          <span className="ml-2">Find Users</span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/myfollowers">
                          <img
                            src="https://img.icons8.com/plumpy/24/26e07f/myspace.png"
                            alt="pic"
                          />
                          <span className="ml-2">My Followers</span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => localStorage.removeItem("user")}
                          href="/login"
                        >
                          <img
                            src="https://img.icons8.com/plumpy/24/26e07f/shutdown.png"
                            alt="pic"
                          />
                          <span className="ml-2">Log Out</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav.Item>
                </Nav>
              </Navbar>

              {/* bootstrap classes (equal division)
            <div className="d-flex justify-content-between align-items-center bs2">
              <h4 className="ml-2">
                {JSON.parse(localStorage.getItem("user")).username}
              </h4>
              <h2>BaranGram</h2>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )} 
            </div>*/}
            </Header>
            <Content
              className="site-layout-background mt-5 animation6"
              style={
                {
                  // margin: "24px 16px",
                  // padding: 24,
                  // minHeight: 280,
                }
              }
            >
              {/* Pass website to this element as a children */}
              {this.props.children}
            </Content>
          </Layout>

          {/* <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          window.location.pathname - change the active tab
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
          >
            window.location.pathname - for the "key"
            <Menu.Item key="/" icon={<UserOutlined />}>
              <Link to="/"> Home</Link>
            </Menu.Item>
            <Menu.Item key="/addpost" icon={<VideoCameraOutlined />}>
              <Link to="/addpost">Add Post</Link>
            </Menu.Item>
            <Menu.Item key="/profile" icon={<UploadOutlined />}>
              <Link to="/profile"> Profile</Link>
            </Menu.Item>
          </Menu>
        </Sider> */}
        </Layout>
      </div>
    );
  }
}

export default DefaultLayout;

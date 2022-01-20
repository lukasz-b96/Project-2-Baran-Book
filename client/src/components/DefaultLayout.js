import React from "react";
import { Layout } from "antd";

import { Link } from "react-router-dom";
import "./css/Components.css";
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
                      <span className="font-weight-bold">
                        {currentuser.username}
                      </span>
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
                        className="animation4"
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
            </Header>
            <Content className="site-layout-background mt-5 animation6">
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default DefaultLayout;

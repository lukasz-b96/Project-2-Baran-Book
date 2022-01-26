import React from "react";
import { Layout } from "antd";

import "./css/Components.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const { Content } = Layout;
const currentuser = JSON.parse(localStorage.getItem("user"));

class DefaultLayout extends React.Component {
  render() {
    return (
      <div className="background">
        <Layout>
          <Layout className="site-layout">
            <Navbar
              collapseOnSelect
              expand="lg"
              bg="dark"
              variant="dark"
              class=" container-fluid align-items-center justify-content-between"
            >
              <Navbar.Brand href="/">
                <img
                  alt="logo"
                  className="ml-2 mr-2 logo"
                  src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">
                    <img
                      alt="ico"
                      className="mr-2 "
                      src={`${process.env.PUBLIC_URL}/assets/images/Username.png`}
                    />
                    <span className="font-weight-bold username2">
                      {currentuser.username}
                    </span>
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => localStorage.removeItem("user")}
                    href="/login"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/Shutdown.png`}
                      alt="pic"
                    />
                    <span className="ml-2 font-weight-bold disc">Log Out</span>
                  </Nav.Link>
                </Nav>
                <div className="tester">
                  <NavDropdown.Divider />
                </div>

                <Nav className="ml-auto home">
                  <Nav.Link href="https://sahara-car-deals.herokuapp.com/">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/Car.png`}
                      alt="pic"
                    />
                    <span className="ml-2 disc">Sahara Car Deals</span>
                  </Nav.Link>

                  <Nav.Link href="/about">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/Info.png`}
                      alt="pic"
                    />
                    <span className="ml-2 disc">About</span>
                  </Nav.Link>
                  <Nav.Link href="/addpost">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/Upload.png`}
                      alt="pic"
                    />
                    <span className="ml-2 disc">Add Post</span>
                  </Nav.Link>
                  <Nav.Link href="/allusers">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/User.png`}
                      alt="pic"
                    />

                    <span className="ml-2 disc">Find Users</span>
                  </Nav.Link>
                  <Nav.Link href="/myfollowers">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/Followers.png`}
                      alt="pic"
                    />
                    <span className="ml-2 disc">My Followers</span>
                  </Nav.Link>
                  <Nav.Link href="/"></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Content className="site-layout-background mt-5 animation6">
              {this.props.children}
            </Content>

            <span className="mt-4"></span>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default DefaultLayout;

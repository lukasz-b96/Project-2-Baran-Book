import React from "react";
import { Layout } from "antd";

import { Link } from "react-router-dom";
import "./defaultlayout.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Dropdown from "react-bootstrap/Dropdown";
const { Header, Content } = Layout;

class DefaultLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Layout className="site-layout">
          <Header className="site-layout-background " style={{ padding: 0 }}>
            <Navbar bg="dark" variant="dark">
              <Nav className="container-fluid">
                <Nav.Item>
                  <Navbar.Brand as={Link} to="/" className="animation1">
                    Lukasz Baran App
                  </Navbar.Brand>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/user-list" className="animation2">
                    Profil
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={() => localStorage.removeItem("user")}>
                  <Nav.Link as={Link} to="/login" className="animation3">
                    LogOut
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className="ml-auto">
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-button-dark-example1"
                      variant="secondary"
                      className="animation5"
                    >
                      Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark" className="animation2">
                      <Dropdown.Item href="/">
                        {/* active atribute */}
                        Home
                      </Dropdown.Item>
                      <Dropdown.Item href="/addpost">Addpost</Dropdown.Item>
                      {/* <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item> */}
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
            className="site-layout-background mt-4 animation6"
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
    );
  }
}

export default DefaultLayout;

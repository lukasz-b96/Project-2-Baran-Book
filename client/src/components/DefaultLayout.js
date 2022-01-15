import React from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./defaultlayout.css";
const { Header, Sider, Content } = Layout;

class DefaultLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Layout className="site-layout">
          <Header className="site-layout-background " style={{ padding: 0 }}>
            {/* bootstrap classes (equal division)*/}
            <div className="d-flex justify-content-between align-items-center bs1">
              <h4>Temp user</h4>
              <h2>BaranGram</h2>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </div>
          </Header>
          <Content
            className="site-layout-background"
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
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          {/* window.location.pathname - change the active tab */}
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
          >
            {/* window.location.pathname - for the "key" */}
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
        </Sider>
      </Layout>
    );
  }
}

export default DefaultLayout;

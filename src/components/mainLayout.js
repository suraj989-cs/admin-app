import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { MdPersonOutline } from "react-icons/md";
import { BsCartDash } from "react-icons/bs";
import { BiUserCheck } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();  
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline" 
          defaultSelectedKeys={[""]}
          onClick ={({key}) => {
            if(key === 'signout'){

            }else{
              navigate(key)
            }
          }}
          items={[
            {
              key: "dashboard",
              icon: <RxDashboard className="fs-1"/>,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <MdPersonOutline className="fs-1"/>,
              label: "Customers",
            },
            {
              key: "products",
              icon: < BsCartDash className="fs-1"/>,
              label: "Catalog",
              children: [
                {
                  key: "products",
                  icon: <BsCartDash className="fs-1"/>,
                  label: "Add products",   
                },
              ]
            },
            {
              key: "users",
              icon: < BiUserCheck className="fs-1"/>,
              label: "Users",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

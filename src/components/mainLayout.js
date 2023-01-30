import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { MdPersonOutline, MdSecurity } from "react-icons/md";
import { FaBlogger, FaClipboardList } from "react-icons/fa";
import {
  BsCartDash,
  BsCardChecklist,
  BsList,
  BsListCheck,
  BsFillBagCheckFill,
  BsCardList,
  BsListStars,
  BsFillBellFill,
} from "react-icons/bs";
import { SiBrandfolder } from "react-icons/si";
import {
  BiUserCheck,
  BiCategoryAlt,
  BiCategory,
  BiColorFill,
} from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
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
        <div className="logo text-white">
          <span className="sm-logo">AD</span>
          <span className="lg-logo">Admin Panel</span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["Dashboard"]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else if (key === "Dashboard") {
              navigate("/admin");
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "Dashboard",
              icon: <RxDashboard className="fs-1" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <MdPersonOutline className="fs-1" />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <BsCartDash className="fs-1" />,
              label: "Catalog",
              children: [
                {
                  key: "add-product",
                  icon: <BsCartDash className="fs-1" />,
                  label: "Add products",
                },
                {
                  key: "product-list",
                  icon: <BsList className="fs-1" />,
                  label: "Product List",
                },
                {
                  key: "add-brand",
                  icon: <SiBrandfolder className="fs-1" />,
                  label: "Product Brand",
                },
                {
                  key: "brand-list",
                  icon: <BsCardList className="fs-1" />,
                  label: "Brand List",
                },
                {
                  key: "add-category",
                  icon: <BiCategory className="fs-1" />,
                  label: "Category",
                },
                {
                  key: "category-list",
                  icon: <BsListStars className="fs-1" />,
                  label: "Category list",
                },
                {
                  key: "add-color",
                  icon: <BiColorFill className="fs-1" />,
                  label: "Color",
                },
                {
                  key: "color-list",
                  icon: <BsListCheck className="fs-1" />,
                  label: "Color list",
                },
              ],
            },
            {
              key: "orders",
              icon: <BsFillBagCheckFill className="fs-1" />,
              label: "Orders",
            },
            {
              key: "users",
              icon: <BiUserCheck className="fs-1" />,
              label: "Users",
            },
            {
              key: "blogs",
              icon: <FaBlogger className="fs-1" />,
              label: "Blogs",
              children: [
                {
                  key: "add-blog",
                  icon: <FaBlogger className="fs-1" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaClipboardList className="fs-1" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <BiCategoryAlt className="fs-1" />,
                  label: "Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <BsCardChecklist className="fs-1" />,
                  label: "Blog Cat List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <MdSecurity className="fs-1" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
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
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              {" "}
              <BsFillBellFill className="fs-4 me-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className=" border bg-dark bg-gradient text-white rounded-pill ps-3 pe-3 ">
              <div
                className="d-flex gap-3 align-items-center dropdown"
                style={{ lineHeight: "4" }}
              >
                <div>
                  <img
                    className="rounded-circle"
                    width={32}
                    height={32}
                    src="data:image/jpeg;base64,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"
                    alt="Error loading"
                  />
                </div>
                <div
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h5 className="mb-0">Mehta suraj h</h5>
                  <p className="mb-0">mehtasuraj7984@gmail.com</p>
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                    <li className="">
                      <Link className="dropdown-item py-1 mb-1 fs-4" to="/">
                        View Profile
                      </Link>
                    </li>
                    <li className="">
                      <Link className="dropdown-item py-1 mb-1 fs-4" to="/">
                        SignOut
                      </Link>
                    </li>
                </div>
              </div>
            </div>
          </div>
        </Header> 
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

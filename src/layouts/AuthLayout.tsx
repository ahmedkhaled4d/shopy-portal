import React from "react";
import { Outlet } from "react-router-dom";
import { Flex, Layout } from "antd";
import Reviews from "../components/auth/Reviews";

const AuthLayout: React.FC = () => {
  const { Sider, Content } = Layout;

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#f7f1e3",
    backgroundColor: "#ccc",
  };
  const layoutStyle = {
    borderRadius: 5,
    overflow: "hidden",
  };
  const contentStyle: React.CSSProperties = {
    // textAlign: "center",
    padding: 50,
    minHeight: 220,
    lineHeight: "220px",
    backgroundColor: "#fff",
  };
  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        {/* <Header style={headerStyle}>Shoppy Logo</Header> */}
        <Layout>
          <Content style={contentStyle}>
            <img src="/logo.png" height={100} />
            <Outlet />
          </Content>
          <Sider width="60%" style={siderStyle}>
            <Reviews />
          </Sider>
        </Layout>
      </Layout>
    </Flex>
  );
};

export default AuthLayout;

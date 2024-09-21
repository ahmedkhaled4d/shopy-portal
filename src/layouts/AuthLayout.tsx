import React from "react";
import { Outlet } from "react-router-dom";
import { Flex, Layout } from "antd";
import Reviews from "../components/auth/Reviews";
import { useMediaQuery } from "react-responsive";

const AuthLayout: React.FC = () => {
  // Define the media query for mobile devices
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { Sider, Content } = Layout;
  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#f7f1e3",
  };
  const layoutStyle = {
    borderRadius: 5,
    overflow: "hidden",
  };
  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    padding: 50,
    minHeight: 220,
    lineHeight: "220px",
    backgroundColor: "#fff",
    flex: 1,
  };
  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <Layout>
          <Content style={contentStyle}>
            <img src="/images/logo.png" height={100} alt="logo" />
            <Outlet />
          </Content>
          {!isMobile && (
            <Sider width="60%" style={siderStyle}>
              <Reviews />
            </Sider>
          )}
        </Layout>
      </Layout>
    </Flex>
  );
};

export default AuthLayout;

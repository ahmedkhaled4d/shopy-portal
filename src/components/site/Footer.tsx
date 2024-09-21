import { Layout, Row, Col, Typography, Space } from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const BasicFooter = () => {
  return (
    <Footer style={{ background: "#000", padding: "40px 50px" }}>
      <Row gutter={[16, 32]}>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "white" }}>
            Company
          </Title>
          <Space direction="vertical">
            <Link href="/about" style={{ color: "#bfbfbf" }}>
              About Us
            </Link>
            <Link href="/team" style={{ color: "#bfbfbf" }}>
              Our Team
            </Link>
            <Link href="/careers" style={{ color: "#bfbfbf" }}>
              Careers
            </Link>
            <Link href="/contact" style={{ color: "#bfbfbf" }}>
              Contact Us
            </Link>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "white" }}>
            Products
          </Title>
          <Space direction="vertical">
            <Link href="/product1" style={{ color: "#bfbfbf" }}>
              Product 1
            </Link>
            <Link href="/product2" style={{ color: "#bfbfbf" }}>
              Product 2
            </Link>
            <Link href="/product3" style={{ color: "#bfbfbf" }}>
              Product 3
            </Link>
            <Link href="/product4" style={{ color: "#bfbfbf" }}>
              Product 4
            </Link>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "white" }}>
            Resources
          </Title>
          <Space direction="vertical">
            <Link href="/blog" style={{ color: "#bfbfbf" }}>
              Blog
            </Link>
            <Link href="/newsroom" style={{ color: "#bfbfbf" }}>
              Newsroom
            </Link>
            <Link href="/events" style={{ color: "#bfbfbf" }}>
              Events
            </Link>
            <Link href="/help-center" style={{ color: "#bfbfbf" }}>
              Help Center
            </Link>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical">
            <img src="/images/logo2.png" height={100} alt="logo" />

            <Title level={3} style={{ color: "white" }}>
              Made with Love in Egypt 🇪🇬
            </Title>
          </Space>
        </Col>
      </Row>
      <Row
        justify="space-between"
        align="middle"
        style={{
          marginTop: "32px",
          borderTop: "1px solid #434343",
          paddingTop: "32px",
        }}
      >
        <Col>
          <Text style={{ color: "#bfbfbf" }}>
            © 2024 Your Company Name. All rights reserved.
          </Text>
        </Col>
        <Col>
          <Space size="large">
            <Link
              href="https://github.com"
              target="_blank"
              style={{ color: "#bfbfbf" }}
            >
              <GithubOutlined style={{ fontSize: "24px" }} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              style={{ color: "#bfbfbf" }}
            >
              <TwitterOutlined style={{ fontSize: "24px" }} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              style={{ color: "#bfbfbf" }}
            >
              <LinkedinOutlined style={{ fontSize: "24px" }} />
            </Link>
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default BasicFooter;

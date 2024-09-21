import { Space } from "antd";
import HeroSection from "./sections/HeroSection";

function LandingPage() {
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <HeroSection />
    </Space>
  );
}

export default LandingPage;

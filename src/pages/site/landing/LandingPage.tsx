import { Space } from "antd";
import HeroSection from "./sections/HeroSection";
import FeatuersSection from "./sections/FeatuersSection";

function LandingPage() {
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <HeroSection />
      <FeatuersSection />
    </Space>
  );
}

export default LandingPage;

import {
  Button,
  Card,
  Row,
  Space,
  Statistic,
  StatisticProps,
  Tag,
  Typography,
} from "antd";
import CountUp from "react-countup";

const { Title, Text } = Typography;

const formatter: StatisticProps["formatter"] = (value) => (
  <CountUp end={value as number} separator="," />
);
function HeroSection() {
  return (
    <Row justify="center" align="top">
      <Space
        direction="vertical"
        size="middle"
        style={{ display: "flex", textAlign: "center", padding: 30 }}
      >
        <Tag color="green">Official Partner with WhatsApp</Tag>
        <Title>Create Ecommerce for WhatsApp</Title>
        <Text mark>
          Simplify WhatsApp ordering. Boost sales with better customer service.
        </Text>
        <Button type="primary" size="large">
          Get started for free
        </Button>

        <Space size="large">
          <Card size="small">
            <Statistic
              title="Total delivered Orders"
              value={112893}
              formatter={formatter}
            />
          </Card>

          <Card size="small">
            <Statistic
              title="Total Shoppy's Stores"
              value={660}
              formatter={formatter}
            />
          </Card>
        </Space>
      </Space>
    </Row>
  );
}

export default HeroSection;

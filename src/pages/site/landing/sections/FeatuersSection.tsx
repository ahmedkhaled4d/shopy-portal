import { Card, Flex, Row, Space, Typography } from "antd";

const { Title } = Typography;

function FeatuersSection() {
  return (
    <Row
      justify="center"
      style={{
        background: "#f7f1e3",
        display: "flex",
        textAlign: "center",
        padding: 30,
      }}
    >
      <Space direction="vertical" size="middle">
        <Title>Create Your Website in Minutes</Title>

        <Flex gap="middle" vertical>
          <Card size="small">Card content</Card>
          <Card size="small">Card content</Card>
        </Flex>
      </Space>
    </Row>
  );
}

export default FeatuersSection;

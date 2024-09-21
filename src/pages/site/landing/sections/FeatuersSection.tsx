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
      <Space direction="vertical" align="center" size="middle">
        <Title>All-In-One Business Software</Title>
        <Flex gap="middle">
          <Card size="small">
            <h2>CRM</h2>
            <p>Boost sales with better customer relationship management</p>
          </Card>
          <Card size="small">
            <h2>Workflow</h2>
            <p>Level up operations with WhatsApp or email automations</p>{" "}
          </Card>
          <Card size="small">
            <h2>Inventory</h2>
            <p>Manage inventory online and prevent overselling/shortages</p>
          </Card>
        </Flex>
        <Flex gap="middle">
          <Card size="small">
            <h2>Analytics</h2>
            <p>Visitors and business insights</p>
          </Card>{" "}
          <Card size="small">
            <h2>Payment Link</h2>
            <p>Get paid faster for Accounts Receivable</p>
          </Card>{" "}
          <Card size="small">
            <h2>Loyalty & Rewards</h2>
            <p>Incentivize repeat purchases with store credits</p>
          </Card>{" "}
        </Flex>
      </Space>
    </Row>
  );
}

export default FeatuersSection;

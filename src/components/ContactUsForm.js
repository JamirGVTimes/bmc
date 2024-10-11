import { Button } from "@mui/material";
import { Form, Typography, Input, Row, Col } from "antd";

export default function ContactUsForm() {
  const handleFinish = async (values) => {
    console.log("values", values);
  };
  return (
    <Form layout="vertical" onFinish={handleFinish}>
      <Row gutter={12}>
        <Col span={12}>
          <Form.Item name="name">
            <Input
              placeholder="Your name"
              style={{ background: "none", color: "#fff" }}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="email">
            <Input
              placeholder="Your email"
              style={{ background: "none", color: "#fff" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="message">
        <Input.TextArea
          rows={3}
          placeholder="Type your message here..."
          style={{ background: "none", color: "#fff" }}
        />
      </Form.Item>
      <Typography.Paragraph style={{ textAlign: "center" }}>
        <Button variant="contained">SEND MESSAGE</Button>
      </Typography.Paragraph>
    </Form>
  );
}

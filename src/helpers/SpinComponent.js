import { Spin, Typography } from "antd";
const { Paragraph, Text } = Typography;
export default function SpinComponent() {
  return (
    <Paragraph style={{ textAlign: "center", padding: "5rem" }}>
      <Spin />
      <Text> Please wait...</Text>
    </Paragraph>
  );
}

import { Button, Card, Space, Typography } from "antd";
import loadShade from "../../images/unnamed.jpg";
const { Paragraph, Text } = Typography;
export default function Department({ department }) {
  return (
    <Card
      style={{ width: "48%", margin: "0.3rem" }}
      size="small"
      hoverable={true}
    >
      <Space align="top">
        <img
          alt="example"
          style={{ height: "150px", borderRadius: "7px 0 0 7px" }}
          src={loadShade}
        />
        <Paragraph>
          <Paragraph style={{ fontSize: "16px" }} strong>
            {department.name}
          </Paragraph>
          <Paragraph
            style={{ fontSize: "13px", color: "gray" }}
            ellipsis={{ rows: 3, expandable: true, symbol: "more" }}
          >
            {department.description}
          </Paragraph>
          <Paragraph style={{ textAlign: "right" }}>
            <Button type="primary" size="small">
              Visit
            </Button>
          </Paragraph>
        </Paragraph>
      </Space>
    </Card>
  );
}

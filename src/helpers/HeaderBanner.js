import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Paragraph, Text } = Typography;
export default function HeaderBanner({ title }) {
  const navigate = useNavigate();
  return (
    <Paragraph
      style={{ margin: 0, background: "#13240D", padding: "4rem 3rem" }}
    >
      <Paragraph
        style={{
          fontSize: "2.5em",
          lineHeight: 0.7,
          padding: 0,
          margin: "0.5rem 0",
          color: "#fff",
        }}
        strong
      >
        {title?.toUpperCase()}
      </Paragraph>
      <Text style={{ color: "#fff" }}>
        ...............................................
      </Text>
      <Paragraph style={{ margin: "0.5rem 0" }}>
        <Text
          style={{ color: "#fff", cursor: "pointer", fontSize: "1rem" }}
          strong
          onClick={() => navigate("/")}
        >
          Home
        </Text>
        <Text style={{ color: "gray", fontSize: "1rem" }}> &gt; {title}</Text>
      </Paragraph>
    </Paragraph>
  );
}

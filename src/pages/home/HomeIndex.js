import ReactHelmet from "../../helpers/ReactHelmet";
import { Divider, Space, Typography } from "antd";
import bmcLogoWhite from "../../images/bmc_white.png";
import { Button } from "@mui/material";
const { Paragraph, Text } = Typography;
export default function HomeIndex() {
  return (
    <div>
      <ReactHelmet
        title="Home"
        content={`Bwikya Muslim Community unites Muslims from across the Bunyoro Region in Western Uganda, fostering faith, unity, and development.`}
      />
      <Paragraph
        style={{ margin: 0, background: "#13240D", padding: "7rem 3rem" }}
      >
        <Space>
          <img src={bmcLogoWhite} alt="bmc_logo" style={{ width: "10em" }} />
          <Paragraph style={{ lineHeight: 2.5 }}>
            <Text
              style={{ color: "#eee", fontSize: "2.5em", lineHeight: 0.8 }}
              strong
            >
              BWIKYA MUSLIM
            </Text>
            <br />
            <Text
              style={{ color: "#eee", fontSize: "2em", lineHeight: 0.8 }}
              strong
            >
              COMMUNITY
            </Text>
            <Divider
              dashed
              style={{ background: "#ccc", margin: "0.2rem 0" }}
            />
            <Text style={{ color: "#ccc", lineHeight: 0.4 }}>
              "Empowering Muslims, Enriching Lives"
            </Text>
            <br />
            <Button
              size="small"
              variant="contained"
              style={{ backgroundColor: "#0F880C" }}
            >
              Donate
            </Button>
          </Paragraph>
        </Space>
      </Paragraph>
      <Paragraph
        style={{
          textAlign: "center",
          padding: "1rem 0 3rem 0",
          background: "#b1ae06",
          margin: 0,
        }}
      >
        <Text style={{ fontSize: "3rem" }} strong>
          Our main goal is
        </Text>
        <br />
        <Text style={{ fontSize: "1.2rem" }}>
          "To unite and empower Muslims through faith, education, and community
          service, fostering spiritual and social growth"
        </Text>
      </Paragraph>
    </div>
  );
}

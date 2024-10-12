import { Typography } from "antd";
import { Button } from "@mui/material";
const { Paragraph, Text } = Typography;
const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Departments", path: "/departments" },
  { label: "Services", path: "/services" },
  { label: "Contacts", path: "/contacts" },
  { label: "Programmes", path: "/programmes" },
];
export default function Header() {
  return (
    <>
      <Paragraph
        style={{
          background: "#13240D",
          color: "#eee",
          margin: 0,
          textAlign: "center",
          fontSize: "12px",
          padding: "0.2rem",
        }}
      >
        Ask any question as regards to Zakkah, Swallah, Hijjah/Umrah, Nikah,
        Fasting, etc.
      </Paragraph>
      <Paragraph
        style={{
          display: "flex",
          margin: 0,
          justifyContent: "end",
          background: "#119608",
          padding: "1px",
        }}
      >
        <Paragraph style={{ color: "#eee", margin: 0, padding: "0.5rem" }}>
          {menuItems.map((item) => {
            return (
              <Text
                key={item.label}
                style={{ color: "#eee" }}
                className="link-item"
              >
                {item.label}
              </Text>
            );
          })}
          <Button
            variant="contained"
            style={{
              background: "#b1ae06",
              borderRadius: "30px",
              margin: "0 1rem 0 2rem",
            }}
          >
            Donate Now
          </Button>
        </Paragraph>
      </Paragraph>
    </>
  );
}

import { useEffect, useState } from "react";
import { Typography, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
const { Paragraph, Text } = Typography;
const menuItems = [
  { label: "Home", path: "/" },
  { label: "Departments", path: "/departments" },
  { label: "Services", path: "/services" },
  { label: "Contacts", path: "/contacts" },
  { label: "Programmes", path: "/programmes" },
];
export default function Header({ screenWidth }) {
  const [activePage, setActivePage] = useState("/");
  const navigate = useNavigate();
  const url = useLocation().pathname;
  const handleItemSelect = (item) => {
    setActivePage(item.label);
    navigate(item.path);
  };
  useEffect(() => {
    const checkUrl = () => {
      setActivePage(url);
    };
    checkUrl();
  }, [url]);
  return (
    <>
      {/* <Paragraph
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
      </Paragraph> */}
      <Paragraph
        style={{
          display: "flex",
          margin: 0,
          justifyContent: "end",
          background: "#119608",
          padding: "1px",
        }}
      >
        {screenWidth < 800 ? (
          <MenuOutlined
            style={{
              margin: "0.5rem",
              fontSize: "1.5em",
              color: "#fff",
              cursor: "pointer",
            }}
          />
        ) : (
          <Paragraph style={{ margin: 0, padding: "0.5rem" }}>
            {menuItems.map((item) => {
              return (
                <Text
                  key={item.label}
                  className="link-item"
                  onClick={() => handleItemSelect(item)}
                  style={{
                    color: activePage === item.path ? "#f9e015" : "#eee",
                  }}
                >
                  {item.label}
                </Text>
              );
            })}
            <Button
              type="primary"
              style={{
                background: "#15aaf9",
                borderRadius: "30px",
                margin: "0 1rem 0 2rem",
              }}
            >
              Donate Now
            </Button>
          </Paragraph>
        )}
      </Paragraph>
    </>
  );
}

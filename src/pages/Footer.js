import { Button, Col, QRCode, Row, Space, Typography } from "antd";
import {
  XOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TikTokOutlined,
  WechatFilled,
} from "@ant-design/icons";
import ContactUsForm from "../components/ContactUsForm";
const { Paragraph, Text } = Typography;

export default function Footer() {
  return (
    <div style={{ background: "#13240D", padding: "2rem 2rem 0 2rem" }}>
      <Row gutter={12}>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Paragraph strong style={{ color: "#fff" }}>
            Location
          </Paragraph>
          <Paragraph style={{ color: "#ccc" }}>
            Our Offices are located in Bwikya Cell, Hoima East City along
            Bitamazire road, plot No. 36.
          </Paragraph>
          <Paragraph strong style={{ color: "#fff" }}>
            Availability
          </Paragraph>
          <Paragraph style={{ color: "#ccc" }}>
            Mon - Friday From 9:00AM to 5:00PM
          </Paragraph>
          <Paragraph>
            <QRCode color="#ccc" size={100} value="Bwikya Muslim Community" />
            <Paragraph
              style={{ color: "#ccc", lineHeight: 1, fontSize: "10px" }}
            >
              Scan the QR Code and see the magic
            </Paragraph>
          </Paragraph>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Paragraph strong style={{ color: "#fff" }}>
            Postal Address
          </Paragraph>
          <Paragraph style={{ color: "#ccc" }}>
            P.O Box 490125, Hoima (U)
          </Paragraph>
          <Paragraph strong style={{ color: "#fff" }}>
            Email Address
          </Paragraph>
          <Paragraph style={{ color: "#ccc" }}>bmc@goutlook.com</Paragraph>
          <Paragraph strong style={{ color: "#fff" }}>
            Telephone Contacts
          </Paragraph>
          <Paragraph style={{ color: "#ccc" }}>
            +256 396000000 | +256 774000000
          </Paragraph>
          <Paragraph strong style={{ color: "#fff" }}>
            Social Handles
          </Paragraph>
          <Paragraph style={{ color: "#ccc" }}>
            <Space>
              <XOutlined style={{ fontSize: "2em" }} />
              <InstagramOutlined style={{ fontSize: "2em" }} />
              <TikTokOutlined style={{ fontSize: "2em" }} />
              <FacebookOutlined style={{ fontSize: "2em" }} />
            </Space>
          </Paragraph>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Paragraph strong style={{ color: "#fff" }}>
            Message Us
          </Paragraph>
          <ContactUsForm />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Paragraph style={{ textAlign: "center" }}>
            <Button
              icon={<WechatFilled />}
              type="primary"
              style={{ borderRadius: "30px", background: "#0F880C" }}
            >
              Live Chat
            </Button>
          </Paragraph>

          <Paragraph
            style={{
              borderRadius: "7px",
              padding: "1rem",
              background: "#D9D9D910",
              textAlign: "center",
              height: "238px",
              overflowY: "auto",
            }}
          >
            <Paragraph strong style={{ color: "#0F880C" }}>
              Hadith of the week
            </Paragraph>
            <Paragraph style={{ textAlign: "left", color: "#ccc" }}>
              <Text strong style={{ color: "#ccc" }}>
                Umar ibn al-Khattab reported:
              </Text>
              <br />
              <Text style={{ color: "#ccc" }}>
                The Messenger of Allah, peace and blessings be upon him, said:
              </Text>
            </Paragraph>
            <Paragraph style={{ textAlign: "right", color: "#ccc" }}>
              إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا
              نَوَى فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ
              فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ وَمَنْ كَانَتْ هِجْرَتُهُ
              لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى
              مَا هَاجَرَ إِلَيْهِ
            </Paragraph>
            <Paragraph style={{ color: "#fff" }} strong>
              English Translation:
            </Paragraph>
            <Paragraph style={{ textAlign: "left", color: "#ccc" }}>
              Verily, deeds are only with intentions. Verily, every person will
              have only what they intended. Whoever emigrated to Allah and his
              messenger, his emigration is for Allah and his messenger. Whoever
              emigrated to get something in the world or to marry a woman, his
              emigration is for that to which he emigrated.
            </Paragraph>
            <Paragraph style={{ textAlign: "left", color: "#ccc" }}>
              <Text strong style={{ color: "#ccc" }}>
                Source:
              </Text>
              <br />
              <Text style={{ color: "#ccc" }}>Ṣaḥīḥ al-Bukhārī 54</Text>
            </Paragraph>
          </Paragraph>
        </Col>
      </Row>
      <Paragraph
        style={{
          margin: 0,
          fontSize: "0.7em",
          textAlign: "center",
          color: "#eee",
          padding: "0.3rem",
        }}
      >
        Copyright &copy; 2022 - 2024 &#11088; Bwikya Muslim Community &#11088;
        All rights reserved
      </Paragraph>
    </div>
  );
}

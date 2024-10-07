import React, { RefObject } from "react";
import { Card, Avatar, Typography, Button, Space } from "antd";
import {
  EnvironmentOutlined,
  GithubOutlined,
  // TwitterOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  MailOutlined,
  ExportOutlined,
  
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
interface AboutMeProps {
  contactMeRef: RefObject<HTMLDivElement>; // Adjust this type based on what the ref points to
}

const AboutMe: React.FC<AboutMeProps> = ({ contactMeRef }) => {
  return (
    <Card
      style={{
        maxWidth: 800,
        margin: "auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
      bodyStyle={{ padding: 0 }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
          backgroundColor: "#fff",
        }}
      >
        <Avatar
          size={120}
          src="/images/suman.jpeg"
          style={{ border: "4px solid #1890ff" }}
        />
        <Title level={2} style={{ margin: "16px 0 4px", fontWeight: 600 }}>
          Suman Thapa
        </Title>
        <Text style={{ fontSize: "16px", color: "#666", marginBottom: "8px" }}>
          Software Engineer
        </Text>
        <Text style={{ color: "#666", marginBottom: "16px" }}>
          <EnvironmentOutlined /> Kathmandu, Nepal
        </Text>
        <Paragraph
          style={{
            textAlign: "center",
            maxWidth: "600px",
            marginBottom: "24px",
            color: "#333",
          }}
        >
          To work responsibly in a challenging environment precisely in the IT
          field which includes giving the full potentiality and being creative
          to present desired results and become a successful IT professional
        </Paragraph>
        <Button
          type="primary"
          style={{
            borderRadius: "20px",
            padding: "0 24px",
            height: "40px",
            fontSize: "16px",
            marginBottom: "24px",
          }}
          onClick={() =>
            contactMeRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Get In Touch
        </Button>

        <Space size={16}>
          <a
            href="https://github.com/suman98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
          </a>
          {/* <a
            href="https://www.facebook.com/suman9841323"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
          </a> */}
          <a
            href="https://www.linkedin.com/in/suman-thapa-3a957a1b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
          </a>
          <a
            href="https://www.facebook.com/suman9841323"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=talktosumanthapa@gmail.com&tf=cm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
          </a>
          <a
            href="/Suman_thapa_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExportOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
          </a>
        </Space>
      </div>
    </Card>
  );
};

export default AboutMe;

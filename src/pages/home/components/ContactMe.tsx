import React from "react";
import { Card, Typography, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ContactMe = () => {
  const email = "talktosumanthapa@gmail.com";

  return (
    <Card
      style={{
        maxWidth: 800,
        margin: "auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Title level={3}>Contact Me</Title>
      <Paragraph>
        <MailOutlined /> {email}
      </Paragraph>
      <Button
        type="primary"
        target="blank"
        icon={<MailOutlined />}
        href={`https://mail.google.com/mail/u/0/?fs=1&to=${email}&tf=cm`}
      >
        Send Email
      </Button>
    </Card>
  );
};

export default ContactMe;

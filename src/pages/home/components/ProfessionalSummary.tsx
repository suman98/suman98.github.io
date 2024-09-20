import React from "react";
import { Card, Typography, List, Tag, Row, Col, Divider } from "antd";
import {
  CodeOutlined,
  TeamOutlined,
  ApiOutlined,
  MobileOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface Skill {
  icon: React.ReactNode;
  text: string;
}

const ExperienceSummary: React.FC = () => {
  const skills: Skill[] = [
    {
      icon: <CodeOutlined />,
      text: "PHP, Laravel, JavaScript, React.js, Vue.js, Angular.js",
    },
    { icon: <TeamOutlined />, text: "International Teams, GitHub" },
    { icon: <ApiOutlined />, text: "SOAP, REST API, GraphQL" },
    {
      icon: <MobileOutlined />,
      text: "Hybrid Apps (Android & iOS), Ionic, React Native",
    },
    { icon: <DatabaseOutlined />, text: "CRM, ERP, Billing Systems" },
  ];

  const experiences: string[] = [
    "6+ years in IT industry with PHP, Laravel, JavaScript, and web applications",
    "Implemented CRM, ERP, and Billing systems for hotels & restaurants",
    "Developed REST APIs for mobile applications",
    "Implemented TradingView charts API in Laravel application",
    "Worked on XML-based web services for data exchange",
    "Provided software support and handled production database issues",
    "Gathered client requirements for software development projects",
  ];

  const technologies: string[] = [
    "PHP",
    "Laravel",
    "JavaScript",
    "React.js",
    "Vue.js",
    "Angular.js",
    "Ionic",
    "React Native",
    "REST API",
    "GraphQL",
    "SOAP",
    "TradingView API",
  ];

  return (
    <div className="p-4 pb-0">
      <Divider orientation="center">Professional Experience Summary</Divider>
      <Card>
        <Row gutter={[16, 16]}>
          <Col span={24} md={12}>
            <Title level={4}>Key Skills</Title>
            <List
              dataSource={skills}
              renderItem={(item: Skill) => (
                <List.Item>
                  <List.Item.Meta avatar={item.icon} title={item.text} />
                </List.Item>
              )}
            />
          </Col>

          <Col span={24} md={12}>
            <Title level={4}>Highlights</Title>
            <List
              dataSource={experiences}
              renderItem={(item: string) => (
                <List.Item>
                  <Paragraph>{item}</Paragraph>
                </List.Item>
              )}
            />
          </Col>
        </Row>

        <Title level={4} style={{ marginTop: 20 }}>
          Technologies
        </Title>
        <div>
          {technologies.map((tech: string) => (
            <Tag color="blue" key={tech} style={{ margin: "0 8px 8px 0" }}>
              {tech}
            </Tag>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ExperienceSummary;

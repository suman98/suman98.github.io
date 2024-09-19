import React from "react";
import { Card, Row, Col, Tag, Typography, Divider } from "antd";
import {
  CodeOutlined,
  DatabaseOutlined,
  ToolOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface Skill {
  name: string;
  items: string[];
}

const SkillsShowcase: React.FC = () => {
  const skills: Skill[] = [
    {
      name: "Programming Languages",
      items: ["PHP", "Javascript", "Python", "C/C++"],
    },
    {
      name: "Backend Frameworks",
      items: ["Laravel", "Codeigniter", "Django", "Node.js"],
    },
    {
      name: "Javascript Frameworks and Libraries",
      items: [
        "Vue.js",
        "React.js",
        "React Native",
        "jQuery",
        "IONIC",
        "Apollo GraphQL",
      ],
    },
    {
      name: "Frontend Tools and UI Libraries",
      items: [
        "HTML",
        "CSS",
        "SCSS",
        "JS",
        "Bootstrap",
        "Bootstrap Vue",
        "Element UI",
        "Vuetify.js",
      ],
    },
    {
      name: "Web Services",
      items: ["SOAP", "JSON"],
    },
    {
      name: "Databases",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      name: "Tools",
      items: [
        "VS Code",
        "Ai Tools",
        "Postman",
        "Git",
        "GitHub",
        "Sublime Text 3",
        "Microsoft Office Tools",
      ],
    },
  ];

  return (
    <div className="p-4">
      <Card
        title={
          <Title level={2}>
            <CodeOutlined /> Skills Showcase
          </Title>
        }
      >
        <Paragraph>
          A comprehensive overview of my technical skills and proficiencies.
        </Paragraph>
        <Divider />
        {skills.map((skillGroup, index) => (
          <div key={index} style={{ marginBottom: 24 }}>
            <Title level={4}>
              {index === 5 ? (
                <DatabaseOutlined />
              ) : index === 6 ? (
                <ToolOutlined />
              ) : (
                <CodeOutlined />
              )}{" "}
              {skillGroup.name}
            </Title>
            <Row gutter={[8, 8]}>
              {skillGroup.items.map((skill, skillIndex) => (
                <Col key={skillIndex}>
                  <Tag color="blue">{skill}</Tag>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default SkillsShowcase;

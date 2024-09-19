import React from "react";
import { Card, Typography, Divider, Tag, Timeline } from "antd";
import { ProjectOutlined, BookOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

interface Project {
  name: string;
  description: string;
  scope: string;
  tools: string[];
}

interface Education {
  degree: string;
  institution: string;
  score: string;
}

const ProjectSection: React.FC<{ project: Project }> = ({ project }) => (
  <Card className="mb-4">
    <Title level={4}>
      <ProjectOutlined  />
      <span className="ms-2">{project.name}</span>
    </Title>
    <Paragraph>{project.description}</Paragraph>
    <Paragraph>
      <strong>Project Scope:</strong> {project.scope}
    </Paragraph>
    <div>
      <strong>Tools:</strong>
      {project.tools.map((tool, index) => (
        <Tag key={index} color="blue" className="mr-1 mt-1">
          {tool}
        </Tag>
      ))}
    </div>
  </Card>
);

const EducationSection: React.FC<{ educations: Education[] }> = ({
  educations,
}) => (
  <>
    <Card className="mb-4">
      <Title level={4}>
        <BookOutlined  />
        <span className="ms-2">Education</span>
      </Title>
      <Timeline>
        {educations.map((edu, index) => (
          <Timeline.Item key={index}>
            <Text strong>{edu.degree}</Text>
            <br />
            <Text>{edu.institution}</Text>
            <br />
            <Text type="secondary">Score: {edu.score}</Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  </>
);

const ProjectAndEducation: React.FC = () => {
  const project: Project = {
    name: "Online Discussion Forum Project",
    description:
      "Done as part for completing Graduate in Bachelors of Computer Science & Information Technology",
    scope:
      "Provides Text processing using various machine learning algorithms (Edit Distance, Naive Bayes Classifier & TF IDF).",
    tools: [
      "Python3",
      "Django Framework",
      "Jinja 2",
      "HTML/CSS/Javascript/jQuery",
      "SqlLite",
    ],
  };

  const educations: Education[] = [
    {
      degree:
        "Master of data science and computational intellectual",
      institution: "Coventry University",
      score: "Ongoing",
    },
    {
      degree:
        "Bachelors of Science in Computer Science & Information Technology (BSc. CSIT)",
      institution: "Tribhuvan University at Ambition college",
      score: "76.5%",
    },
    {
      degree: "10+2 in Science faculty",
      institution: "HSEB Board, Nepal at Southwestern State College",
      score: "68.4%",
    },
    {
      degree: "S.L.C",
      institution: "Nepal Government at Academy Boarding High School",
      score: "79.75%",
    },
  ];

  return (
    <div className="p-4 pb-0">
      <Divider orientation="center">Education Summary</Divider>
      <ProjectSection project={project} />
      <EducationSection educations={educations} />
    </div>
  );
};

export default ProjectAndEducation;

import React from 'react';
import { Timeline, Card, Typography, List, Tag, Space, Divider } from 'antd';
import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

type ExperienceItemProps = Experience

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  position,
  duration,
  location,
  responsibilities,
  technologies
}) => (
  <Card className="mb-4">
    <Title level={4}>{company}</Title>
    <Title level={5}>{position}</Title>
    <Space className="mb-2">
      <CalendarOutlined />
      <Text>{duration}</Text>
      <EnvironmentOutlined />
      <Text>{location}</Text>
    </Space>
    <List
      dataSource={responsibilities}
      renderItem={(item: string) => <List.Item>{item}</List.Item>}
    />
    <div className="mt-2">
      {technologies.map((tech: string, index: number) => (
        <Tag key={index} color="blue" className="mr-1 mb-1">
          {tech}
        </Tag>
      ))}
    </div>
  </Card>
);

const ProfessionalExperience: React.FC = () => {
  const experiences: Experience[] = [

    {
      company: "Nepse Alpha Pvt. Ltd.",
      position: "Full Stack Developer / React/ React Native/ Vue",
      duration: "September 2019 - Present",
      location: "Lazimpat, KTM",
      responsibilities: [
        "Developed web applications that provide news and various tools regarding Nepal Stock Market",
        "Developed database structure as per requirements using PostgreSQL database",
        "Integrated and modified Trading view Chart for Web Portals",
        "Involved in database query optimization",
        "Worked on web scrapings",
        "Learned and developed a mobile app using React Native"
      ],
      technologies: ["Vue.js", "Laravel API", "Inertia.js", "PostgreSQL", "Element UI", "Vuetify", "React Native"]
    },
    {
      company: "Global English Campus (GEC)",
      position: "Laravel / Vue JS Developer",
      duration: "Dec 2021 - Present",
      location: "Remote",
      responsibilities: [
        "Responsible for UI & WEB Development using Laravel & Vue CLI",
        "Follow Agile Development and used ClickUp",
        "Designed and developed workspace management system"
      ],
      technologies: ["Vue", "Vuex", "Vuexy", "Bootstrap Vue", "Apollo GraphQL", "Python", "Laravel"]
    },
  
    {
      company: "Gamenic Nalamiz Tech Pvt. Ltd",
      position: "Laravel & Vue/React Js Developer",
      duration: "April 2020 - Dec 2021",
      location: "Remote",
      responsibilities: [
        "Worked with an international team from a remote location",
        "Utilized all GitHub core features by following agile methodology",
        "Developed and maintained a real-time chat application system",
        "Involved in analyzing logs in AWS Servers",
        "Worked with docker environment",
        "Perform Unit Testing"
      ],
      technologies: ["Vue", "Vuex", "Element UI", "Laravel Voyager", "Docker"]
    },
    {
      company: "Mero Network Pvt. Ltd.",
      position: "Laravel & React Developer",
      duration: "April 2018 - April 2020",
      location: "Lazimpat, KTM",
      responsibilities: [
        "Involved in working on CRM & ERP software for Travel Management, Restaurant Management, Inventory Management, and Project Management",
        "Implemented SOAP API (Provided by SABRE) for Online Flight Booking System",
        "Designing and developing Rest APIs for data communication, especially for mobile applications",
        "Involved in upgrading Laravel framework versions",
        "Creating database structure as per requirements using MySQL database",
        "Implemented various modules like Live Chat system, Document Management system, Project Management System, and many more"
      ],
      technologies: ["Laravel", "React", "jQuery", "Vue.js", "Axios", "AJAX", "MySQL", "SOAP API"]
    }
  ];

  return (
    <div className="p-4 pb-0">
      <Divider orientation="center">Professional Experience</Divider>
      <Timeline mode="left" >
        {experiences.map((exp: Experience, index: number) => (
          <Timeline.Item key={index}>
            <ExperienceItem {...exp} />
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default ProfessionalExperience;
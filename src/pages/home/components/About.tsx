import React from 'react';
import { Card, Avatar, Typography, Button, Space } from 'antd';
import { EnvironmentOutlined, GithubOutlined, TwitterOutlined, LinkedinOutlined, FacebookOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const AboutMe = () => {
  return (
    <Card 
      style={{ 
        maxWidth: 800, 
        margin: 'auto', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
      bodyStyle={{ padding: 0 }}
    >
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '40px 20px',
        backgroundColor: '#fff' 
      }}>
        <Avatar 
          size={120} 
          src="/images/suman.jpeg" 
          style={{ border: '4px solid #1890ff' }}
        />
        <Title level={2} style={{ margin: '16px 0 4px', fontWeight: 600 }}>
          Suman Thapa
        </Title>
        <Text style={{ fontSize: '16px', color: '#666', marginBottom: '8px' }}>
          Software Engineer
        </Text>
        <Text style={{ color: '#666', marginBottom: '16px' }}>
          <EnvironmentOutlined /> Kathmandu, Nepal
        </Text>
        <Paragraph style={{ 
          textAlign: 'center', 
          maxWidth: '600px',
          marginBottom: '24px',
          color: '#333'
        }}>
          To work responsibly in a challenging environment precisely in the IT field which includes giving the full potentiality and being creative to present desired results and become a successful IT professional
        </Paragraph>
        <Button 
          type="primary" 
          style={{ 
            borderRadius: '20px', 
            padding: '0 24px', 
            height: '40px',
            fontSize: '16px',
            marginBottom: '24px'
          }}
        >
          Get In Touch
        </Button>
        <Space size={16}>
          <GithubOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
          <TwitterOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
          <LinkedinOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
          <FacebookOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
          <MailOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
        </Space>
      </div>
    </Card>
  );
};

export default AboutMe;
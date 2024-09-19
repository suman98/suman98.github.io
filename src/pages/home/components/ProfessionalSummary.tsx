import React from 'react';
import { Divider, List, Typography } from 'antd';

const data = [
    { tag: 'Experience', content: '6+ years of IT industry experience on PHP with Laravel framework, JavaScript, and web applications with marketing strategy' },
    { tag: 'CRM & ERP', content: 'Experience working on CRM (Customer Relationship Management) & ERP (Enterprise Resource Planning)' },
    { tag: 'Billing Systems', content: 'Implemented Billing system for hotels & restaurants' },
    { tag: 'International Teams', content: 'Worked with international teams following GitHub rules strictly' },
    { tag: 'Software Support', content: 'Provided software support and handled issues in the production database' },
    { tag: 'Client Requirements', content: 'Experience with gathering clients\' requirements for software developments' },
    { tag: 'Applications', content: 'Implemented several applications using Laravel and XML-based web services for data exchange' },
    { tag: 'APIs', content: 'Experience working on SOAP, REST API & GRAPHQL' },
    { tag: 'Hybrid Apps', content: 'Developed and Deployed Hybrid (Android & IOS) application using IONIC Frameworks and React Native' },
    { tag: 'REST API', content: 'Developed REST API for implementation in mobile-based applications' },
    { tag: 'TradingView', content: 'Implemented TradingView charts API in Laravel application' },
    { tag: 'Frontend & Backend', content: 'Mainly worked on React.js Framework as frontend and Laravel framework as backend' },
    { tag: 'JS Frameworks', content: 'Also have experience working in other JS frameworks like Vue.js & Angular.js' }
  ];

const App: React.FC = () => (
  <>
    <Divider orientation="left">Professional Summary</Divider>
    <List
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[{item.tag}]</Typography.Text> {item.content}
        </List.Item>
      )}
    />
  </>
);

export default App;
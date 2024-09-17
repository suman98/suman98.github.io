import React from 'react';
import { Menu } from 'antd';

interface NavMenuProps {
  onMenuClick: (key: string) => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ onMenuClick }) => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="about" onClick={() => onMenuClick('about')}>
        About
      </Menu.Item>
      <Menu.Item key="skills" onClick={() => onMenuClick('skills')}>
        Skills
      </Menu.Item>
      <Menu.Item key="experience" onClick={() => onMenuClick('experience')}>
        Experience
      </Menu.Item>
      <Menu.Item key="education" onClick={() => onMenuClick('education')}>
        Education
      </Menu.Item>
    </Menu>
  );
};

export default NavMenu;

import React from 'react';
const { SubMenu } = Menu;
const { Sider: AntSider } = Layout;
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';

export const Sider = () => (
    <AntSider width={200}>
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
        >
            <Menu.Item key="home-menu" icon={<LaptopOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="todo-menu" icon={<NotificationOutlined />}>
                <Link to="/todo">Todo</Link>
            </Menu.Item>
            <SubMenu
                key="feedback-menu"
                icon={<UserOutlined />}
                title="Feedback"
            >
                <Menu.Item key="feedback-menu-item">
                    <Link to="/codeFeedback">Code</Link>
                </Menu.Item>
                <Menu.Item key="music-menu-item">
                    <Link to="/codeFeedback">Music</Link>
                </Menu.Item>
                <Menu.Item key="language-menu-item">
                    <Link to="/codeFeedback">Language</Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    </AntSider>
);

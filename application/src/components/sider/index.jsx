import React from 'react';
const { SubMenu } = Menu;
const { Sider: AntSider } = Layout;
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from '@ant-design/icons';
import * as Styled from './style';

import { Link } from 'react-router-dom';

export const Sider = () => (
    <AntSider width={200} breakpoint="lg" collapsedWidth="0">
        <Styled.Logo />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['todo-menu']}>
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

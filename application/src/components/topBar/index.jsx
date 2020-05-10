import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const TopBar = () => (
    <Layout>
        <Header>
            <div></div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Todo</Menu.Item>
            </Menu>
        </Header>
    </Layout>
);

export default TopBar;

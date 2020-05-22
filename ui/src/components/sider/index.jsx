import React from 'react';
const { SubMenu } = Menu;
const { Sider: AntSider } = Layout;
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    CarryOutOutlined,
    CodeOutlined,
    HomeOutlined,
    PlayCircleOutlined,
    GlobalOutlined,
} from '@ant-design/icons';
import * as Styled from './style';

import { getSelectedMenuId } from '../../state/topBar/selectors';
import { updateSelectedMenuId } from '../../state/topBar/actions';

export const Sider = ({ selectedMenuId, onSelectMenu }) => (
    <AntSider width={250} breakpoint="lg" collapsedWidth="0">
        <Styled.Logo />
        <Menu
            theme="dark"
            mode="inline"
            // onSelect={onSelectMenu}
            // selectedKeys={[selectedMenuId]}
            defaultSelectedKeys={['todo-menu']}
        >
            <Menu.Item key="home-menu">
                <Link to="/">
                    <HomeOutlined /> Home
                </Link>
            </Menu.Item>
            <Menu.Item key="todo-menu">
                <Link to="/todo">
                    <CarryOutOutlined /> Todo
                </Link>
            </Menu.Item>
            <SubMenu key="feedback-menu" title="Feedback">
                <Menu.Item key="feedback-menu-item">
                    <Link to="/codeFeedback">
                        <CodeOutlined /> Code
                    </Link>
                </Menu.Item>
                <Menu.Item key="music-menu-item">
                    <Link to="/codeFeedback">
                        <PlayCircleOutlined /> Music
                    </Link>
                </Menu.Item>
                <Menu.Item key="language-menu-item">
                    <Link to="/codeFeedback">
                        <GlobalOutlined />
                        Language
                    </Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    </AntSider>
);

const mapStateToProps = (state) => ({
    selectedMenuId: getSelectedMenuId(state),
});

const mapDispatchToProps = (dispatch) => ({
    onSelectMenu(selection) {
        const selectedMenuId = selection.selectedKeys[0];
        dispatch(updateSelectedMenuId(selectedMenuId));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sider);

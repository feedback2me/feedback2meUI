import React from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { getSelectedMenuId } from '../../state/topBar/selectors';
import { updateSelectedMenuId } from '../../state/topBar/actions';

import { Link } from 'react-router-dom';

import * as Styled from './style';

const TopBar = ({ selectedMenuId, onSelectMenu }) => {
    return (
        <Styled.AntHeader>
            <Menu
                mode="horizontal"
                onSelect={onSelectMenu}
                defaultSelectedKeys={['2']}
                selectedKeys={[selectedMenuId]}
            >
                <Menu.Item key="1">
                    <Link to="/">Home</Link>
                </Menu.Item>
            </Menu>
        </Styled.AntHeader>
    );
};

const mapStateToProps = (state) => ({
    selectedMenuId: getSelectedMenuId(state),
});

const mapDispatchToProps = (dispatch) => ({
    onSelectMenu(selection) {
        const selectedMenuId = selection.selectedKeys[0];
        dispatch(updateSelectedMenuId(selectedMenuId));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);

import React from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import { getSelectedMenuId } from '../../state/topBar/selectors';
import { updateSelectedMenuId } from '../../state/topBar/actions';

import * as Styled from './style';

const TopBar = () => {
    return (
        <Styled.AntHeader>
            <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Home</Menu.Item>
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

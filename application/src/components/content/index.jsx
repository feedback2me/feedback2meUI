import React from 'react';
import { Breadcrumb } from 'antd';
import propTypes from 'prop-types';

import { AntRootContent, AntContent, AntBreadcrumb, AntLayout } from './style';

const Content = (props) => (
    <AntRootContent>
        <AntBreadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Todo</Breadcrumb.Item>
        </AntBreadcrumb>
        <AntLayout>
            <AntContent>{props.children}</AntContent>
        </AntLayout>
    </AntRootContent>
);

Content.propTypes = {
    children: propTypes.array.isRequired,
};

export default Content;

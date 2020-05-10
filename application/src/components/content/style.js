import styled from 'styled-components';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

export const AntRootContent = styled(Content)`
    padding: 0 50px;
`;

export const AntContent = styled(Content)`
    padding: 0 24px;
    min-height: 280px;
`;

export const AntLayout = styled(Layout)`
    padding: 24px 0;
`;

export const AntBreadcrumb = styled(Breadcrumb)`
    margin: 16px 0;
`;

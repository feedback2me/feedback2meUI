import React from 'react';

import TopBar from '../../components/topBar';
import Footer from '../../components/footer';
import Content from '../../components/content';
import { Layout } from 'antd';
import { Sider } from '../../components/sider';
import { BrowserRouter as Router } from 'react-router-dom';
import * as Styled from './style';

const App = () => (
    <Layout>
        <Router>
            <TopBar />
            <Styled.SiteLayout>
                <Sider />
                <Layout>
                    <Content />
                    <Footer />
                </Layout>
            </Styled.SiteLayout>
        </Router>
    </Layout>
);

export default App;

import React from 'react';
import AddTodo from '../addTodo';
import VisibleTodoList from '../visibleTodoList';
import TodoActions from '../../components/todoActions';
import TopBar from '../../components/topBar';
import Footer from '../../components/footer';
import Content from '../../components/content';
import { Layout } from 'antd';

const App = () => (
    <Layout>
        <TopBar />
        <Content>
            <AddTodo />
            <VisibleTodoList />
            <TodoActions />
        </Content>
        <Footer />
    </Layout>
);

export default App;

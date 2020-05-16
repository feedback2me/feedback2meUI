import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TodoPage } from '../../pages/todoPage';
import { CodeFeedbackPage } from '../../pages/codeFeedbackPage';
import { HomePage } from '../../pages/homePage';

import { AntRootContent, AntContent, AntLayout } from './style';

const Content = () => (
    <AntContent>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/todo">
                <TodoPage />
            </Route>
            <Route path="/codeFeedback">
                <CodeFeedbackPage />
            </Route>
        </Switch>
    </AntContent>
);

export default Content;

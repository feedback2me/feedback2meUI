import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TodoPage } from '../../pages/todoPage';
import { CodeFeedbackPage } from '../../pages/codeFeedbackPage';
import { RequestFeedbackPage } from '../../pages/requestFeedback';
import { HomePage } from '../../pages/homePage';

import { AntContent } from './style';

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
            <Route path="/request-feedback">
                <RequestFeedbackPage />
            </Route>
        </Switch>
    </AntContent>
);

export default Content;

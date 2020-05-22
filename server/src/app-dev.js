// eslint-disable import/no-extraneous-dependencies
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../config/webpack.dev';

import api from './api';
import logger from './logger';

const app = express();

const compiler = webpack(config);

// Enable "webpack-dev-middleware"
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    }),
);

// Enable "webpack-hot-middleware"
app.use(webpackHotMiddleware(compiler));

// investigate this
app.use(express.static(path.join(__dirname, '../public')));

app.use(helmet());
app.use(compression());
app.use(express.json());

api(app);

app.get('/', (req, res) => res.send('Home page'));

const port = process.env.PORT || 8080;
const ROOT_URL = `http://localhost:${port}`;

app.listen(port, (err) => {
    if (err) throw err;
    logger.info(`> Ready on ${ROOT_URL}`);
});

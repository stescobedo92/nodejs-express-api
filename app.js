import path from 'path';

import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import routes from './api/controllers';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

Object.keys(routes).forEach(key => app.use('/', routes[key].router));

export default app;

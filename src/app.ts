import 'reflect-metadata';

import * as express from 'express';
import { connect } from 'mongoose';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './inversify.config';

connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

new InversifyExpressServer(
    container,
    undefined, undefined, app,
    undefined
).build();

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = require('http').createServer(app);
server.listen(port);

server.on('listening', () => {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.debug('Listening on ' + bind);
});

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    } else if (port >= 0) {
        return port;
    } else {
        return false;
    }
}

const express = require('express');
const serverconfig = require('nconf');
const config = require('../_assets/json/config/config.json');
const { processHandler } = require('./processHandler/processHandler');
require('dotenv').config();

const app = express();

app.set('config', config);
app.set('routes', config.routes);
app.set('mainURL', config.routes.main.path);

serverconfig.argv().env().file({
    file: './_assets/json/config/config.json',
});

require('../apiroutes/main-route')({ app });

app.listen(process.env.BACKEND_PORT, process.env.BACKEND_DOMAIN, () => {
    console.log(
        `http://${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT} server started on ${process.env.BACKEND_PORT}`
    );
});

processHandler();

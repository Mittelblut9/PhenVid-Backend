const nconf = require('nconf');
const status = require('../../../_assets/json/status/status.json');

module.exports = ({ app }) => {
    app.get(`${app.get('mainURL')}${app.get('routes').maintain.ping.path}`, (req, res) => {
        return res.json({
            status: status.STATUS_OK,
        });
    });
};

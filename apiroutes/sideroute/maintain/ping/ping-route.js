const nconf = require('nconf')
const status = require('../../../../_assets/json/status/status.json');

module.exports = ({app}) => {
    app.get(nconf.get('routes:main:path')+nconf.get('routes:ping:path'), (req, res) => {
        return res.json({
            status: status.STATUS_OK
        });
    })
}
module.exports = ({ app }) => {
    app.get(`${app.get('mainURL')}${app.get('routes').user.getUser.path}`, (req, res) => {
        res.send('Hello World!');
    });
};

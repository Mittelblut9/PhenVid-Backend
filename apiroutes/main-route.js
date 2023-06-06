const fs = require('fs');
const path = require('path');

module.exports = async ({ app }) => {
    const getAllFiles = function (dirPath, arrayOfFiles) {
        files = fs.readdirSync(dirPath);

        arrayOfFiles = arrayOfFiles || [];

        files.forEach(function (file) {
            if (path.basename(file, '.js') === 'main-route') return;

            if (fs.statSync(dirPath + '/' + file).isDirectory()) {
                arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
            } else {
                arrayOfFiles.push(path.join(dirPath, '/', file));
            }
        });

        return arrayOfFiles;
    };

    const routes = getAllFiles(path.join(__dirname));
    routes.forEach((route) => {
        require(route)({
            app,
        });
    });
};

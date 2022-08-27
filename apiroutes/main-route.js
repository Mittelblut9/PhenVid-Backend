module.exports = ({app}) => {
    for(let i in app.settings.config.routes) {
        let route = app.settings.config.routes[i];
        require(`./sideroute/${(route.parent) ? route.parent + '/' : ''}${route.name}/${route.name}-route`)({app});
    }
}
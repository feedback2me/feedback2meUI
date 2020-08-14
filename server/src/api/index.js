const helloWorldApi = require('./helloWorld');
const AuthorizationRouter = require('./authorization/routes.config');
const UsersRouter = require('./users/routes.config');

function setHeaders(server) {
    return server.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header(
            'Access-Control-Allow-Methods',
            'GET,HEAD,PUT,PATCH,POST,DELETE',
        );
        res.header('Access-Control-Expose-Headers', 'Content-Length');
        res.header(
            'Access-Control-Allow-Headers',
            'Accept, Authorization, Content-Type, X-Requested-With, Range',
        );
        if (req.method === 'OPTIONS') {
            return res.send(200);
        }
        return next();
    });
}

function api(server) {
    setHeaders(server);

    server.use('/api/v1/hello-world', helloWorldApi);
    AuthorizationRouter.routesConfig(server);
    UsersRouter.routesConfig(server);
}

module.exports = api;

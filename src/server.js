const hapi = require ('hapi');
const routes = require ('./routes');


const init = async () => {
    const server = new hapi.Server({
        port : 9000,
        host: 'localhost',
        routes: {
            cors : {
                origin: ['*'],
            }
        }
    });


    server.route(routes);


    await server.start();
    console.log(`Server started at ${server.info.uri}`);
};

init();


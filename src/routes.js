const routes  = [
    {
        method: 'GET',
        path: '/',
        handler : () => {
            return {
                status : 'success',
                message: 'Welcome to bookshelf-API',
            };
        }
    },
    {
        method: 'POST',
        path: '/book',
        handler : () => {}


    }
];


module.exports = routes;
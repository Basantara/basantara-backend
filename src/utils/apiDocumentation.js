const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Basantara API',
            version: '0.1.0',
            description: 'This is an API documentation for the Basantara applications',
        },
        servers: [
            {
                url: 'https://dev-basantara-api-2akzaauh3q-et.a.run.app'
            },
            {
                url: 'http://localhost:3000'
            },
        ],
    },
    apis: [
        './src/routes/usersRoutes.js',
        './src/routes/*.js'
    ]
};

const swaggerSpecs = swaggerJSDoc(options);

module.exports = swaggerSpecs;
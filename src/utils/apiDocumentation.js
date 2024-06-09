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
                url: 'http://localhost:3000'
            },
            {
                url: 'https://basantara-api-2akzaauh3q-et.a.run.app/'
            }
        ],
    },
    apis: [
        './src/routes/*.js'
    ]
};

const swaggerSpecs = swaggerJSDoc(options);

module.exports = swaggerSpecs;
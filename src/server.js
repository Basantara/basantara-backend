require('dotenv').config();
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');

const router = require('./routes');
const swaggerSpecs = require('./utils/apiDocumentation');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerSpecs)
);
app.use(router);

app.listen(port, () => {
    console.log(`Server Started At Port: ${port}`);
});
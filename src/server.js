require('dotenv').config();
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');
const fs = require('fs');
const YAML = require('yaml');

const router = require('./routes');
const swaggerFile = fs.readFileSync('./documentation.yaml', 'utf-8');
const swaggerDocs = YAML.parse(swaggerFile);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors());
app.use('/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerDocs)
);
app.use(router);

app.listen(port, () => {
    console.log(`Server Started At Port: ${port}`);
});
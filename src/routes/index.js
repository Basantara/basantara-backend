const express = require('express');
const alphabetsRoutes = require('./alphabetsRoutes.js');
const usersRoutes = require('./usersRoutes.js');
const { authenticateToken } = require('../middleware/authentication.js');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./documentation.yaml');

const app = express();

app.use(express.json());
app.use('/api/alphabets', authenticateToken, alphabetsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

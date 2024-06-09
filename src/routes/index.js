const { Router } = require('express');
const alphabetsRoutes = require('./alphabetsRoutes.js');

const router = Router();

router.use('/api',alphabetsRoutes);

module.exports = router;
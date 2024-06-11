const { Router } = require('express');
const alphabetsRoutes = require('./alphabetsRoutes.js');
const usersRoutes = require('./usersRoutes.js');
const { authenticateToken } = require('../middleware/authentication.js');

const router = Router();

router.use('/api/alphabets', authenticateToken, alphabetsRoutes);
router.use('/api/users', usersRoutes);

module.exports = router;
const { Router } = require('express');
const { getAllAlphabets, getRandomAlphabets } = require('../controller/alphabetsController');

const router = Router();

router.get('/', getAllAlphabets);
router.get('/random', getRandomAlphabets);

module.exports = router;

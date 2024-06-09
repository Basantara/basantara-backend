const { Router } = require('express');
const { getAllAlphabets } = require('../controller/alphabetsController');

const router = Router();

router.get('/alphabets', getAllAlphabets);
router.get('/alphabets/:id', (req, res) => {});

module.exports = router;
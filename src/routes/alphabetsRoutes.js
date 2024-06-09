/**
 * @swagger
 * components:
 *  schemas:
 *      Alphabets:
 *          type: object
 *          properties:
 *              id:
 *                  type: int
 *                  description: Object ID
 *              name:
 *                  type: string
 *                  description: Name of the alphabet
 *              description:
 *                  type: string
 *                  description: Description of the alphabet
 *              imageUrl:
 *                  type: string
 *                  description: Image URL for the alphabet
 *          example:
 *              id: 0
 *              name: a 
 *              description: Alphabet 'A' sign language
 *              imageUrl: https://basantara/image/a.png
 */

/**
 * @swagger
 * tags:
 *  name: Alphabets
 *  description: The Alphabets API Endpoint
 * /api/alphabets:
 *  get:
 *      summary: Get all alphabets sign language data
 *      tags: [Alphabets]
 *      responses:
 *          200:
 *              description: success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Alphabets'
 *          404:
 *              description: Data not found
 *          400:
 *              description: Bad Request
 *          500:
 *              description: Service unavailable
 */

const { Router } = require('express');
const { getAllAlphabets } = require('../controller/alphabetsController');

const router = Router();

router.get('/alphabets', getAllAlphabets);
router.get('/alphabets/:id', (req, res) => {});

module.exports = router;

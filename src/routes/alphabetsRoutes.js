/**
 * @swagger
 * components:
 *  securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: JWT
 *  schemas:
 *      Alphabets:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: Object ID
 *              name:
 *                  type: string
 *                  description: Name of the alphabet
 *              descriptionID:
 *                  type: string
 *                  description: Description of the alphabet in Indonesian
 *              descriptionEN:
 *                  type: string
 *                  description: Description of the alphabet in English
 *              imgVector:
 *                  type: string
 *                  description: Image URL for the alphabet vector image
 *              imgReal:
 *                  type: string
 *                  description: Image URL for the alphabet real image
 *          example:
 *              id: 0
 *              name: a 
 *              descriptionID: Regangkan jari telunjuk dan jempol kedua tangan dan tempelkan satu sama lain sehingga membentuk segitiga.
 *              descriptionEN: Extend the index finger and thumb of both hands and touch them together to form a triangle.
 *              imgVector: "https://storage.googleapis.com/basantara-assets/images-vector/a.png"
 *              imgReal: "https://storage.googleapis.com/basantara-assets/images/A.jpg"
 * security:
 *  - bearerAuth: []
 */

/**
 * @swagger
 * tags:
 *  name: Alphabets
 *  description: The Alphabets API Endpoint
 * paths:
 *  /api/alphabets:
 *      get:
 *          summary: Get all alphabets sign language data
 *          tags: [Alphabets]
 *          security:
 *              - bearerAuth: []
 *          responses:
 *              200:
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Alphabets'
 *              404:
 *                  description: Data not found
 *              400:
 *                  description: Bad Request
 *              403:
 *                  description: Forbidden
 *              500:
 *                  description: Service unavailable
 */


const { Router } = require('express');
const { getAllAlphabets } = require('../controller/alphabetsController');

const router = Router();

router.get('/', getAllAlphabets);

module.exports = router;

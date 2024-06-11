/**
 * @swagger
 * components:
 *  schemas:
 *      Users:
 *          type: object
 *          properties:
 *              username:
 *                  type: string
 *                  description: Name of the user
 *              email:
 *                  type: string
 *                  description: Email of the user
 *              password:
 *                  type: string
 *                  description: Password of the user
 *          example:
 *              username: tes 
 *              email: tes@tes.com
 *              password: password
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: The Users API Endpoint
 * /api/users/register:
 *  post:
 *      summary: Register new user
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              status: Success
 *              description: Register success
 *          400:
 *              status: Error
 *              description: Email Already Registered
 *          500:
 *              status: Error
 *              description: Internal server error
 * 
 * /api/users/login:
 *  post:
 *      summary: Login
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              description: Email of the user
 *                          password:
 *                              type: string
 *                              description: Password of the user
 *                      example:
 *                          email: tes@tes.com
 *                          password: password
 *      responses:
 *          200:
 *              status: Success
 *              description: Login success
 *              token: jwtToken
 *          400:
 *              status: Error
 *              description: Login failed
 *          500:
 *              status: Error
 *              description: Error massage
 */


const { Router } = require('express');
const { userRegister, userLogin } = require('../controller/userController');

const router = Router();

router.post('/register', userRegister);
router.post('/login', userLogin);

module.exports = router;
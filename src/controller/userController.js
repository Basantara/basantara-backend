const jwt = require('jsonwebtoken');

const firestoreDatabase = require("../utils/firestoreConnect");
const { hashPassword, comparePassword } = require("../utils/hashHelper");

const jwtKey = process.env.JWT_SECRET_KEY;
const userFirestore = firestoreDatabase.collection('users-dev');

async function userRegister(req, res) {
    try {
        const { email, password, username } = req.body;

        const checkEmail = await userFirestore.where('email', '==', email).get();

        if (!checkEmail.empty) {
            const error = new Error("Email Already Registered");
            error.statusCode = 400
            throw error;
        }

        const hashedPassword = await hashPassword(password);
        userFirestore.add({
            email: email,
            password: hashedPassword,
            username: username,
        });

        res.status(201);
        res.json({
            status: "Success",
            message: "Register Success",
        });
    } catch (error) {
        res.status(error.statusCode || 500);
        res.json({
            status: "Error",
            message: error.message,
        });
    }
}

async function userLogin(req, res) {
    try {
        const { email, password } = req.body;
    
        const userDataQuery = (await userFirestore.where('email', '==', email).get());
        const userData = userDataQuery.docs[0].data();
    
        if (userData.empty) {
            const error = new Error("Login Failed");
            error.statusCode = 400
            throw error;
        }

        const checkPassword = await comparePassword(password, userData.password);
        if(!checkPassword){
            const error = new Error("Login Failed");
            error.statusCode = 400
            throw error;
        }

        const token = jwt.sign({id: userData.id}, jwtKey);
        res.status(200);
        res.json({
            status: "Success",
            message: "Login Success",
            data: {
                username: userData.username,
                email: userData.email,
            },
            token,
        });

    } catch (error) {
        res.status(error.statusCode || 500);
        res.json({
            status: "Error",
            message: error.message,
        });
    }
}

module.exports = { userRegister, userLogin }
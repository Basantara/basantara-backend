const bcrypt = require('bcrypt');

const saltRounds = 10;

async function hashPassword(password){
    return await bcrypt.hash(password, saltRounds);
}

async function comparePassword(plainPassword, hasehdPassword){
    return await bcrypt.compare(plainPassword, hasehdPassword);
}

module.exports = { hashPassword, comparePassword };
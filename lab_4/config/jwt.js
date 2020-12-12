const jwt = require("jsonwebtoken");
const {jwt:{secret}} = require("./env");

const expiresIn = '7d';

const createToken = (data) => jwt.sign(data, secret, { expiresIn });

module.exports = {
    createToken,
    expiresIn
}

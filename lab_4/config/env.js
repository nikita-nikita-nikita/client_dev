require('dotenv').config();

const env = {
    jwt:{
        secret: process.env.JWT_SECRET
    }
}

module.exports = env;

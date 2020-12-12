const passport = require('passport');

const jwtMiddleware = passport.authenticate('jwt', {session: false});
const registerMiddleware = passport.authenticate('register', {session: false});
const loginMiddleware = passport.authenticate('login', {session: false});

module.exports = {
    jwtMiddleware,
    registerMiddleware,
    loginMiddleware
}

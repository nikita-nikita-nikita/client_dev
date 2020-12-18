const {Router} = require('express');
const {jwtMiddleware, loginMiddleware, registerMiddleware} = require('../middlewares/passportMiddlewares');
const authService = require('../services/authService');

const router = Router();

router.get(
    '/user',
    jwtMiddleware,
    (req, res, next) =>
        authService.login(req.user)
            .then(data => res.send(data))
            .catch(next)
).post("/register",
    registerMiddleware,
    (req, res, next) =>
        authService.register(req.user)
            .then(data => res.send(data))
            .catch(next)
).post("/login",
    loginMiddleware,
    (req, res, next) =>
        authService.login(req.user)
            .then(data => res.send(data))
            .catch(next)
)

module.exports = router;

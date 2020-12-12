const {Router} = require('express');
const {jwtMiddleware, loginMiddleware, registerMiddleware} = require('../middlewares/passportMiddlewares')

const router = Router();

router.get(
    '/user',
    jwtMiddleware,
    // todo create auth service
    // (req, res, next) => {
    //     authService.login(req.user)
    // .then(data => res.send(data))
    //         .catch(next)
    // }
    ).post("/register",
        registerMiddleware,
        //         (req, res, next) =>
        //             authService.registerUser(req.user)
        // .then(data => res.send(data))
        //     .catch(next)
    ).post("/login", loginMiddleware,
    //     (req, res, next) => authService.login(req.user)
    //     .then(data => res.send(data))
    //     .catch(next)
)

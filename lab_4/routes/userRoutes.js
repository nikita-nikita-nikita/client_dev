const {Router} = require('express');
const {jwtMiddleware, loginMiddleware, registerMiddleware} = require('../middlewares/passportMiddlewares');
const authService = require('../services/authService');

const router = Router();

router.get(
    '/user',
    jwtMiddleware,
    (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        return authService.login(req.user)
            .then(data => res.send(data))
            .catch(next);
    }
).post('/register',
    registerMiddleware,
    (req, res, next) => {

        return authService.register(req.user)
            .then(data => res.send(data))
            .catch(next);
    }
).post('/login',
    loginMiddleware,
    (req, res, next) => {
        return authService.login(req.user)
            .then(data => res.send(data))
            .catch(next)
    }
)

module.exports = router;

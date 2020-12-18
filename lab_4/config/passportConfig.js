const passport = require("passport")
const {Strategy: LocalStrategy} = require('passport-local');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const validator = require('validator');
const {secret} = require('./jwt');
const {compare} = require('../helpers/crypt');
const {DB:{getUserByMail, getUserByUsername, getUserById}} = require('../database/database');

passport.use(
    "login",
    new LocalStrategy({usernameField:"email"}, async (email, password, done)=>{
        try {
            const userByEmail = await getUserByMail(email);
            if(!userByEmail)
                return done({ status: 401, message: 'Incorrect password or email.' }, null);
            return await compare(password, userByEmail.password)
                ? done(null, userByEmail)
                : done({ status: 401, message: 'Incorrect password or email.' }, null)
        }catch (error){
            return done(error)
        }

    })
);


passport.use(
    "register",
    new LocalStrategy(
        {
            passReqToCallback: true
        }, async ({body:{email}}, username, password, done)=>{
        try {
            if(!validator.isEmail(email)||password.length<6)
                return done(
                    {
                        status: 401,
                        message: 'Password has less than 6 symbols and email must be email.'
                    }, null);
            const userByEmail = await getUserByMail(email);
            if(userByEmail)
                return done({ status: 401, message: 'Email is already taken.' }, null);
            const userByUsername = await getUserByUsername(username);
            if(userByUsername)
                return done({ status: 401, message: 'Username is already taken.' }, null);
            return done(null, {email, password, username})
        }catch (error){
            return done(error)
        }

    })
);

const options = {
    jwtFromRequest:ExtractJwt.fromHeader("token"),
    secretOrKey: secret
}

passport.use(new JwtStrategy(options, async ({id}, done)=>{
    try {
        const user = await getUserById();
        if (!user) throw new Error("session expired");
        return done(null, user);
    }catch (error){
        return done(error);
    }
}));

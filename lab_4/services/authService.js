const {createToken} = require('../config/jwt')
const {DB:{createUser, getUserById}} = require('../database/database');


const getById = async (id) => {
    const {password, ...user} = await getUserById(id);
    return user;
}
const login = async ({id}) => ({
    token: createToken({id}),
    user: await getUserById(id)
});

const register = async ({username, password, email}) =>
    login(await createUser(username, password, email));

module.exports = {
    register,
    login,
    getById
}

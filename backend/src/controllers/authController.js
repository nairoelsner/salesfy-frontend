const db = require('../../db/db');
const searchUserService = require('../services/searchUserService');

const login = async (email, password) => {
    const user = await searchUserService.searchUserByEmail(email);

    if(user && user.password === password){
        return {authorized: true, user};
    }else{
        return {authorized: false};
    }   
};

const register = async (newUserInfos) => {
    const userExists = await searchUserService.searchUserByEmail(newUserInfos.email);
    if(userExists) return {success: false};

    const queryResponse = await db.queryDatabase(`INSERT INTO user (name, email, password) VALUES ('${newUserInfos.name}', '${newUserInfos.email}', '${newUserInfos.password}');`);
    const queryResponse2 = await db.queryDatabase(`INSERT INTO seller (id, managerId) VALUES ('${queryResponse.insertId}', '${newUserInfos.managerId}');`);
    return {success: true};
};

module.exports = { login, register };

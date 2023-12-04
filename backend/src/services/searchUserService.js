const db = require('../../db/db')

const searchUserById = async (id) => {
    const queryResponse = await db.queryDatabase(`SELECT * FROM user WHERE id = '${id}'`)
    const user = queryResponse[0];

    if(!user) return false
    return user
}

const searchUserByEmail = async (email) => {
    const queryResponse = await db.queryDatabase(`SELECT * FROM user WHERE email = '${email}'`)
    const user = queryResponse[0];

    if(!user) return false
    return user
}

module.exports = { searchUserById, searchUserByEmail }
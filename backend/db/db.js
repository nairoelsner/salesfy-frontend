require('dotenv').config()
const mysql = require('mysql2')
const databaseUrl = process.env.DATABASE_URL

const queryDatabase = async (query) => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(databaseUrl)
        connection.query(query, function (err, results, fields){
            if (err){
                reject(err);
            }else{
                resolve(results);
            }
        })
        connection.end();
    });
}

module.exports = {queryDatabase}


const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


let _db;


const mongoConnect = callback => {

    MongoClient.connect(
        'mongodb+srv://yoonSeol:Ff8X29yjxqluGUoT@cluster0.lphba.mongodb.net/shop?retryWrites=true&w=majority'
    )
        .then(client => {
            console.log('Connected!');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}
const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;




// //- For SQL(sequelize) --------------------------------------------------------------
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete','root','1234',{
//     dialect: 'mysql',
//     host:'localhost'
// });

// module.exports=sequelize;
// //--------------------------------------------------------------------

// //- For SQL----------------------------------------------------------
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: '1234'
// });

// module.exports = pool.promise();
// //--------------------------------------------------------------------

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {

    MongoClient.connect('mongodb+srv://yoonSeol:Ff8X29yjxqluGUoT@cluster0.lphba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected! ');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });
}
module.exports = mongoConnect;





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

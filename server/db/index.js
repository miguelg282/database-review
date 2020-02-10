var Sequelize = require('Sequelize');
var orm = new Sequelize('chat', 'root', '@123');

var User = orm.define('User', {
  username: Sequelize.STRING
});

var Message = orm.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;

// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".


// /*
// In progress, need to finish other steps first.[Miguel]
// */
// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '@123',
//   database: 'chat'
// });


// con.coonnect();

// module.exports = con;

// con.connect(function(err) {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected');
//   con.query('CREATE DATABASE chat', function(err, result) {
//     if (err) {
//       throw err;
//     }
//     console.log('Database created');
//   });
// });
var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //fetch all messages
      //text, username, roomname, id
      var queryStr = 'SELECT messages.id, messages.text, messages.roomname, users.username FROM messages \
                     LEFT OUTER JOIN users on (messages.userid = users.id \
                     ORDER BY messages.id desc';
      db.query(queryStr, (err, results) => {
        callback(results);
      });
    },

    // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = 'INSERT INTO messages (text, userid, roomname) \
                    VALUES (?, (SELECT id FORM users WHERE username = ? limit 1), ?)';
      db.query(queryStr, params, (err, results) => {
        callback(results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'SELECT * FROM users';
      db.query(queryStr, (err, results) => {
        callback(results);
      });
    },
    post: function (params, callback) {
      var queryStr = `INSERT INTO users (username) VALUES (${username})`;
      db.query(queryStr, params, (err, results) => {
        callback(results);
      });
    }
  }
};


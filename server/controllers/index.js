var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      Message.findAll({ include: [User] })
        .complete((err, results) => {
          if (err) {
            console.error(err);
          }
          res.json(results);
        });
    }, // a function which handles a get request for all messages

    post: function (req, res) {
      User.findOrCreate({ username: req.body[username] })
        .complete((err, user) => {
          var params = {
            text: req.body.message,
            userid: user.id,
            roomname: req.body.roomname
          };
          Message.create(params)
            .complete((err, results) => {
              res.sendStatus(201);
            });
        });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      User.findAll()
        .complete((err, results) => {
          if (err) {
            console.error(err);
          }
          res.json(results);
        });
    },
    post: function (req, res) {
      User.create({ username: req.body[username] })
        .complete((err, user) => {
          if (err) {
            console.error(err);
          }
          res.sendStatus(201);
        });
    }
  }
};
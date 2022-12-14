const db = require("../models");

// Defining methods for the Menu Controller
module.exports = {
  // MenuItem functions
  findAll: function(req, res) {
    db.MenuItem
      .find(req.query)
      .sort({ menuItemId: 1 })
      .then(dbMenuItems => res.json(dbMenuItems))
      .catch(err => console.log(err));
  },
  findById: function(req, res) {
    db.MenuItem
      .findById({ _id: req.params.id })
      .then(dbMenuItem => res.json(dbMenuItem))
      .catch(err => console.log(err));
  },
  create: function(req, res) {
    db.MenuItem
      .create(req.body)
      .then(dbMenuItem => res.json(dbMenuItem))
      .catch(err => console.log(err));
  },
  update: function(req, res) {
    db.MenuItem
      .findOneAndUpdate({ menuItemId: req.body.menuItemId }, req.body)
      .then(dbMenuItem => res.json(dbMenuItem))
      .catch(err => console.log(err));
  },
  remove: function(req, res) {
    db.MenuItem
      .findById({ _id: req.params.id })
      .then(dbMenuItem => dbMenuItem.remove())
      .then(dbMenuItems => res.json(dbMenuItems))
      .catch(err => console.log(err));
  }
};

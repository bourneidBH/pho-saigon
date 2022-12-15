const db = require("../models");

// Defining methods for the Category Controller
module.exports = {
  // MenuCategory functions
  findAll: function(req, res) {
    db.MenuCategory
      .find(req.query)
      .sort({ _id: 1 })
      .then(dbMenuCategories => res.json(dbMenuCategories))
      .catch(err => console.log(err))
  },
  findById: function(req, res) {
    db.MenuCategory
      .findById({ _id: req.params.id })
      .then(dbMenuCategory => res.json(dbMenuCategory))
      .catch(err => console.log(err));
  },
  create: function(req, res) {
    db.MenuCategory
      .create(req.body)
      .then(dbMenuCategory => res.json(dbMenuCategory))
      .catch(err => console.log(err));
  },
  update: function(req, res) {
    db.MenuCategory
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbMenuCategory => res.json(dbMenuCategory))
      .catch(err => console.log(err));
  },
  remove: function(req, res) {
    db.MenuCategory
      .findOneAndDelete({ _id: req.params.id })
      .then(dbMenuCategories => res.json(dbMenuCategories))
      .catch(err => console.log(err));
  }
};

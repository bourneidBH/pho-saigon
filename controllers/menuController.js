const db = require("../models");

// Defining methods for the Menu Controller
module.exports = {
  // MenuCategory functions
  findAllCategories: function(req, res) {
    db.MenuCategory
      .find(req.query)
      // .populate({ 
      //   path: 'categoryItems',
      //   match: {'categoryName': 'categoryName'},
      //   model: 'MenuItem' 
      // })
      // .exec(function(err, menuCategories) {
      //   if(err) {
      //     console.log(err)
      //   } else {
      //     console.log("menu categories: ", menuCategories);
      //     res.json(menuCategories)
      //   };
      // })
      .then(dbMenuCategories => res.json(dbMenuCategories))
      .catch(err => console.log(err))
  },
  findCategoryById: function(req, res) {
    db.MenuCategory
      .findById(req.params.id)
      .then(dbMenuCategory => res.json(dbMenuCategory))
      .catch(err => console.log(err));
  },
  createCategory: function(req, res) {
    db.MenuCategory
      .create(req.body)
      .then(dbMenuCategory => res.json(dbMenuCategory))
      .catch(err => console.log(err));
  },
  updateCategory: function(req, res) {
    db.MenuCategory
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbMenuCategory => res.json(dbMenuCategory))
      .catch(err => console.log(err));
  },
  removeCategory: function(req, res) {
    db.MenuCategory
      .findById({ _id: req.params.id })
      .then(dbMenuCategory => dbMenuCategory.remove())
      .then(dbMenuCategories => res.json(dbMenuCategories))
      .catch(err => console.log(err));
  },
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
      .findById(req.params.id)
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

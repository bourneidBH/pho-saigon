const db = require("../models");

// Defining methods for the Menu Controller
module.exports = {
  // MenuCategory functions
  // findAll: function(req, res) {
    // db.MenuCategory
    // .aggregate([{
    //   $lookup: {
    //     from: "MenuItem",
    //     localField: "categoryName",
    //     foreignField: "categoryName",
    //     as: "categoryItems"
    //   }
    // }])
    // .find({})
    // .sort({ menuItemId: 1 })
    // .then(dbMenuCategory => {
    //   console.log("menu category: ", dbMenuCategory);
    //   res.json(dbMenuCategory);
    // })
    // .catch(err => console.log(err))

  //   db.MenuCategory
  //   .find({})
  //   .populate({ path: 'categoryItems', select: 'categoryName categoryName' })
  //   .exec(function(err, menuCategories) {
  //     if(err) {
  //       console.log(err)
  //     } else {
  //       console.log("menu categories: ", menuCategories);
  //       res.json(menuCategories)
  //     };
  // })
    // .then(dbMenuCategory => {
    //   console.log(dbMenuCategory.categoryItems);
    //   res.json(dbMenuCategory);
    // })
    // .catch(err => console.log(err))
  // },
  // create: function(req, res) {
  //   db.MenuCategory
  //     .create(req.body)
  //     .then(dbMenuCategory => res.json(dbMenuCategory))
  //     .catch(err => console.log(err));
  // },
  // update: function(req, res) {
  //   db.MenuCategory
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbMenuCategory => res.json(dbMenuCategory))
  //     .catch(err => console.log(err));
  // },
  // remove: function(req, res) {
  //   db.MenuCategory
  //     .findById({ _id: req.params.id })
  //     .then(dbMenuCategory => dbMenuCategory.remove())
  //     .then(dbMenuCategories => res.json(dbMenuCategories))
  //     .catch(err => console.log(err));
  // },
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
      .findOneAndUpdate({ _id: req.params.id }, req.body)
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

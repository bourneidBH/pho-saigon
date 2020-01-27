const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MenuItem = require("./MenuItem");

const MenuCategorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true
    },
}, { toJSON: { virtuals: true } }
);

MenuCategorySchema.virtual('categoryItems', {
    ref: MenuItem, // the model to use
    localField: 'categoryName', // find items where localField is equal to foreignField
    foreignField: 'categoryName',
    justOne: false,
    options: {
        sort: {
            date: 1
        }
    }
});

MenuCategorySchema.set('toObject', { virtuals: true });
MenuCategorySchema.set('toJSON', { virtuals: true });

const MenuCategory = mongoose.model("MenuCategory", MenuCategorySchema);
module.exports = MenuCategory;
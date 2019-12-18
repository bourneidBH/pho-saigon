const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuCategorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true
    },
    categoryItems: [
        {
            type: Schema.Types.ObjectId,
            ref: "MenuItem"
        }
    ]
});

const MenuCategory = mongoose.model("MenuCategory", MenuCategorySchema);
module.exports = MenuCategory;
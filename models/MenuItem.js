const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const MenuItemSchema = new Schema({
    menuItemId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    itemName: {
        type: String,
        required: true,
        trim: true
    },
    itemNameVietnamese: {
        type: String,
        trim: true
    },
    categoryName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number
    },
    options: [
        {
            optionType: {
                type: String,
                trim: true
            },
            optionName: {
                type: String,
                trim: true
            },
            optionPrice: {
                type: Number
            }
        }
    ],
    image: {
        type: String
    },
});

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

module.exports = MenuItem;
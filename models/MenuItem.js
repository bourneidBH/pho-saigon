const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const MenuItemSchema = new Schema({
    menuItemId: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    itemNameVietnamese: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    }
});

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

module.exports = MenuItem;
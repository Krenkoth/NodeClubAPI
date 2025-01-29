const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, maxLength: 30},
    email: {type: String},
});

// add virtuals

module.exports = mongoose.model("User", UserSchema);
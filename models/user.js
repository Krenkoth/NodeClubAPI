const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    username: {type: String, required: true, maxLength: 20},
    password: {type: String, required: true, maxLength: 100},
    email: {type: String, required: true, maxLength: 100}
});

// add virtuals

module.exports = mongoose.model("User", UserSchema);
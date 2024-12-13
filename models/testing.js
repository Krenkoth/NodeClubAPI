const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestSchema = new Schema({
    name: {type: String},
    monkey: {type: String},
    num: {type: Number},
});

TestSchema.virtual("string").get(function () {
    return `Name: ${this.name}, num: ${this.num}`;
});

module.exports = mongoose.model("Test", TestSchema);
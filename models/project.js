const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: {type: String, required: true, maxLength: 100},
    summary: {type: String, required: true},
});

// add virtuals

module.exports = mongoose.model("Project", ProjectSchema);
const Test = require('../models/testing')
const asyncHandler = require("express-async-handler");
const {body, validationResult} = require("express-validator");

exports.index = asyncHandler(async (req, res) => {
    console.log("receive request");
    const tests = await Test.find().exec();
    res.json(tests);
    
});

exports.test_create = asyncHandler(async (req, res) => {
    const newItem = new Test(req.body);
    await newItem.save();
    res.status(201).json(newItem);
})
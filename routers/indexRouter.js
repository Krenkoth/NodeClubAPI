var express = require("express");
var router = express.Router();
var Test = require("../models/testing");
var Project = require("../models/project");
var User = require("../models/user");
const asyncHandler = require("express-async-handler");

router.get('/', asyncHandler(async (req, res) => {
    const tests = await Test.find().exec();
    res.json(tests);
    // res.send("This works")
}));

router.get('/projects/', asyncHandler(async (req, res) => {
    const projects = await Project.find().exec();
    res.json(projects);
}));

router.get('/user/email', asyncHandler(async (req, res) => {
    const user = await User.findOne({email: req.query.email}).exec();
    console.log(`User: ${user}`);
    if (!user) {
        res.statusMessage = "Email not found";
        res.status(404).end();
    } else {
        res.json(user);
    }
    
    
}))

router.post('/user/new/', asyncHandler(async (req, res) => {
    console.log(`Body: ${req.body.username}, ${req.body.email}`);

    const emailExists = await User.findOne({email: req.body.email}).exec();
    const usernameExists = await User.findOne({username: req.body.username}).exec();

    if (emailExists !== null) {
        res.status(400).send({message: "Email exists"});
    } else if (usernameExists !== null) {
        res.status(400).send({message: "Username exists"});
    } else {

        const user = new User({
            username: req.body.username,
            email: req.body.email,
        });
        await user.save();
        res.json(user);
    }
}));

module.exports = router;
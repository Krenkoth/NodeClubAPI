const Project = require("../models/project");
const asyncHandler = require("express-async-handler");
const {body, validationResult} = require("express-validator");

exports.index = asyncHandler(async (req, res) => {
    console.log("Project index");
    const allProjects = await Project.find().sort({title: 1}).exec();
    res.json(allProjects);
});

exports.project_create = [
    body("title", "Title must be specified").trim().notEmpty().escape(),
    body("summary", "Summary must be specified").trim().notEmpty().escape(),
    asyncHandler(async (req, res) => {
        const errors = validationResult(req);
        console.log("Body: " + JSON.stringify(req.body));
        const project = new Project({
            title: req.body.title,
            summary: req.body.summary,
        });



        if (!errors.isEmpty()) {
            res.json(errors);
        } else {
            await project.save();
            res.json(project);
        }
    })
];
var express = require('express');
var router = express.Router();
const testController = require("../controllers/testController");
const projectController = require("../controllers/projectController");

/* GET home page. */
router.get('/', testController.index);

router.get('/test/', testController.index);

router.post('/test/', testController.test_create);

router.get('/projects/', projectController.index);

router.post("/projects/new/", projectController.project_create);

module.exports = router;

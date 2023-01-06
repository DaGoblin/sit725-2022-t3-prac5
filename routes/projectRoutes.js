var express = require("express");
var router = express.Router();
// let projectCollection;
let controller = require("../controller");

// let projectController = require("../controller")

// let client = require("../DBconnect")
// setTimeout(() => {
//     projectCollection = client.db().collection("Pets");
// },2000)

// //get project...
// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
//   };

router.get("/projects", (req, res) => {
  controller.projectController.retrieveProjects(req, res);
  // getProjects((err, result) => {
  //   if (err) {
  //     res.json({ statusCode: 400, message: err });
  //   } else {
  //     res.json({ statusCode: 200, message: "Success", data: result });
  //   }
  // });
});

//   //insert project
// const insertProjects = (project, callback) => {
//     projectCollection.insert(project, callback);
//   };

//post api...
router.post("/projects", (req, res) => {
  controller.projectController.createProjects(req, res);
  // console.log("New Project added", req.body);
  // var newProject = req.body;
  // insertProjects(newProject, (err, result) => {
  //   if (err) {
  //     res.json({ statusCode: 400, message: err });
  //   } else {
  //     res.json({
  //       statusCode: 200,
  //       message: "Project Successfully added",
  //       data: result,
  //     });
  //   }
  // });
});

module.exports = router;

var express = require("express");
var app = express();
var cors = require("cors");
// let projectCollection;
//let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use("/api/projects", projectRoutes);

app.use("/api", projectRoutes); //Understand how this works now befor it weas using /api/projects and directing all requests fo the projectRoutes file by chaing it to /api i can define differene get/posts requests in the other file.

// //mongoDb connection
// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://DaGoblin:LearningDBAccess@cluster0.vy8qrqg.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });

// const createCollection = (collectionName) => {
//   client.connect((err, db) => {
//     projectCollection = client.db().collection(collectionName);
//     if (!err) {
//       console.log("MongoDB Connected");
//     } else {
//       console.log("DB Error: ", err);
//       process.exit(1);
//     }
//   });
// };

// //insert project
// const insertProjects = (project, callback) => {
//   projectCollection.insert(project, callback);
// };

// //post api...
// app.post("/api/projects", (req, res) => {
//   console.log("New Project added", req.body);
//   var newProject = req.body;
//   insertProjects(newProject, (err, result) => {
//     if (err) {
//       res.json({ statusCode: 400, message: err });
//     } else {
//       res.json({
//         statusCode: 200,
//         message: "Project Successfully added",
//         data: result,
//       });
//     }
//   });
// });

// const cardList = [
//   {
//     title: "Arthur",
//     image: "images/Arthur.jpg",
//     link: "Photo of Arthur with a toy",
//     desciption: "Is he not cute"
// },
// {
//     title: "Gwen",
//     image: "images/Gwen.jpg",
//     link: "Photo of Gwen",
//     desciption: "But is Gwen cuter"
// }
// ]

// //get project...
// const getProjects = (callback) => {
//   projectCollection.find({}).toArray(callback);
// };

// app.get("/api/projects", (req, res) => {
//   getProjects((err, result) => {
//     if (err) {
//       res.json({ statusCode: 400, message: err });
//     } else {
//       res.json({ statusCode: 200, message: "Success", data: result });
//     }
//   });
// });

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App listening to: " + port);
  // createCollection("Pets");
});

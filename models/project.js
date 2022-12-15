
//missed this part where the code came from

let client = require("../DBconnect")
let projectCollection;

setTimeout(() => {
    projectCollection = client.db().collection("Pets");
},2000)


//get project...
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
  };

    //insert project
const insertProjects = (project, callback) => {
    projectCollection.insert(project, callback);
  };


module.exports = {insertProjects,getProjects}
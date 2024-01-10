const mongoose = require('mongoose')
// mongodb+srv://sai:sai123@cluster0.e4b7jq9.mongodb.net/TodosApp
const connection = mongoose.connect("mongodb+srv://rohit:rohit@mobigictechnologies.qajrwbn.mongodb.net/fileManagement");

module.exports =  connection 


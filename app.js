const express = require('express');
const prodRouter =require('./route/prod')
const mongoos = require('mongoose')
var body_parser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 9001;

mongoos.connect('mongodb://new10:new10new10@ac-ofuzfvh-shard-00-00.7mhqvb6.mongodb.net:27017,ac-ofuzfvh-shard-00-01.7mhqvb6.mongodb.net:27017,ac-ofuzfvh-shard-00-02.7mhqvb6.mongodb.net:27017/new10?ssl=true&replicaSet=atlas-rh873b-shard-0&authSource=admin&retryWrites=true&w=majority',
{
    useNewUrlParser:true ,
    useUnifiedTopology : true
});
const connection = mongoos.connection;
connection.on('error' , (res,req) => {
    console.log("connected  Erorr")
});
connection.on('connected' , () => {
    console.log("connected with cloud")
});

app.use([body_parser.urlencoded({extended :true}),express.json()])
app.use('/prod',prodRouter)

app.listen(PORT,()=>{
    console.log("it is work")
})
module.exports = app;
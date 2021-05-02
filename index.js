const express = require('express');
const mongo = require('mongoose');
mongo.connect("mongodb://gaurang:123@mongo:27017/?authSource=admin"
).then(()=>{
    console.log("Successfully connected to database...")
}).catch((e)=>{
    console.log("error"+ e)
});

const app = express();


app.get('/', (req, res)=>{
    res.send("Process id!!" + process.pid);
})

module.exports = {app}


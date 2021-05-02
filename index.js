const express = require('express');
const mongo = require('mongoose');
const { MONGO_IP, MONGO_USER, MONGO_PASSWORD, MONGO_PORT } = require('./config/configurations');

mongo.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
).then(()=>{
    console.log("Successfully connected to database...")
}).catch((e)=>{
    console.log("error"+ e)
});

const app = express();


app.get('/', (req, res)=>{
    res.send("Process id!!" + process.pid);
})

app.get('data', (req,res)=>{
    mongo.get
})

module.exports = {app}


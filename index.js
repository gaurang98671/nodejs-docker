const express = require('express');
const mongo = require('mongoose');
const { MONGO_IP, MONGO_USER, MONGO_PASSWORD, MONGO_PORT } = require('./config/configurations');
const AuthRouter = require('./router/authRouter');
const router = require('./router/postRoutes');
const app = express();


const retryMongoConnect = ()=>{
const mongo_url = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
mongo.connect(mongo_url
).then(()=>{
    console.log("Successfully connected to database....")
}).catch((e)=>{
    console.log()
    setTimeout(retryMongoConnect, 5000)
});
}

//Connect to mongodb database
retryMongoConnect()

app.use(express.urlencoded({extended : true}));
app.use(express.json()); 
app.use("/api",router)
app.use("/auth", AuthRouter)

module.exports = {app}


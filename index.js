const express = require('express');

const app = express();


app.get('/', (req, res)=>{
    res.send("Process id" + process.pid);
})

module.exports = {app}


var cluster = require('cluster');
const {app} = require('./index');
var numCPUs = require('os').cpus().length

const port = process.env.PORT || 3000;

if(cluster.isMaster)
{
    for(let i=0; i< numCPUs; i++)
    {
        cluster.fork();
    }
}
else
{
    app.listen(port,()=>{
        console.log("Listening on port", port);
    } )
}
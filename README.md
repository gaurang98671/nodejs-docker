# nodejs-docker
 
```
docker build -t node-app-image .
docker run -d --name node-app-container -p 8080:3000 node-app-image
```

## With nodemon
```
docker run -d -v ${pwd}:/app node-app-container -p 8080:3000 node-app-image
```

# nodejs-docker
 
```
docker build -t node-app-image .
docker run -d --name node-app-container -p 8080:3000 node-app-image
```

## With nodemon
> -v allows us to sync files in host machine to files in the container
```
docker run -d -v ${pwd}:/app node-app-container -p 8080:3000 node-app-image
```

## Preventing volumes from changing node_modules
> Adding another -v /app/node_modules prevents syncing any changes to containers node_module's with host's node_moduels
```
docker run -d -v ${pwd}:/app node-app-container -v /app/node_modules -p 8080:3000 node-app-image
```

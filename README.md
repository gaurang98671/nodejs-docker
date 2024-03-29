# Docker image
gaurang98671/nodejs-docker-test9999

https://hub.docker.com/repository/docker/gaurang98671/nodejs-docker-test9999

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

## Preventing containers from changing files in host
> -v is a two way syncing so changing files in container can cause files in our host to change as well.
> 
> To avoid this we add :ro i.e. read only after /app which allows only one way syncing
```
docker run -d -v ${pwd}:/app node-app-container:ro -v /app/node_modules -p 8080:3000 node-app-image
```
## Providing port as an env variable 
```
docker run -d -v ${pwd}:/app node-app-container:ro -v /app/node_modules --env PORT=8080 -p 8080:8080 node-app-image
```

## Providing multiple env variables 
> Add all the env variables in .env file
```
docker run -d -v ${pwd}:/app node-app-container:ro -v /app/node_modules --env-file ./.env -p 8080:8080 node-app-image
```

## Running docker-compose.yaml

```
docker-compose up -d
```

## Running in development mode

```
docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d
```

## Running in production mode

```
docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d
```

## Scaling node app
```
docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d --build --scale node-app-container=2
```

## Docker swarm
```
docker swarm init
docker stack deploy  -c docker-compose.prod.yaml myapp
```



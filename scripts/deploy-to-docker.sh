#!/bin/bash

docker build -t zeepje/whoiswhere .
docker container stop whoiswhere
docker container rm whoiswhere
docker network create whoiswhere
docker run --network=whoiswhere --name whoiswhere-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=whoiswhere -d mysql:5
docker run -p 1337:3000 -d --network="whoiswhere" --name whoiswhere-src zeepje/whoiswhere

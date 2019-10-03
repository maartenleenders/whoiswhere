#!/bin/bash

docker build -t zeepje/whoiswhere .
docker container stop whoiswhere
docker container rm whoiswhere
docker run -p 1337:3000 -d --name whoiswhere --network="whoiswhere" zeepje/whoiswhere

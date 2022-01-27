#1/bin/bash
docker container stop deno-starter-dev
docker container rm deno-starter-dev
docker image rm deno-starter
docker build --tag deno-starter .
docker run --name deno-starter-dev --volume "$(pwd)/src:/app/src" deno-starter:latest

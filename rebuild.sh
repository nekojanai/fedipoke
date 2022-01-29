#!/bin/bash
docker container stop fedipoke-dev
docker container rm fedipoke-dev
docker image rm fedipoke
docker build --tag fedipoke .
docker run --name fedipoke-dev --volume "$(pwd)/src:/app/src" fedipoke:latest

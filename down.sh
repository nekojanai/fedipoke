#!/bin/bash
docker container stop fedipoke-dev
docker container rm fedipoke-dev
docker image rm fedipoke

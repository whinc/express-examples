#!/usr/bin/env bash

NAME="demo-nginx"
if docker container ls | grep "$NAME"; then
    echo stop container "$NAME"
    docker stop "$NAME"
fi

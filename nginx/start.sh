#!/usr/bin/env bash
DIR="$(dirname "$(realpath -s "$0")")"
NAME="demo-nginx"
HOST_PORT=9090

if ! sh ./stop.sh; then
    echo stop container failed
    exit 1
fi

echo test container "$NAME"
if ! sh ./test.sh; then 
    echo test container failed!
    exit 1
fi

echo start container "$NAME"
docker run --rm --name "$NAME" \
    -v $DIR/volumn/nginx.conf:/etc/nginx/nginx.conf \
    -v $DIR/volumn/conf.d:/etc/nginx/conf.d \
    -v $DIR/volumn/logs:/data/logs \
    -v $DIR/volumn/www:/data/www \
    -p $HOST_PORT:80 \
    -d nginx:1.24-alpine

echo nginx start http://localhost:$HOST_PORT
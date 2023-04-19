#!/usr/bin/env bash
DIR="$(dirname "$(realpath -s "$0")")"

docker run --rm \
    -v $DIR/volumn/nginx.conf:/etc/nginx/nginx.conf \
    -v $DIR/volumn/conf.d:/etc/nginx/conf.d \
    -v $DIR/volumn/conf.d/example.com.conf:/etc/nginx/conf.d/example.com.conf \
    -v $DIR/volumn/logs:/data/logs \
    nginx:1.24-alpine \
    nginx -t
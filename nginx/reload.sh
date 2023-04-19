#!/usr/bin/env bash
NAME="demo-nginx"
docker exec "$NAME" nginx -s reload && echo reload OK!!! || echo reload failed!!!
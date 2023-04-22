#!/usr/bin/env bash

# Host 指定请求的虚拟主机
curl -v -H "Host: example.com" localhost:8080

# Origin 指定跨域请求的来源
curl -v -H "Host: example.com" -H "Origin: http://abc.com:3333" localhost:8080
curl -v -H "Host: example.com" -H "Origin: http://example.com:9090" localhost:9090
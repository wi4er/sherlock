#!/bin/sh

version="0.0.1"

docker buildx create --name mbuilder
docker buildx build --push -t wi4er/sherlock:$version --platform linux/arm64,linux/amd64 .


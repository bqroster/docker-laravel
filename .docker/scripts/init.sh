#!/bin/bash

# check that node_modules folder exists

# check that vendor folder exists

set -o allexport
source "$(pwd)/.env"
set +o allexport

source "$(pwd)/.docker/scripts/_dc.sh";

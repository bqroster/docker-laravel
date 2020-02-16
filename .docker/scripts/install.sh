#!/bin/bash

set -o allexport
source "$(pwd)/.docker/scripts/default.sh"
set +o allexport

if [ ! -f $(pwd)/.env ]; then
    echo -e "${red}${ERRTAG} Environment file is not present on directory.${reset}\n";
    exit 0;
fi

set -o allexport
source "$(pwd)/.env"
set +o allexport

# install npm packages
echo -e "${green}Installing node_modules...${reset}";
npm install

# install php packages
echo -e "${green}Installing PHP vendor...${reset}";
docker run --rm -v $(pwd):/app composer install

# generate dev files
echo -e "${green}Run Dev...${reset}";
npm run dev

source "$(pwd)/.docker/scripts/_dc.sh";

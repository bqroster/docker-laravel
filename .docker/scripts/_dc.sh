# starting docker-compose
echo -e "${green}Docker Compose UP...${reset}";
docker-compose up -d

echo -e "${green}Webserver started at http://localhost:${WEBSERVER_PORT:-84}";

mkdir -p server-xms 
cd server-xms
curl -GET http://127.0.0.1:8085/xms/v2/api-docs -o api-docs.json
spectacle api-docs.json
cd ..
mkdir -p server-xms 
#cd server-xms
curl -GET http://127.0.0.1:8080/xms/v2/api-docs -o server-xms/api-docs.json
node bin/spectacle  server-xms/api-docs.json -t server-xms/public -f index.html 
#cd ..
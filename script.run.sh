mkdir -p server-xms 
#cd server-xms
curl -GET https://app.mehery.io/xms/v2/api-docs -o server-xms/api-docs.json
node bin/spectacle  server-xms/api-docs.json -t server-xms/public -f index.html -D
#cd ..
mkdir -p server-xms 
#cd server-xms
curl -GET https://app.mehery.io/xms/v2/api-docs -o server-xms/api-docs.json
node bin/spectacle  server-xms/api-docs.json -t server-xms/public -f index.html 

widdershins --summary server-xms/api-docs.json -o reslate/source/index.md

cd reslate
npm i
npm run build
cd ..
mv reslate/_site server-xms/public2 

#cd ..
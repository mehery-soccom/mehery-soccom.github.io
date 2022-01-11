mkdir -p server-xms 
#cd server-xms
curl -GET https://app.mehery.io/xms/v2/api-docs -o server-xms/api-docs.json
node bin/spectacle  server-xms/api-docs.json -t server-xms/public -f index.html 

widdershins --summary server-xms/api-docs.json -o reslate/source/index.md

cd reslate
npm i
npm run build
cd ..
echo  "deleting... server-xms/public2"
rm -r server-xms/public2
echo  "moving... to server-xms/public2"
mv reslate/_site server-xms/public2
echo  "removing... reslate/source/index.md"
rm reslate/source/index.md

#cd ..
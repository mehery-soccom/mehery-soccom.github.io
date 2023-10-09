mkdir -p server-xms 
#cd server-xms
mkdir -p temp/ssl
echo "HEAD / HTTP/1.0\n Host: api.mehery.xyz\n\n EOT\n" | openssl s_client -prexit -connect demo.mehery.xyz:443 > temp/ssl/cert-xyz.pem
echo "HEAD / HTTP/1.0\n Host: api.mehery.io\n\n EOT\n" | openssl s_client -prexit -connect demo.mehery.io:443 > temp/ssl/cert-io.pem
#curl --cacert ssl/cert.pem https://api.mehery.io/xms/v2/api-docs?group=latest
curl --cacert temp/ssl/cert-xyz.pem https://api.mehery.xyz/xms/v2/api-docs?group=latest -o server-xms/api-docs-raw-xyz.json
curl --cacert temp/ssl/cert-io.pem https://api.mehery.xyz/xms/v2/api-docs?group=latest -o server-xms/api-docs-raw-io.json

cat server-xms/api-docs-raw-xyz.json | jq > server-xms/api-docs-xyz.json
cat server-xms/api-docs-raw-io.json | jq > server-xms/api-docs-io.json

rm server-xms/api-docs-raw-xyz.json
rm server-xms/api-docs-raw-io.json

node bin/spectacle  server-xms/api-docs-xyz.json -t server-xms/public -f index.html 

widdershins --summary server-xms/api-docs.json -o reslate/source/index.md \
--language_tabs 'shell:Shell' 'http:HTTP' 'javascript:JS'  'python:Python' 'ruby:Ruby'  'php:PHP' 'java:Java'  'go:Go' 'csharp:C#'

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
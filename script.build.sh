# Fetching full certificate chains
fetch_certificate() {
    local host=$1
    local out_file=$2
    echo "Fetching full certificate chain for $host..."
    echo | openssl s_client -showcerts -connect "$host:443" 2>/dev/null | tee "temp/ssl/$out_file"
}

# Fetching JSON files with improved handling
fetch_json() {
    local host=$1
    local cert_file=$2
    local out_file=$3
    echo "Fetching JSON from $host..."
    curl --cacert "temp/ssl/$cert_file" "https://$host/xms/v2/api-docs?group=latest" -o "server-xms/$out_file.raw" || {
        echo "Failed to fetch JSON from $host. Exiting." >&2
        exit 1
    }
    jq < "server-xms/$out_file.raw" > "server-xms/$out_file"
    rm "server-xms/$out_file.raw"
}

mkdir -p server-xms 
#cd server-xms
mkdir -p temp/ssl
echo "FETCHING CERTFICATES....START"
#echo "HEAD / HTTP/1.0\n Host: api.mehery.xyz\n\n EOT\n" | openssl s_client -prexit -connect demo.mehery.xyz:443 > temp/ssl/cert-xyz.pem
#echo "HEAD / HTTP/1.0\n Host: api.mehery.io\n\n EOT\n" | openssl s_client -prexit -connect demo.mehery.io:443 > temp/ssl/cert-io.pem
fetch_certificate "demo.mehery.xyz" "cert-xyz.pem"
fetch_certificate "demo.mehery.io" "cert-io.pem"
echo "FETCHING CERTFICATES....DONE"
#curl --cacert ssl/cert.pem https://api.mehery.io/xms/v2/api-docs?group=latest

echo "FETCHING JSON FILES....START"
#curl --cacert temp/ssl/cert-xyz.pem https://api.mehery.xyz/xms/v2/api-docs?group=latest -o server-xms/api-docs-raw-xyz.json
#curl --cacert temp/ssl/cert-io.pem https://api.mehery.xyz/xms/v2/api-docs?group=latest -o server-xms/api-docs-raw-io.json
fetch_json "api.mehery.xyz" "cert-xyz.pem" "api-docs-xyz.json"
fetch_json "api.mehery.io" "cert-io.pem" "api-docs-io.json"
echo "FETCHING JSON FILES....DONE"

#echo "PROCESSING JSON FILES....START"
#cat server-xms/api-docs-raw-xyz.json | jq > server-xms/api-docs-xyz.json
#cat server-xms/api-docs-raw-io.json | jq > server-xms/api-docs-io.json

#rm server-xms/api-docs-raw-xyz.json
#rm server-xms/api-docs-raw-io.json
#echo "PROCESSING JSON FILES....DONE"

echo "CREATING DOCS ..... START"
echo "CREATING DOCS ..... spectacle... -> HTML"
node bin/spectacle  server-xms/api-docs-xyz.json -t server-xms/public -f index.html 

echo "CREATING DOCS ..... widdershins... -> MD"
widdershins --summary server-xms/api-docs-xyz.json -o reslate/source/index.md \
--language_tabs 'shell:Shell' 'http:HTTP' 'javascript:JS'  'python:Python' 'ruby:Ruby'  'php:PHP' 'java:Java'  'go:Go' 'csharp:C#'

echo "CREATING DOCS ..... reslate... -> MD"
cd reslate
npm i
npm run build2
cd ..
echo "CREATING DOCS ..... DONE"

echo "CLEANING..... start"
echo  "deleting... server-xms/public2"
rm -r server-xms/public2
echo  "moving... to server-xms/public2"
mv reslate/_site server-xms/public2
echo  "removing... reslate/source/index.md"
rm reslate/source/index.md
echo "CLEANING..... done"
#cd ..
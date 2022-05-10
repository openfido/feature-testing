

curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get -q -y install nodejs > /dev/null


node hello.js $OPENFIDO_INPUT || error

cd $OPENFIDO_INPUT

wget --input-file=curls.txt

cd /tmp/gitrepo
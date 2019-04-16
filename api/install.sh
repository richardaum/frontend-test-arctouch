#!/bin/sh

if [ ! -f bin/composer.phar ]; then
    ./scripts/install-composer.sh
fi

cd src
COMPOSER=../composer.json php ../bin/composer.phar install
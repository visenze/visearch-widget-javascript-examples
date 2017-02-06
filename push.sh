#!/usr/bin/env bash

git add -A
echo "---------Staging all the changes"

#git reset HEAD ./src/test/javascript/package.json
##git reset HEAD ./push-develop.sh
#git reset HEAD ./src/main/resources/conf/application.develop.properties
#echo "---------unstaging some changes"


git commit -m "$*"
echo "-----------commit msg: $*"

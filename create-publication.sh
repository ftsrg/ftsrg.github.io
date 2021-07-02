#!/bin/bash

# usage: ./create-publication.sh '<filename>' '<journaltitle>' <year>

DIR=src/content/publications

# checking args
if [ $# != 3 ]; then
    echo 'Error! Usage: ./create-post.sh "<filename>" "<journaltitle>" <year>'
    exit -1
fi

# creating variables
fname=$1
journaltitle=$2
year=$3
escapedtitle=`echo $fname | tr '[:upper:]' '[:lower:]' | sed -e 's/á/a/g;s/é/e/g;s/í/i/g;s/ó/o/g;s/ö/o/g;s/ő/o/g;s/ú/u/g;s/ü/u/g;s/ű/u/g;s/ /-/g'`
filename=$escapedtitle'.md'
filepath=$DIR/$filename

# creating project template
touch $filepath
echo '---' >> $filepath
echo 'layout: publication' >> $filepath
echo 'journalTitle: "'$journaltitle'"' >> $filepath
echo 'year: '$year >> $filepath
echo 'title: "<full title here>"' >> $filepath
echo 'url: ""' >> $filepath
echo 'featuredImage: null' >> $filepath
echo '---' >> $filepath

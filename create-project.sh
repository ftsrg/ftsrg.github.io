#!/bin/bash

# usage: ./create-project.sh '<title>'

DIR=src/content/projects

# checking args
if [ $# != 1 ]; then
    echo 'Error! Usage: ./create-post.sh "<title>"'
    exit -1
fi

# creating variables
title=$1
escapedtitle=`echo $title | tr '[:upper:]' '[:lower:]' | sed -e 's/á/a/g;s/é/e/g;s/í/i/g;s/ó/o/g;s/ö/o/g;s/ő/o/g;s/ú/u/g;s/ü/u/g;s/ű/u/g;s/ /-/g'`
filename=$escapedtitle'.md'
filepath=$DIR/$filename

# creating project template
touch $filepath
echo '---' >> $filepath
echo 'layout: project' >> $filepath
echo 'title: "'$title'"' >> $filepath
echo 'subtitle: ""' >> $filepath
echo 'url: ""' >> $filepath
echo 'featuredImage: null' >> $filepath
echo '---' >> $filepath

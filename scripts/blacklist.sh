#!/bin/bash

BLACKLIST="/home/tor2web/lists/blocklist_hashed.txt"

HASH=`echo -e "$1\c" | md5sum | sed 's/\s.*$//'`

if [ -n "$1" ]; then
  echo "--------------------"
  echo "URL: $1"
  echo "HASH: $HASH"
  echo "--------------------"
  echo "Hash will be stored in '$BLACKLIST'"
  echo -e $HASH >> $BLACKLIST
else
  echo ">> I need an address <<"
  echo "\$ $0 duskgytldkxiuqc6.onion"
fi

#!/bin/bash

#データの保存先のディレクトリ
dirname="/home/vagrant/workspace/itunes-topsong-rss"
mkdir -p $dirname

#保存先となるファイル
filename="${dirname}/hourly-topsong-`date +'%Y%m%d%H%M'`.xml"
echo "save to $filename"

#itunesのランキングのデータを保存
curl -s -o $filename -H "User-Agent: CrawlBot; your@mail" https://itunes.apple.com/jp/rss/topsongs/limit=10/xml
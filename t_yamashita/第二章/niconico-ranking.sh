#!/bin/bash

#データの保存先のディレクトリ
dirname="/home/vagrant/workspace/niconico-ranking-rss"
mkdir -p $dirname 

#保存先となるファイル
filename="${dirname}/hourly-ranking-`date +'%Y%m%d%H%M'`.xml"
echo "save to $filename"

#ニコニコ動画の毎時ランキングのデータを保存
curl -s -o $filename -H "User-Agent: CrawlBot; your@mail" https://www.nicovideo.jp/ranking/fav/hourly/all?rss=2.0&lang=ja-jp



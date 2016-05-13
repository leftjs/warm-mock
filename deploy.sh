#!/usr/bin/env bash
export NODE_ENV=production PORT=7777
git reset --hard
git pull origin HEAD
npm install
gulp yaml
pm2 stop warm-mock -f
pm2 start ./bin/www -n warm-mock
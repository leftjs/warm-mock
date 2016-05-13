#!/usr/bin/env bash
export NODE_ENV=production
git reset --hard
git pull origin HEAD
npm install
gulp yaml
pm2 stop warm-mock -f
pm2 start ./app.js -n warm-mock
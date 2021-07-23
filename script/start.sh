#!/bin/bash
echo "#######"
echo "# NPM #"
echo "#######"
npm update
npm install
npm run migration
npm run build
npm run dev

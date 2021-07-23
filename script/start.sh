#!/bin/bash
echo "#######"
echo "# NPM #"
echo "#######"
npm update
npm install
npm audit fix
npm run build
npm run migration
npm run test

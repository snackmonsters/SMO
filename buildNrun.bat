@echo off
title buildNrun

echo [build]
cd ./test/frontend

echo [npm install]
call npm install

echo [npm run build]
call npm run build

echo [run]
cd ../backend

echo [npm install]
call npm install

echo [npm start]
call npm start
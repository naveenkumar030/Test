@echo off
title Assessment Platform
echo ==============================================
echo Starting Assessment Platform Development Server
echo ==============================================
echo Opening browser at http://localhost:5173 ...
start "" http://localhost:5173
echo.
npm run dev
pause

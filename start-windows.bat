@echo off
echo ========================================
echo   Vedrithm Frontend - Quick Start
echo ========================================
echo.

echo [1/2] Installing npm packages...
call npm install
if %errorlevel% neq 0 (
  echo ERROR: npm install failed. Make sure Node.js 18+ is installed.
  pause
  exit /b 1
)

echo.
echo [2/2] Starting Angular dev server...
echo    Open: http://localhost:4200
echo.
call npm start

@echo off
cd /d "%~dp0"
echo.
echo Desplegando tu portafolio en Vercel...
echo.
call npx vercel --scope gabriela23456s-projects
echo.
pause

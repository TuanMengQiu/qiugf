@echo off
setlocal enabledelayedexpansion
for %%a in (icon*.png) do (
set "old=%%~na"
set "new=!old:icon=!"
ren "%%a" "!new!%%~xa"
)
echo 重命名完成
pause
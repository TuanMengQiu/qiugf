@echo off
chcp 65001 >nul
echo ======================================
echo 正在将当前目录全部文件推送到Github仓库
echo 仓库地址：https://github.com/TuanMengQiu/-.git
echo ======================================

:: 初始化git仓库
git init

:: 设置远程仓库地址
git remote remove origin 2>nul
git remote add origin https://github.com/TuanMengQiu/-.git

:: 添加全部文件
git add .

:: 提交
git commit -m "auto upload from bat script"

:: 推送 main 分支，如果你的仓库默认分支是master就改成master
git push -f origin main

echo.
echo 执行完成，请检查上面输出有没有报错！
pause
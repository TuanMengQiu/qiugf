### 变身代码生成器
方法1
> [!TIP|style:flat]
>1. 下载安装[PyCharm](https://www.jetbrains.com/pycharm/download/?section=windows)
>2. 安装[Python3.11](https://www.python.org/)
>3. 配置[Python3环境变量](https://blog.csdn.net/l15668952150/article/details/124571667)
>4. 运行代码复制粘贴到迷你地图的脚本选项里,聊天框输入model模型id 即可使用

方法2
> [!TIP|style:flat]
>1. 使用[在线Python编译器](https://c.runoob.com/compile/9/)
>2. 运行代码复制粘贴到迷你地图的脚本选项里,聊天框输入model模型id 即可使用


```python
#团梦秋制作禁止盗取代码，使用代码请勿删除此注释
print("local function Game(event)")
for n in range(1,1001):#这里输入1-多少可以变身默认是1-1000
    print('if event.content == '+'"model'+str(n)+'"'+'then')
    print('Chat: sendSystemMsg("#cAAFFFF设#cAAEEFF置#cAADDFF外#cAACCFF观#cAABBFF为#R'+''+str(n)+'")')
    print("Actor:changeCustomModel(event.eventobjid,[[skin_"+str(n)+"]])")
    print("end")
print("end")
print("ScriptSupportEvent:registerEvent([=[Player.InputContent]=], Game)")
```



### 快速输入
一、安装
> [!TIP|style:flat]
>1. 下载安装[PyCharm](https://www.jetbrains.com/pycharm/download/?section=windows)
>2. 安装[Python3.11](https://www.python.org/)
>3. 配置[Python3环境变量](https://blog.csdn.net/l15668952150/article/details/124571667)
>4. 安装运行库，使用win+R打开运行输入cmd回车，输入以下安装命令
>5. [pip3 install keyboard]()
>6. [pip3 install pyautogui]()
>7. [pip3 install openpyxl]()
>8. [pip3 install plyer]()
>9. 回车进行安装
>10. 下载专用[地图ID.xlsx](https://qiugf.cn/kfz/地图ID.xlsx)

二、使用
> [!TIP|style:flat]
>1. 点击右上角的三角运行按钮
>2. 进入迷你世界点击(沙盒工坊)把鼠标放在搜索栏上不要移动
>3. 按一下键盘的Alt键即可使用
>4. 地图ID.xlsx里面是存放的地图数据，玩家可自行修改 

```python
import keyboard
import time
import pyautogui
import openpyxl
from plyer import notification
#团梦秋制作
#作者QQ:3085967892
# 免责声明：此代码仅用于快速输入地图名字、ID、迷你号，请勿用于其它用途

# 打开xlsx文件
workbook = openpyxl.load_workbook('地图ID.xlsx')

# 获取工作簿中所有工作表的名称
worksheet_names = workbook.sheetnames
for worksheet_name in worksheet_names:
    # 选择要操作的工作表
    worksheet = workbook[worksheet_name]

# 将每一个值都转换成字符串，并跳过值为 None 的单元格
text_list = [str(row[0]) for row in worksheet.iter_rows(min_row=2, min_col=2, max_col=2, values_only=True) if row[0] is not None and "迷你号或地图id" not in str(row[0])]
mapname = [str(row[0]) for row in worksheet.iter_rows(min_row=2, min_col=1, max_col=1, values_only=True) if row[0] is not None and "地图名称" not in str(row[0])]

current_index = 0


def on_alt_press():
    global current_index
    global mapnametext  # 定义全局变量

    # 等待一段时间，确保焦点在需要输入的地方
    time.sleep(0.2)

    if current_index < len(text_list):
        text = text_list[current_index]
        if current_index < len(mapname):
            mapnametext = mapname[current_index]
            # 模拟鼠标左键点击
            pyautogui.click()
            # 删除前面的文本
            for _ in range(len(text)):
                keyboard.press_and_release('backspace')
                keyboard.press_and_release('backspace')
                keyboard.press_and_release('backspace')

            # 输入新文本
            keyboard.write(text)
            keyboard.press_and_release('enter')
            current_index += 1

    # 在函数结尾处调用 notification.notify() 函数
    title = "当前地图名称"
    notification.notify(title=title, message=mapnametext, app_name="地图输入", timeout=10)


# 注册按下 Alt 键位时触发的事件
keyboard.add_hotkey('ALT', on_alt_press)

# 保持程序运行
keyboard.wait()
# 关闭工作簿
workbook.close()

```

[点击下载一件下载整合包(源代码)](https://qiugf.cn/kfz/快速输入.zip)
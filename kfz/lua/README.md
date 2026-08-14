### 区域复制
> [!NOTE|style:flat]
> 1. 解压压缩包
> 2. 将复制脚本脚本加入到地图的脚本选项里，粘贴同理
> 3. 设置元件ID
> 4. 转换玩法生存即可使用
> <h3>团梦秋自制脚本 迷你号：636968783 QQ：3085967892 请勿盗取脚本</h3>
>
> [点击下载脚本文件](https://qiugf.cn/kfz/upload/ysb/区域复制脚本1.0.zip)



### 检测方块
> [!TIP|style:flat]
> 1. 脚本加入到地图的脚本选项里
> 2. 转换玩法生存即可使用

```lua
--玩家移动自动检测附近方块
local BlockId = 801--被检测方块ID
local Distance = 5--检测距离

--玩家移动
Player_Move = function(param)
  local playerid = param.eventobjid
  local ret, x, y, z = Actor:findNearestBlock
  (playerid, BlockId, Distance)
  local str = "发现方块，坐标：X="..
  x.."；Y="..y.."；Z="..z
  Chat:sendChat(str)
end

--监听事件
--玩家移动时
ScriptSupportEvent:registerEvent(
[=[Player.MoveOneBlockSize]=], Player_Move)

```


### 道具附魔
> [!TIP|style:flat]
> 1. 脚本加入到地图的脚本选项里
> 2. 转换玩法生存即可使用

```lua
--团梦秋自制脚本 迷你号：636968783 QQ：3085967892 请勿删除此注释 删除此注释必究
function fm(e)
--武器附魔
Actor:addEnchant(e.eventobjid, 5, 5, 5)
Actor:addEnchant(e.eventobjid, 5, 6, 5)
Actor:addEnchant(e.eventobjid, 5, 10, 5)
Actor:addEnchant(e.eventobjid, 5, 11, 5)
Actor:addEnchant(e.eventobjid, 5, 15, 5)

--装备附魔
Actor:addEnchant(e.eventobjid, 5, 15, 5)
Actor:addEnchant(e.eventobjid, 5, 16, 5)
Actor:addEnchant(e.eventobjid, 5, 17, 5)
Actor:addEnchant(e.eventobjid, 5, 18, 5)
Actor:addEnchant(e.eventobjid, 5, 19, 5)

--工具附魔
Actor:addEnchant(e.eventobjid, 5, 10, 5)
Actor:addEnchant(e.eventobjid, 5, 11, 5)
Actor:addEnchant(e.eventobjid, 5, 15, 5)
Actor:addEnchant(e.eventobjid, 5, 26, 3)
Actor:addEnchant(e.eventobjid, 5, 25, 5)

--弓箭附魔
Actor:addEnchant(e.eventobjid, 5, 10, 5)
Actor:addEnchant(e.eventobjid, 5, 13, 5)
Actor:addEnchant(e.eventobjid, 5, 14, 1)
Actor:addEnchant(e.eventobjid, 5, 15, 5)
Actor:addEnchant(e.eventobjid, 5, 27, 1)

--披风附魔
Actor:addEnchant(e.eventobjid, 5, 28, 1)

end
ScriptSupportEvent:registerEvent([=[Player.EquipChange]=],fm)--装备栏变化
ScriptSupportEvent:registerEvent([=[Player.EquipOn]=],fm)--穿上装备eventobjid, toobjid, itemid, itemnum
ScriptSupportEvent:registerEvent([=[Player.EquipOff]=],fm)--脱下装备eventobjid, toobjid, itemid, itemnum
ScriptSupportEvent:registerEvent([=[Player.AddItem]=],fm)--新增道具 eventobjid, toobjid, itemid, itemnum 
ScriptSupportEvent:registerEvent([=[Player.ConsumeItem]=],fm)--消耗道具 eventobjid, toobjid, itemid, itemnum 
ScriptSupportEvent:registerEvent([=[Player.DiscardItem]=],fm)--丢弃道具 eventobjid, toobjid, itemid, itemnum 
ScriptSupportEvent:registerEvent([=[Item.Disappear]=],fm)--道具消失 eventobjid, toobjid, itemid, itemnum 
ScriptSupportEvent:registerEvent([=[Item.Pickup]=],fm)--道具被拾取 eventobjid, toobjid, itemid, itemnum 
ScriptSupportEvent:registerEvent([=[Player.UseItem]=],fm)--玩家使用道具 eventobjid, toobjid, itemid, itemnum 
```






### 建筑生成
> [!TIP|style:flat]
> 1. 脚本加入到地图的脚本选项里
> 2. 转换玩法生存即可使用
>
>
> ```xmind preview
> ./upload/xmind/建筑生成思维导图.xmind
> ```
>#### 选层电梯
>
>[点击下载脚本](https://qiugf.cn/kfz/upload/lua/选层电梯.lua)
>
>#### 现代别墅1
>
>[点击下载脚本](https://qiugf.cn/kfz/upload/lua/现代别墅1.lua)
>
>#### 现代别墅2
>
>[点击下载脚本](https://qiugf.cn/kfz/upload/lua/现代别墅2.lua)
>
>#### 菜菜玉桂狗
>
>[点击下载脚本](https://qiugf.cn/kfz/upload/lua/菜菜玉桂狗.lua)
>
>#### 菜菜古风建筑
>
>[点击下载脚本](https://qiugf.cn/kfz/upload/lua/菜菜古风建筑.lua)
>
>#### 沐时粉色大树
>
>[点击下载脚本](https://qiugf.cn/kfz/upload/lua/沐时粉色大树.lua)
>
>#### 凉曦玉桂狗房子
>
>[点击下载脚本](https://qiugf.cn/kfz/upload/lua/凉曦玉桂狗房子.lua)
>
>#### 倾城小星星电路音乐
>
>[点击下载脚本](https://qiugf.cn/kfz/upload/lua/倾城小星星电路音乐.lua)







### 电路脚本
> [!TIP|style:flat]
> 1. 脚本加入到地图的脚本选项里
> 2. 转换玩法生存即可使用


```lua
--欢迎使用电路脚本，脚本于1.22.0版本迷你世界
--团梦秋自制脚本 迷你号：636968783 QQ：3085967892 请勿删除此注释 删除此注释必究
local function dianlu(event)

s = 1 --道具数量<默认为1>


local result,successNum=Backpack:addItem(event.eventobjid,701,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,706,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,1009,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,415,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,702,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,704,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,1033,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,707,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,711,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,712,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,713,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,1183,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,715,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,716,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,717,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,718,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,719,s)
--团梦秋制作迷你号636968783>
local result,successNum=Backpack:addItem(event.eventobjid,724,s)
end
ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.EnterGame]=], dianlu)
```





### 御剑飞行
> [!TIP|style:flat]
> 1. 脚本加入到地图里面的可穿戴装备里的脚本选项里即可
> 2. 转换玩法生存穿戴装备后即可使用御剑飞行
>
> ```xmind preview
> ./upload/xmind/御剑飞行思维导图.xmind
> ```
```lua
--团梦秋自制脚本 迷你号：636968783 QQ：3085967892 请勿删除此注释 删除此注释必究
function anxia(event) 
Player:changPlayerMoveType(event.eventobjid,1)
Player:changeViewMode(event.eventobjid,3,false)
Player:setMobileVibrate(event.eventobjid, 10, 255)
end
ScriptSupportEvent:registerEvent([=[Player.EquipOn]=], anxia)

function anxia2(event) 
Player:changPlayerMoveType(event.eventobjid,2)
Player:changeViewMode(event.eventobjid,0,false)
end
ScriptSupportEvent:registerEvent([=[Player.EquipOff]=], anxia2)
```


### 防G脚本
> [!TIP|style:flat]
> 1. 脚本加入到地图的脚本选项里
> 2. 转换玩法生存即可使用
```lua
--防G脚本团梦秋自制0.5，禁止删除此条注释，版权归梦秋636968783所有
--[[两个--代表关闭，预设关闭了黑龙，可以手动删除--字符即可开启]]--
local function huoqudaoju(event)
    Player:removeBackpackItem(event.eventobjid,1,999999999)--地心基石
    Player:removeBackpackItem(event.eventobjid,960,999999999)--基石-混凝土
    Player:removeBackpackItem(event.eventobjid,961,999999999)--基石-裂土
    Player:removeBackpackItem(event.eventobjid,962,999999999)--白色基石
    Player:removeBackpackItem(event.eventobjid,963,999999999)--基石-坚冰
    Player:removeBackpackItem(event.eventobjid,964,999999999)--基石-钢板
    Player:removeBackpackItem(event.eventobjid,20026,999999999)--白色基石-碎片
    Player:removeBackpackItem(event.eventobjid,140,999999999)--生命石座
    Player:removeBackpackItem(event.eventobjid,141,999999999)--勇气石座
    Player:removeBackpackItem(event.eventobjid,142,999999999)--智慧石座
    --Player:removeBackpackItem(event.eventobjid,1059,999999999)--巨人核心
    Player:removeBackpackItem(event.eventobjid,1000,999999999)--方块复制器
    Player:removeBackpackItem(event.eventobjid,10500,999999999)--地形编辑器
    Player:removeBackpackItem(event.eventobjid,1138,999999999)--模型工作台
    Player:removeBackpackItem(event.eventobjid,1142,999999999)--道具模型工作台
    Player:removeBackpackItem(event.eventobjid,901,999999999)--野人图腾
    Player:removeBackpackItem(event.eventobjid,902,999999999)--野萌宝图腾
    Player:removeBackpackItem(event.eventobjid,903,999999999)--野人猎手图腾
    Player:removeBackpackItem(event.eventobjid,904,999999999)--蜘蛛图腾
    Player:removeBackpackItem(event.eventobjid,906,999999999)--爆爆蛋图腾
    Player:removeBackpackItem(event.eventobjid,908,999999999)--熔岩巨人图腾
    Player:removeBackpackItem(event.eventobjid,909,999999999)--硫磺弓手图腾
    Player:removeBackpackItem(event.eventobjid,910,999999999)--鸡图腾
    Player:removeBackpackItem(event.eventobjid,911,999999999)--牛图腾
    Player:removeBackpackItem(event.eventobjid,912,999999999)--猪图腾
    Player:removeBackpackItem(event.eventobjid,913,999999999)--羊图腾
    Player:removeBackpackItem(event.eventobjid,915,999999999)--狼图腾
    Player:removeBackpackItem(event.eventobjid,917,999999999)--地心人图腾
    Player:removeBackpackItem(event.eventobjid,918,999999999)--远古黑龙图腾
    --Player:removeBackpackItem(event.eventobjid,13502,999999999)--远古黑龙
    Player:removeBackpackItem(event.eventobjid,13503,999999999)--熔岩黑龙
    Player:removeBackpackItem(event.eventobjid,13504,999999999)--混乱黑龙
    Player:removeBackpackItem(event.eventobjid,1002,999999999)--复制方块2
    Player:removeBackpackItem(event.eventobjid,3,999999999)--静态水
    Player:removeBackpackItem(event.eventobjid,4,999999999)--动态水
    Player:removeBackpackItem(event.eventobjid,5,999999999)--静态岩浆
    Player:removeBackpackItem(event.eventobjid,6,999999999)--动态岩浆
    Player:removeBackpackItem(event.eventobjid,2,999999999)--功能方块
    Player:removeBackpackItem(event.eventobjid,11,999999999)--静态蜂蜜
    Player:removeBackpackItem(event.eventobjid,12,999999999)--蜂蜜
    Player:removeBackpackItem(event.eventobjid,1150,999999999)--生物模型方块
    Player:removeBackpackItem(event.eventobjid,1151,999999999)--自定义模型制作器
    Player:removeBackpackItem(event.eventobjid,1999,999999999)--自定义模型(方块)
    Player:removeBackpackItem(event.eventobjid,2000,999999999)--微缩模型
    Player:removeBackpackItem(event.eventobjid,13100,999999999)--生物模型
    Player:removeBackpackItem(event.eventobjid,1082,999999999)--车身方块(测试)
    Player:removeBackpackItem(event.eventobjid,1086,999999999)--车间(测试)
    --Player:removeBackpackItem(event.eventobjid,1085,999999999)--机械车间
    Player:removeBackpackItem(event.eventobjid,13804,999999999)--炸药车
    Player:removeBackpackItem(event.eventobjid,15531,999999999)--车身方块
    --Player:removeBackpackItem(event.eventobjid,15532,999999999)--车轮
    --Player:removeBackpackItem(event.eventobjid,15536,999999999)--右前车轮
    --Player:removeBackpackItem(event.eventobjid,15537,999999999)--左后车轮
    --Player:removeBackpackItem(event.eventobjid,11538,999999999)--右后车轮
    Player:removeBackpackItem(event.eventobjid,1088,999999999)--引擎(测试)
    Player:removeBackpackItem(event.eventobjid,1156,999999999)--转轴方块(测试)
    Player:removeBackpackItem(event.eventobjid,1157,999999999)--开关(测试)
    Player:removeBackpackItem(event.eventobjid,878,999999999)--沙发(测试)
    Player:removeBackpackItem(event.eventobjid,1153,999999999)--标记器(-)(测试)
    Player:removeBackpackItem(event.eventobjid,1154,999999999)--标记器(+)(测试)
    Player:removeBackpackItem(event.eventobjid,1155,999999999)--滑动方块(测试)
    Player:removeBackpackItem(event.eventobjid,11551,999999999)--坏方块
    Player:removeBackpackItem(event.eventobjid,11552,999999999)--放置方块
    Player:removeBackpackItem(event.eventobjid,11553,999999999)--替换方块
    Player:removeBackpackItem(event.eventobjid,11554,999999999)--攻击
    Player:removeBackpackItem(event.eventobjid,11555,999999999)--击飞
    Player:removeBackpackItem(event.eventobjid,11556,999999999)--召唤
    Player:removeBackpackItem(event.eventobjid,11557,999999999)--加状态
    Player:removeBackpackItem(event.eventobjid,11558,999999999)--发射投掷物
    Player:removeBackpackItem(event.eventobjid,11559,999999999)--治疗
    Player:removeBackpackItem(event.eventobjid,11560,999999999)--破坏方块(投掷)
    Player:removeBackpackItem(event.eventobjid,11561,999999999)--替换方块(投掷)
    Player:removeBackpackItem(event.eventobjid,11562,999999999)--放置方块(投掷)
    Player:removeBackpackItem(event.eventobjid,11563,999999999)--攻击(投掷)
    Player:removeBackpackItem(event.eventobjid,11564,999999999)--击飞(投掷)
    Player:removeBackpackItem(event.eventobjid,11565,999999999)--召唤(投掷)
    Player:removeBackpackItem(event.eventobjid,11566,999999999)--加状态(投掷)
    Player:removeBackpackItem(event.eventobjid,11567,999999999)--发射投掷物(投掷)
    Player:removeBackpackItem(event.eventobjid,11568,999999999)--治疗(投掷)
    Player:removeBackpackItem(event.eventobjid,15054,999999999)--投掷物-黑龙火球
    Player:removeBackpackItem(event.eventobjid,15055,999999999)--投掷物-黑龙熔岩石柱
    Player:removeBackpackItem(event.eventobjid,15056,999999999)--投掷物-黑龙熔岩球
    Player:removeBackpackItem(event.eventobjid,15057,999999999)--投掷物-黑龙混乱球
    Player:removeBackpackItem(event.eventobjid,15058,999999999)--投掷物-小外星人A
    Player:removeBackpackItem(event.eventobjid,15059,999999999)--投掷物-小外星人B
    Player:removeBackpackItem(event.eventobjid,15060,999999999)--投掷物-小外星人C
    Player:removeBackpackItem(event.eventobjid,15061,999999999)--投掷物-萌眼叮叮
    Player:removeBackpackItem(event.eventobjid,15062,999999999)--投掷物-萌眼咚咚
    Player:removeBackpackItem(event.eventobjid,15063,999999999)--投掷物-萌眼当当
    Player:removeBackpackItem(event.eventobjid,15064,999999999)--投掷物-萌眼叮咚
    Player:removeBackpackItem(event.eventobjid,15065,999999999)--投掷物-萌眼叮当
    Player:removeBackpackItem(event.eventobjid,15066,999999999)--投掷物-萌眼咚当
    Player:removeBackpackItem(event.eventobjid,15067,999999999)--投掷物-萌眼咻咻
    Player:removeBackpackItem(event.eventobjid,15068,999999999)--投掷物-混乱弓手
    Player:removeBackpackItem(event.eventobjid,15069,999999999)--投掷物-远程守卫
    Player:removeBackpackItem(event.eventobjid,15070,999999999)--投掷物-远程守卫
    Player:removeBackpackItem(event.eventobjid,15071,999999999)--投掷物-远程守卫
    Player:removeBackpackItem(event.eventobjid,15505,999999999)--虚空巨石
    Player:removeBackpackItem(event.eventobjid,15506,999999999)--圆球爆弹
    Player:removeBackpackItem(event.eventobjid,15509,999999999)--萌眼星BOSS-击飞激光
    Player:removeBackpackItem(event.eventobjid,15510,999999999)--萌眼星BOSS-冰冻激光
    Player:removeBackpackItem(event.eventobjid,15511,999999999)--萌眼星BOSS-爆炸激光
    Player:removeBackpackItem(event.eventobjid,15512,999999999)--萌眼星BOSS-岩石海啸
    Player:removeBackpackItem(event.eventobjid,15513,999999999)--萌眼星BOSS-蓝色手臂技能
    Player:removeBackpackItem(event.eventobjid,15514,999999999)--萌眼星BOSS-白色手臂技能
    Player:removeBackpackItem(event.eventobjid,15515,999999999)--萌眼星BOSS精英怪-蓝色投掷
    Player:removeBackpackItem(event.eventobjid,15516,999999999)--萌眼星BOSS精英怪-白色投掷
    Player:removeBackpackItem(event.eventobjid,15517,999999999)--萌眼星BOSS精英怪-蓝色技能
    Player:removeBackpackItem(event.eventobjid,15518,999999999)--萌眼星BOSS精英怪-白色技能
    Player:removeBackpackItem(event.eventobjid,15519,999999999)--黑龙熔岩球
    Player:removeBackpackItem(event.eventobjid,15520,999999999)--黑龙混乱球
    Player:removeBackpackItem(event.eventobjid,15522,999999999)--长方体
    Player:removeBackpackItem(event.eventobjid,15523,999999999)--胶囊体(竖)
    Player:removeBackpackItem(event.eventobjid,15524,999999999)--球体
    Player:removeBackpackItem(event.eventobjid,15525,999999999)--中心长方体
    Player:removeBackpackItem(event.eventobjid,15526,999999999)--胶囊体(横)
    Player:removeBackpackItem(event.eventobjid,15527,999999999)--较能体(直)
    --Player:removeBackpackItem(event.eventobjid,15532,999999999)--车轮
    --Player:removeBackpackItem(event.eventobjid,15533,999999999)--转向轴承
    --Player:removeBackpackItem(event.eventobjid,15534,999999999)--引擎
    --Player:removeBackpackItem(event.eventobjid,15535,999999999)--驾驶座
    --Player:removeBackpackItem(event.eventobjid,15536,999999999)--右前车轮
    --Player:removeBackpackItem(event.eventobjid,15537,999999999)--左后车轮
    --Player:removeBackpackItem(event.eventobjid,15538,999999999)--右后车轮
    Player:removeBackpackItem(event.eventobjid,315,999999999)--珊瑚2
    Player:removeBackpackItem(event.eventobjid,316,999999999)--珊瑚3
    Player:removeBackpackItem(event.eventobjid,317,999999999)--珊瑚4
    Player:removeBackpackItem(event.eventobjid,318,999999999)--珊瑚5
    Player:removeBackpackItem(event.eventobjid,319,999999999)--珊瑚6
    Player:removeBackpackItem(event.eventobjid,320,999999999)--珊瑚7
    Player:removeBackpackItem(event.eventobjid,470,999999999)--问号方块
    Player:removeBackpackItem(event.eventobjid,471,999999999)--问号方块
    Player:removeBackpackItem(event.eventobjid,472,999999999)--问号方块
    Player:removeBackpackItem(event.eventobjid,473,999999999)--问号方块
    Player:removeBackpackItem(event.eventobjid,474,999999999)--问号方块
    Player:removeBackpackItem(event.eventobjid,475,999999999)--问号方块
    Player:removeBackpackItem(event.eventobjid,499,999999999)--虚空宝箱
    Player:removeBackpackItem(event.eventobjid,500,999999999)--火
    Player:removeBackpackItem(event.eventobjid,584,999999999)--毒液
    Player:removeBackpackItem(event.eventobjid,4,999999999)--动态水
    Player:removeBackpackItem(event.eventobjid,727,999999999)--花小楼生日雕塑
    Player:removeBackpackItem(event.eventobjid,728,999999999)--收音机
    Player:removeBackpackItem(event.eventobjid,730,999999999)--沙漠宝箱
    Player:removeBackpackItem(event.eventobjid,733,999999999)--黑龙宝罐
    Player:removeBackpackItem(event.eventobjid,734,999999999)--普通宝箱
    Player:removeBackpackItem(event.eventobjid,735,999999999)--精致宝箱
    Player:removeBackpackItem(event.eventobjid,736,999999999)--黄金宝箱
    Player:removeBackpackItem(event.eventobjid,737,999999999)--简易罐子
    Player:removeBackpackItem(event.eventobjid,738,999999999)--陶土罐子
    Player:removeBackpackItem(event.eventobjid,739,999999999)--彩陶罐子
    Player:removeBackpackItem(event.eventobjid,743,999999999)--熔岩宝罐
    Player:removeBackpackItem(event.eventobjid,744,999999999)--混乱宝罐
    Player:removeBackpackItem(event.eventobjid,747,999999999)--物质罐
    Player:removeBackpackItem(event.eventobjid,780,999999999)--跳舞厅
    Player:removeBackpackItem(event.eventobjid,804,999999999)--奇怪石头
    Player:removeBackpackItem(event.eventobjid,805,999999999)--奇怪石头
    Player:removeBackpackItem(event.eventobjid,806,999999999)--奇怪石砖
    Player:removeBackpackItem(event.eventobjid,807,999999999)--奇怪青石
    Player:removeBackpackItem(event.eventobjid,808,999999999)--奇怪裂石砖
    Player:removeBackpackItem(event.eventobjid,809,999999999)--奇怪花纹石砖
    Player:removeBackpackItem(event.eventobjid,810,999999999)--怪物召集石
    Player:removeBackpackItem(event.eventobjid,745,999999999)--硫磺弓手图腾
    Player:removeBackpackItem(event.eventobjid,818,999999999)--留言板(依附方块)
    Player:removeBackpackItem(event.eventobjid,819,999999999)--黑龙蛋
    Player:removeBackpackItem(event.eventobjid,832,999999999)--神秘箱
    Player:removeBackpackItem(event.eventobjid,841,999999999)--移动的机械臂
    Player:removeBackpackItem(event.eventobjid,843,999999999)--弹簧部件
    Player:removeBackpackItem(event.eventobjid,882,999999999)--喷花烟花(开)
    Player:removeBackpackItem(event.eventobjid,950,999999999)--魔力坐骑蛋
    Player:removeBackpackItem(event.eventobjid,951,999999999)--小飞鼠坐骑蛋
    Player:removeBackpackItem(event.eventobjid,952,999999999)--麒麟坐骑蛋
    Player:removeBackpackItem(event.eventobjid,953,999999999)--陆行鸟坐骑蛋
    Player:removeBackpackItem(event.eventobjid,954,999999999)--小白象坐骑蛋
    Player:removeBackpackItem(event.eventobjid,955,999999999)--小海豹坐骑蛋
    Player:removeBackpackItem(event.eventobjid,956,999999999)--小猫咪坐骑蛋
    Player:removeBackpackItem(event.eventobjid,957,999999999)--小天马坐骑蛋
    Player:removeBackpackItem(event.eventobjid,958,999999999)--小仓鼠坐骑蛋
    Player:removeBackpackItem(event.eventobjid,988,999999999)--补给箱
    Player:removeBackpackItem(event.eventobjid,989,999999999)--补给道具箱
    Player:removeBackpackItem(event.eventobjid,990,999999999)--公共集合点
    Player:removeBackpackItem(event.eventobjid,991,999999999)--1队:红队集合点
    Player:removeBackpackItem(event.eventobjid,992,999999999)--2队:蓝队集合点
    Player:removeBackpackItem(event.eventobjid,993,999999999)--3队:绿队集合点
    Player:removeBackpackItem(event.eventobjid,994,999999999)--4队:黄队集合点
    Player:removeBackpackItem(event.eventobjid,995,999999999)--5队:橙队集合点
    Player:removeBackpackItem(event.eventobjid,996,999999999)--6队:紫队集合点
    Player:removeBackpackItem(event.eventobjid,997,999999999)--闪星方块、
    Player:removeBackpackItem(event.eventobjid,998,999999999)--初始道具补给箱
    Player:removeBackpackItem(event.eventobjid,999,999999999)--再次挑战补给箱
    Player:removeBackpackItem(event.eventobjid,1002,999999999)--方块复制器(亮)
    Player:removeBackpackItem(event.eventobjid,1001,999999999)--空气墙方块
    Player:removeBackpackItem(event.eventobjid,1004,999999999)--标记器(-)
    Player:removeBackpackItem(event.eventobjid,1005,999999999)--标记器(+)
    Player:removeBackpackItem(event.eventobjid,1006,999999999)--标记器3号
    Player:removeBackpackItem(event.eventobjid,1007,999999999)--标记器4号
    Player:removeBackpackItem(event.eventobjid,1013,999999999)--标记器0号
    Player:removeBackpackItem(event.eventobjid,1011,999999999)--前进路径牌-公共
    Player:removeBackpackItem(event.eventobjid,1012,999999999)--停止路径牌
    Player:removeBackpackItem(event.eventobjid,1014,999999999)--十字大炸弹
    Player:removeBackpackItem(event.eventobjid,1015,999999999)--十字小炸弹
    Player:removeBackpackItem(event.eventobjid,1016,999999999)--单向大炸弹
    Player:removeBackpackItem(event.eventobjid,1017,999999999)--单向小炸弹
    Player:removeBackpackItem(event.eventobjid,1018,999999999)--空气墙-不挡子弹
    Player:removeBackpackItem(event.eventobjid,1021,999999999)--闪星奖杯
    Player:removeBackpackItem(event.eventobjid,1026,999999999)--前进路径牌-1队
    Player:removeBackpackItem(event.eventobjid,1027,999999999)--前进路径牌-2队
    Player:removeBackpackItem(event.eventobjid,1028,999999999)--前进路径牌-3队
    Player:removeBackpackItem(event.eventobjid,1029,999999999)--前进路径牌-4队
    Player:removeBackpackItem(event.eventobjid,1030,999999999)--前进路径牌-5队
    Player:removeBackpackItem(event.eventobjid,1031,999999999)--前进路径牌-6队
    Player:removeBackpackItem(event.eventobjid,1035,999999999)--随机补给罐
    Player:removeBackpackItem(event.eventobjid,1036,999999999)--准备点
    Player:removeBackpackItem(event.eventobjid,1043,999999999)--图腾宝藏水晶
    Player:removeBackpackItem(event.eventobjid,1044,999999999)--图腾宝藏水晶(初始祭坛)
    Player:removeBackpackItem(event.eventobjid,1069,999999999)--星星方块
    Player:removeBackpackItem(event.eventobjid,1070,999999999)--荧光方块
    Player:removeBackpackItem(event.eventobjid,1071,999999999)--荧光块
    Player:removeBackpackItem(event.eventobjid,1072,999999999)--公共初始集合点
    Player:removeBackpackItem(event.eventobjid,1073,999999999)--1队:红队初始集合点
    Player:removeBackpackItem(event.eventobjid,1074,999999999)--2队:蓝队初始集合点
    Player:removeBackpackItem(event.eventobjid,1075,999999999)--3队:绿队初始集合点
    Player:removeBackpackItem(event.eventobjid,1076,999999999)--4队:黄队初始集合点
    Player:removeBackpackItem(event.eventobjid,1077,999999999)--5队:橙队初始集合点
    Player:removeBackpackItem(event.eventobjid,1078,999999999)--6队:紫队初始集合点
    Player:removeBackpackItem(event.eventobjid,1079,999999999)--个人集合点
    Player:removeBackpackItem(event.eventobjid,1080,999999999)--刷怪方块
    Player:removeBackpackItem(event.eventobjid,1081,999999999)--空气墙-不挡物理
    Player:removeBackpackItem(event.eventobjid,1400,999999999)--音乐盒
    Player:removeBackpackItem(event.eventobjid,1401,999999999)--太空布景台
    Player:removeBackpackItem(event.eventobjid,1402,999999999)--重力装置
    Player:removeBackpackItem(event.eventobjid,1403,999999999)--天气控制器
    Player:removeBackpackItem(event.eventobjid,1404,999999999)--家园工具台
    Player:removeBackpackItem(event.eventobjid,1405,999999999)--宠物窝
    Player:removeBackpackItem(event.eventobjid,1406,999999999)--简单灶台
    Player:removeBackpackItem(event.eventobjid,1407,999999999)--家园空气墙
    Player:removeBackpackItem(event.eventobjid,1451,999999999)--荣誉架
    Player:removeBackpackItem(event.eventobjid,15501,999999999)--冲锋枪子弹
    Player:removeBackpackItem(event.eventobjid,15502,999999999)--牛仔左轮子弹
    Player:removeBackpackItem(event.eventobjid,15503,999999999)--狙击枪子弹
    Player:removeBackpackItem(event.eventobjid,15504,999999999)--重机枪子弹
    Player:removeBackpackItem(event.eventobjid,15000,999999999)--冲锋枪
    Player:removeBackpackItem(event.eventobjid,15001,999999999)--左轮手枪
    Player:removeBackpackItem(event.eventobjid,15002,999999999)--牛仔左轮
    Player:removeBackpackItem(event.eventobjid,15003,999999999)--子弹
    Player:removeBackpackItem(event.eventobjid,15004,999999999)--狙击枪
    Player:removeBackpackItem(event.eventobjid,15005,999999999)--重机枪
    Player:removeBackpackItem(event.eventobjid,15506,999999999)--散弹枪
    Player:removeBackpackItem(event.eventobjid,15007,999999999)--罐装手雷
    Player:removeBackpackItem(event.eventobjid,15008,999999999)--菠萝手雷
    Player:removeBackpackItem(event.eventobjid,15050,999999999)--投掷物-野人猎手
    Player:removeBackpackItem(event.eventobjid,15051,999999999)--投掷物-硫磺弓手
    Player:removeBackpackItem(event.eventobjid,15052,999999999)--投掷物-小恶魔
    Player:removeBackpackItem(event.eventobjid,15053,999999999)--投掷物野生团子
    Player:removeBackpackItem(event.eventobjid,1800,999999999)--魔龙坐骑蛋
    Player:removeBackpackItem(event.eventobjid,1801,999999999)--月亮坐骑蛋
    Player:removeBackpackItem(event.eventobjid,1802,999999999)--圣夜雪橇坐骑蛋
    Player:removeBackpackItem(event.eventobjid,1803,999999999)--巨鲸坐骑蛋
    Player:removeBackpackItem(event.eventobjid,15053,999999999)--自定义模型(方块)
    Player:removeBackpackItem(event.eventobjid,2000,999999999)--微缩模型
    Player:removeBackpackItem(event.eventobjid,9995,999999999)--微缩组合
    Player:removeBackpackItem(event.eventobjid,9996,999999999)--微缩弓
    Player:removeBackpackItem(event.eventobjid,9997,999999999)--微缩投掷
    Player:removeBackpackItem(event.eventobjid,9998,999999999)--微缩枪械
    Player:removeBackpackItem(event.eventobjid,9999,999999999)--微缩武器
    Player:removeBackpackItem(event.eventobjid,11057,999999999)--拴绳
    Player:removeBackpackItem(event.eventobjid,11063,999999999)--仙云棒
    Player:removeBackpackItem(event.eventobjid,11071,999999999)--自定义视角
    Player:removeBackpackItem(event.eventobjid,11100,999999999)--手持式编辑器
    Player:removeBackpackItem(event.eventobjid,11308,999999999)--地心之光
    Player:removeBackpackItem(event.eventobjid,12226,999999999)--中式头盔
    Player:removeBackpackItem(event.eventobjid,12227,999999999)--中式胸甲
    Player:removeBackpackItem(event.eventobjid,12228,999999999)--中式护腿
    Player:removeBackpackItem(event.eventobjid,12229,999999999)--中式靴子
    Player:removeBackpackItem(event.eventobjid,12230,999999999)--佩刀
    Player:removeBackpackItem(event.eventobjid,12506,999999999)--海葵鱼
    Player:removeBackpackItem(event.eventobjid,12514,999999999)--毒河豚
    Player:removeBackpackItem(event.eventobjid,12533,999999999)--已废弃
    Player:removeBackpackItem(event.eventobjid,13013,999999999)--圣蛋
    Player:removeBackpackItem(event.eventobjid,13014,999999999)--元蛋
    Player:removeBackpackItem(event.eventobjid,13015,999999999)--财神蛋
    Player:removeBackpackItem(event.eventobjid,13016,999999999)--周年蛋
    Player:removeBackpackItem(event.eventobjid,13017,999999999)--六一蛋
    Player:removeBackpackItem(event.eventobjid,13109,999999999)--爆爆蛋
    --[[
    Player:removeBackpackItem(event.eventobjid,13400,999999999)--生物蛋-鸡
    Player:removeBackpackItem(event.eventobjid,13401,999999999)--生物蛋-牛
    Player:removeBackpackItem(event.eventobjid,13402,999999999)--生物蛋-猪
    Player:removeBackpackItem(event.eventobjid,13403,999999999)--生物蛋-羊
    Player:removeBackpackItem(event.eventobjid,13404,999999999)--生物蛋-马
    Player:removeBackpackItem(event.eventobjid,13407,999999999)--生物蛋-狼
    Player:removeBackpackItem(event.eventobjid,13408,999999999)--生物蛋-狗
    Player:removeBackpackItem(event.eventobjid,13409,999999999)--生物蛋-企鹅
    Player:removeBackpackItem(event.eventobjid,13411,999999999)--生物蛋-野生鸵鸟
    Player:removeBackpackItem(event.eventobjid,13412,999999999)--生物蛋-野生冰熊
    Player:removeBackpackItem(event.eventobjid,13413,999999999)--生物蛋-野生速龙
    Player:removeBackpackItem(event.eventobjid,13414,999999999)--生物蛋-野生团子
    Player:removeBackpackItem(event.eventobjid,13421,999999999)--生物蛋-飞鸡
    Player:removeBackpackItem(event.eventobjid,13423,999999999)--生物蛋-战斗鸡
    Player:removeBackpackItem(event.eventobjid,13424,999999999)--生物蛋-尖叫鸡
    Player:removeBackpackItem(event.eventobjid,13426,999999999)--生物蛋-驯服的牛
    Player:removeBackpackItem(event.eventobjid,13427,999999999)--生物蛋-驯服的鸵鸟
    Player:removeBackpackItem(event.eventobjid,13428,999999999)--生物蛋-驯服的冰熊
    Player:removeBackpackItem(event.eventobjid,13429,999999999)--生物蛋-驯服的速龙
    Player:removeBackpackItem(event.eventobjid,13430,999999999)--生物蛋-驯服的炎炎蟹
    Player:removeBackpackItem(event.eventobjid,13431,999999999)--生物蛋-驯服的雀莺
    Player:removeBackpackItem(event.eventobjid,13432,999999999)--生物蛋-驯服的狗
    Player:removeBackpackItem(event.eventobjid,13433,999999999)--生物蛋-驯服的猴子
    Player:removeBackpackItem(event.eventobjid,13434,999999999)--生物蛋-驯服的战斗机
    Player:removeBackpackItem(event.eventobjid,13435,999999999)--生物蛋-驯服的飞鸡
    Player:removeBackpackItem(event.eventobjid,13436,999999999)--生物蛋-驯服的叮叮
    Player:removeBackpackItem(event.eventobjid,13437,999999999)--生物蛋-驯服的咚咚
    Player:removeBackpackItem(event.eventobjid,13438,999999999)--生物蛋-驯服的当当
    Player:removeBackpackItem(event.eventobjid,13439,999999999)--生物蛋-野人伙伴
    Player:removeBackpackItem(event.eventobjid,13400,999999999)--生物蛋-猎人伙伴
    Player:removeBackpackItem(event.eventobjid,13441,999999999)--生物蛋-萌宝伙伴
    Player:removeBackpackItem(event.eventobjid,13442,999999999)--生物蛋-驯服的团子
    Player:removeBackpackItem(event.eventobjid,13505,999999999)--生物蛋-年兽蛋
    Player:removeBackpackItem(event.eventobjid,13508,999999999)--生物蛋-小恶魔蛋
    Player:removeBackpackItem(event.eventobjid,13870,999999999)--生物蛋-野生猴子
    Player:removeBackpackItem(event.eventobjid,13872,999999999)--生物蛋-豹子
    Player:removeBackpackItem(event.eventobjid,13877,999999999)--生物蛋-野人祭祀
    Player:removeBackpackItem(event.eventobjid,13881,999999999)--生物蛋-炎炎蟹
    Player:removeBackpackItem(event.eventobjid,13883,999999999)--生物蛋-雀莺
    ]]--
    Player:removeBackpackItem(event.eventobjid,836,999999999)--物理清除烟花
    Player:removeBackpackItem(event.eventobjid,849,999999999)--禁怪烟花
    Player:removeBackpackItem(event.eventobjid,850,999999999)--星星烟花(小)
    Player:removeBackpackItem(event.eventobjid,851,999999999)--星星烟花(大)
    Player:removeBackpackItem(event.eventobjid,852,999999999)--晴雨烟花
    Player:removeBackpackItem(event.eventobjid,853,999999999)--昼夜烟花
    Player:removeBackpackItem(event.eventobjid,12750,999999999)--开心烟花
    Player:removeBackpackItem(event.eventobjid,12751,999999999)--好运烟花
    Player:removeBackpackItem(event.eventobjid,12752,999999999)--活力烟花
    Player:removeBackpackItem(event.eventobjid,12753,999999999)--生日烟花
    Player:removeBackpackItem(event.eventobjid,12781,999999999)--彩带烟花
    Player:removeBackpackItem(event.eventobjid,12829,999999999)--手持烟花
    --Player:removeBackpackItem(event.eventobjid,12831,999999999)--小星星烟花
    --Player:removeBackpackItem(event.eventobjid,12832,999999999)--大星星烟花
    Player:removeBackpackItem(event.eventobjid,12833,999999999)--晴雨烟花
    --Player:removeBackpackItem(event.eventobjid,12834,999999999)--昼夜烟花
    Player:removeBackpackItem(event.eventobjid,12835,999999999)--禁怪烟花
    Player:removeBackpackItem(event.eventobjid,12836,999999999)--红色新年花
    Player:removeBackpackItem(event.eventobjid,12837,999999999)--紫色新年烟花
    Player:removeBackpackItem(event.eventobjid,12838,999999999)--绿色新年烟花
    Player:removeBackpackItem(event.eventobjid,68319,999999999)--游戏版本过低
    Player:removeBackpackItem(event.eventobjid,1550,999999999)--简约床
    Player:removeBackpackItem(event.eventobjid,1551,999999999)--简约沙发
    Player:removeBackpackItem(event.eventobjid,1552,999999999)--简约书桌
    Player:removeBackpackItem(event.eventobjid,1553,999999999)--简约餐桌
    Player:removeBackpackItem(event.eventobjid,1554,999999999)--简约茶几
    Player:removeBackpackItem(event.eventobjid,1555,999999999)--简约洗手台
    Player:removeBackpackItem(event.eventobjid,1556,999999999)--简约椅子
    Player:removeBackpackItem(event.eventobjid,1557,999999999)--简约马桶
    Player:removeBackpackItem(event.eventobjid,1558,999999999)--简约浴缸
    Player:removeBackpackItem(event.eventobjid,1559,999999999)--简约衣柜
    Player:removeBackpackItem(event.eventobjid,1560,999999999)--简约橱柜
    Player:removeBackpackItem(event.eventobjid,1561,999999999)--简约半格橱柜
    Player:removeBackpackItem(event.eventobjid,1562,999999999)--简约组合柜
    Player:removeBackpackItem(event.eventobjid,1563,999999999)--简约屏风
    Player:removeBackpackItem(event.eventobjid,1564,999999999)--简约立体灯
    Player:removeBackpackItem(event.eventobjid,1565,999999999)--简约吊灯
    Player:removeBackpackItem(event.eventobjid,1566,999999999)--简约壁灯
    Player:removeBackpackItem(event.eventobjid,1567,999999999)--简约门
    Player:removeBackpackItem(event.eventobjid,1568,999999999)--简约窗
    Player:removeBackpackItem(event.eventobjid,1569,999999999)--简约楼梯
    Player:removeBackpackItem(event.eventobjid,1570,999999999)--简约墙砖
    Player:removeBackpackItem(event.eventobjid,1571,999999999)--简约砖
    Player:removeBackpackItem(event.eventobjid,1572,999999999)--简约半砖
    Player:removeBackpackItem(event.eventobjid,1573,999999999)--简约围栏
    Player:removeBackpackItem(event.eventobjid,1574,999999999)--中式床
    Player:removeBackpackItem(event.eventobjid,1575,999999999)--中式沙发
    Player:removeBackpackItem(event.eventobjid,1576,999999999)--中式书桌
    Player:removeBackpackItem(event.eventobjid,1577,999999999)--中式餐桌
    Player:removeBackpackItem(event.eventobjid,1578,999999999)--中式茶几
    Player:removeBackpackItem(event.eventobjid,1579,999999999)--中式洗手台
    Player:removeBackpackItem(event.eventobjid,1580,999999999)--中式椅子
    Player:removeBackpackItem(event.eventobjid,1581,999999999)--中式马桶
    Player:removeBackpackItem(event.eventobjid,1582,999999999)--中式浴缸
    Player:removeBackpackItem(event.eventobjid,1583,999999999)--中式衣橱
    Player:removeBackpackItem(event.eventobjid,1584,999999999)--中式橱柜
    Player:removeBackpackItem(event.eventobjid,1585,999999999)--中式半格橱柜
    Player:removeBackpackItem(event.eventobjid,1586,999999999)--中式组合柜
    Player:removeBackpackItem(event.eventobjid,1587,999999999)--中式屏风
    Player:removeBackpackItem(event.eventobjid,1588,999999999)--中式立体灯
    Player:removeBackpackItem(event.eventobjid,1589,999999999)--中式吊灯
    Player:removeBackpackItem(event.eventobjid,1590,999999999)--中式壁灯
    Player:removeBackpackItem(event.eventobjid,1591,999999999)--中式门
    Player:removeBackpackItem(event.eventobjid,1592,999999999)--中式窗
    Player:removeBackpackItem(event.eventobjid,1593,999999999)--中式楼梯
    Player:removeBackpackItem(event.eventobjid,1594,999999999)--中式墙砖
    Player:removeBackpackItem(event.eventobjid,1595,999999999)--中式砖
    Player:removeBackpackItem(event.eventobjid,1596,999999999)--中式半砖
    Player:removeBackpackItem(event.eventobjid,1597,999999999)--中式围栏
    Player:removeBackpackItem(event.eventobjid,1598,999999999)--现代床
    Player:removeBackpackItem(event.eventobjid,1599,999999999)--现代沙发
    Player:removeBackpackItem(event.eventobjid,1600,999999999)--现代书桌
    Player:removeBackpackItem(event.eventobjid,1601,999999999)--现代餐桌
    Player:removeBackpackItem(event.eventobjid,1602,999999999)--现代茶几
    Player:removeBackpackItem(event.eventobjid,1603,999999999)--现代洗手台
    Player:removeBackpackItem(event.eventobjid,1604,999999999)--现代椅子
    Player:removeBackpackItem(event.eventobjid,1605,999999999)--现代马桶
    Player:removeBackpackItem(event.eventobjid,1606,999999999)--现代浴缸
    Player:removeBackpackItem(event.eventobjid,1607,999999999)--现代衣柜
    Player:removeBackpackItem(event.eventobjid,1608,999999999)--现代橱柜
    Player:removeBackpackItem(event.eventobjid,1609,999999999)--现代半格橱柜
    Player:removeBackpackItem(event.eventobjid,1610,999999999)--现代组合柜
    Player:removeBackpackItem(event.eventobjid,1611,999999999)--现代屏风
    Player:removeBackpackItem(event.eventobjid,1612,999999999)--现代立体灯
    Player:removeBackpackItem(event.eventobjid,1613,999999999)--现代吊灯
    Player:removeBackpackItem(event.eventobjid,1614,999999999)--现代壁灯
    Player:removeBackpackItem(event.eventobjid,1615,999999999)--现代门
    Player:removeBackpackItem(event.eventobjid,1616,999999999)--现代窗
    Player:removeBackpackItem(event.eventobjid,1617,999999999)--现代楼梯
    Player:removeBackpackItem(event.eventobjid,1618,999999999)--现代墙砖
    Player:removeBackpackItem(event.eventobjid,1619,999999999)--现代砖
    Player:removeBackpackItem(event.eventobjid,1620,999999999)--现代半砖
    Player:removeBackpackItem(event.eventobjid,1621,999999999)--现代围栏
    Player:removeBackpackItem(event.eventobjid,1622,999999999)--童话床
    Player:removeBackpackItem(event.eventobjid,1623,999999999)--童话沙发
    Player:removeBackpackItem(event.eventobjid,1624,999999999)--童话书桌
    Player:removeBackpackItem(event.eventobjid,1625,999999999)--童话餐桌
    Player:removeBackpackItem(event.eventobjid,1626,999999999)--童话茶几
    Player:removeBackpackItem(event.eventobjid,1627,999999999)--童话洗手台
    Player:removeBackpackItem(event.eventobjid,1628,999999999)--童话椅子
    Player:removeBackpackItem(event.eventobjid,1629,999999999)--童话马桶
    Player:removeBackpackItem(event.eventobjid,1630,999999999)--童话浴缸
    Player:removeBackpackItem(event.eventobjid,1631,999999999)--童话衣柜
    Player:removeBackpackItem(event.eventobjid,1632,999999999)--童话橱柜
    Player:removeBackpackItem(event.eventobjid,1633,999999999)--童话半格橱柜
    Player:removeBackpackItem(event.eventobjid,1634,999999999)--童话组合柜
    Player:removeBackpackItem(event.eventobjid,1635,999999999)--童话屏风
    Player:removeBackpackItem(event.eventobjid,1636,999999999)--童话立体灯
    Player:removeBackpackItem(event.eventobjid,1637,999999999)--童话吊灯
    Player:removeBackpackItem(event.eventobjid,1638,999999999)--童话壁灯
    Player:removeBackpackItem(event.eventobjid,1639,999999999)--童话门
    Player:removeBackpackItem(event.eventobjid,1640,999999999)--童话窗
    Player:removeBackpackItem(event.eventobjid,1641,999999999)--童话楼梯
    Player:removeBackpackItem(event.eventobjid,1642,999999999)--童话墙砖
    Player:removeBackpackItem(event.eventobjid,1643,999999999)--童话砖
    Player:removeBackpackItem(event.eventobjid,1644,999999999)--童话半砖
    Player:removeBackpackItem(event.eventobjid,1645,999999999)--童话围栏
    Player:removeBackpackItem(event.eventobjid,1646,999999999)--科技床
    Player:removeBackpackItem(event.eventobjid,1647,999999999)--科幻沙发
    Player:removeBackpackItem(event.eventobjid,1648,999999999)--科幻书桌
    Player:removeBackpackItem(event.eventobjid,1649,999999999)--科幻餐桌
    Player:removeBackpackItem(event.eventobjid,1650,999999999)--科幻茶几
    Player:removeBackpackItem(event.eventobjid,1651,999999999)--科幻洗手台
    Player:removeBackpackItem(event.eventobjid,1652,999999999)--科幻椅子
    Player:removeBackpackItem(event.eventobjid,1653,999999999)--科幻马桶
    Player:removeBackpackItem(event.eventobjid,1654,999999999)--科幻浴缸
    Player:removeBackpackItem(event.eventobjid,1655,999999999)--科幻衣橱
    Player:removeBackpackItem(event.eventobjid,1656,999999999)--科幻橱柜
    Player:removeBackpackItem(event.eventobjid,1657,999999999)--科幻半格橱柜
    Player:removeBackpackItem(event.eventobjid,1658,999999999)--科幻组合柜
    Player:removeBackpackItem(event.eventobjid,1659,999999999)--科幻屏风
    Player:removeBackpackItem(event.eventobjid,1660,999999999)--科幻立体灯
    Player:removeBackpackItem(event.eventobjid,1661,999999999)--科幻吊灯
    Player:removeBackpackItem(event.eventobjid,1662,999999999)--科幻壁灯
    Player:removeBackpackItem(event.eventobjid,1663,999999999)--科幻门
    Player:removeBackpackItem(event.eventobjid,1664,999999999)--科幻窗
    Player:removeBackpackItem(event.eventobjid,1665,999999999)--科幻楼梯
    Player:removeBackpackItem(event.eventobjid,1666,999999999)--科幻墙砖
    Player:removeBackpackItem(event.eventobjid,1667,999999999)--科幻砖
    Player:removeBackpackItem(event.eventobjid,1668,999999999)--科幻半砖
    Player:removeBackpackItem(event.eventobjid,1669,999999999)--科幻围栏
    Player:removeBackpackItem(event.eventobjid,1670,999999999)--小松树盆栽
    Player:removeBackpackItem(event.eventobjid,1671,999999999)--葱翠盆栽
    Player:removeBackpackItem(event.eventobjid,1672,999999999)--绒毛地毯
    Player:removeBackpackItem(event.eventobjid,1673,999999999)--山水画
    Player:removeBackpackItem(event.eventobjid,1674,999999999)--抽象画
    Player:removeBackpackItem(event.eventobjid,1675,999999999)--中国结挂饰
    Player:removeBackpackItem(event.eventobjid,1676,999999999)--星球挂饰
    Player:removeBackpackItem(event.eventobjid,1677,999999999)--简单书柜
    Player:removeBackpackItem(event.eventobjid,1678,999999999)--纯白冰箱
    Player:removeBackpackItem(event.eventobjid,1679,999999999)--银灰冰箱
    Player:removeBackpackItem(event.eventobjid,1680,999999999)--酷黑冰箱
    Player:removeBackpackItem(event.eventobjid,1681,999999999)--纯白电饭煲
    Player:removeBackpackItem(event.eventobjid,1682,999999999)--银灰电饭煲
    Player:removeBackpackItem(event.eventobjid,1683,999999999)--酷黑电饭煲
    Player:removeBackpackItem(event.eventobjid,1684,999999999)--纯白烤箱
    Player:removeBackpackItem(event.eventobjid,1685,999999999)--银灰烤箱
    Player:removeBackpackItem(event.eventobjid,1686,999999999)--酷黑烤箱
    Player:removeBackpackItem(event.eventobjid,1687,999999999)--纯白灶台
    Player:removeBackpackItem(event.eventobjid,1688,999999999)--银灰灶台
    Player:removeBackpackItem(event.eventobjid,1689,999999999)--酷黑灶台
    Player:removeBackpackItem(event.eventobjid,1690,999999999)--多肉盆栽
    Player:removeBackpackItem(event.eventobjid,1691,999999999)--欧式床
    Player:removeBackpackItem(event.eventobjid,1692,999999999)--欧式沙发
    Player:removeBackpackItem(event.eventobjid,1693,999999999)--欧式书桌
    Player:removeBackpackItem(event.eventobjid,1694,999999999)--欧式餐桌
    Player:removeBackpackItem(event.eventobjid,1695,999999999)--欧式茶几
    Player:removeBackpackItem(event.eventobjid,1696,999999999)--欧式洗手台
    Player:removeBackpackItem(event.eventobjid,1697,999999999)--欧式椅子
    Player:removeBackpackItem(event.eventobjid,1698,999999999)--欧式马桶
    Player:removeBackpackItem(event.eventobjid,1699,999999999)--欧式浴缸
    Player:removeBackpackItem(event.eventobjid,1700,999999999)--欧式衣橱
    Player:removeBackpackItem(event.eventobjid,1701,999999999)--欧式橱柜
    Player:removeBackpackItem(event.eventobjid,1702,999999999)--欧式半格橱柜
    Player:removeBackpackItem(event.eventobjid,1703,999999999)--欧式组合柜
    Player:removeBackpackItem(event.eventobjid,1704,999999999)--欧式屏风
    Player:removeBackpackItem(event.eventobjid,1705,999999999)--欧式立体灯
    Player:removeBackpackItem(event.eventobjid,1706,999999999)--欧式吊灯
    Player:removeBackpackItem(event.eventobjid,1707,999999999)--欧式壁灯
    Player:removeBackpackItem(event.eventobjid,1708,999999999)--欧式门
    Player:removeBackpackItem(event.eventobjid,1709,999999999)--欧式窗
    Player:removeBackpackItem(event.eventobjid,1711,999999999)--欧式墙砖
    Player:removeBackpackItem(event.eventobjid,1712,999999999)--欧式砖
    Player:removeBackpackItem(event.eventobjid,1713,999999999)--欧式半砖
    Player:removeBackpackItem(event.eventobjid,1714,999999999)--欧式围栏
    Player:removeBackpackItem(event.eventobjid,1715,999999999)--胡杨木
    Player:removeBackpackItem(event.eventobjid,1716,999999999)--胡杨木板
    Player:removeBackpackItem(event.eventobjid,1717,999999999)--胡杨树叶
    Player:removeBackpackItem(event.eventobjid,1718,999999999)--胡杨台阶
    Player:removeBackpackItem(event.eventobjid,1719,999999999)--胡杨楼梯
    Player:removeBackpackItem(event.eventobjid,1720,999999999)--胡杨茶几
    Player:removeBackpackItem(event.eventobjid,1721,999999999)--胡杨凳子
    Player:removeBackpackItem(event.eventobjid,1722,999999999)--西域床
    Player:removeBackpackItem(event.eventobjid,1723,999999999)--西域沙发
    Player:removeBackpackItem(event.eventobjid,1724,999999999)--西域书桌
    Player:removeBackpackItem(event.eventobjid,1725,999999999)--西域餐桌
    Player:removeBackpackItem(event.eventobjid,1726,999999999)--西域茶几
    Player:removeBackpackItem(event.eventobjid,1727,999999999)--西域洗手间
    Player:removeBackpackItem(event.eventobjid,1728,999999999)--西域椅子
    Player:removeBackpackItem(event.eventobjid,1729,999999999)--西域马桶
    Player:removeBackpackItem(event.eventobjid,1730,999999999)--西域浴缸
    Player:removeBackpackItem(event.eventobjid,1731,999999999)--西域衣柜
    Player:removeBackpackItem(event.eventobjid,1732,999999999)--西域橱柜
    Player:removeBackpackItem(event.eventobjid,1733,999999999)--西域半格橱柜
    Player:removeBackpackItem(event.eventobjid,1734,999999999)--西域组合柜
    Player:removeBackpackItem(event.eventobjid,1735,999999999)--西域屏风
    Player:removeBackpackItem(event.eventobjid,1736,999999999)--西域立体灯
    Player:removeBackpackItem(event.eventobjid,1737,999999999)--西域吊灯
    Player:removeBackpackItem(event.eventobjid,1738,999999999)--西域壁灯
    Player:removeBackpackItem(event.eventobjid,1739,999999999)--西域门
    Player:removeBackpackItem(event.eventobjid,1740,999999999)--西域窗
    Player:removeBackpackItem(event.eventobjid,1741,999999999)--西域楼梯
    Player:removeBackpackItem(event.eventobjid,1742,999999999)--西域墙砖
    Player:removeBackpackItem(event.eventobjid,1743,999999999)--西域砖
    Player:removeBackpackItem(event.eventobjid,1744,999999999)--西域半砖
    Player:removeBackpackItem(event.eventobjid,1745,999999999)--西域围栏
    Player:removeBackpackItem(event.eventobjid,1746,999999999)--西域地毯
    Player:removeBackpackItem(event.eventobjid,1747,999999999)--骆驼雕塑
    Player:removeBackpackItem(event.eventobjid,1748,999999999)--敦煌石窟
    Player:removeBackpackItem(event.eventobjid,1749,999999999)--敦煌飞天雕塑
    Player:removeBackpackItem(event.eventobjid,1750,999999999)--莲花壁画
    Player:removeBackpackItem(event.eventobjid,1751,999999999)--飞天女壁画
    Player:removeBackpackItem(event.eventobjid,1752,999999999)--九色鹿王壁画
    local result = Player:changPlayerMoveType(event.eventobjid,MOVETYPE.IDLE)
end
--[[
Game_StaetGame=function()
Game:msgBox("#B已启动防G脚本\n版本号:#R0.5")
end
ScriptSupportEvent:registerEvent([=[Game.Start]=],Game_StaetGame)
]]--
--获取道具监听器
ScriptSupportEvent:registerEvent([=[Player.AddItem]=],huoqudaoju)
--使用道具监听器
ScriptSupportEvent:registerEvent([=[Player.UseItem]=],huoqudaoju)
--快捷栏发生变化监听器
ScriptSupportEvent:registerEvent([=[Player.ShortcutChange]=],huoqudaoju)
--玩家背包栏发生变化监听器
ScriptSupportEvent:registerEvent([=[Player.BackPackChange]=],huoqudaoju)
--按下按键监听器
ScriptSupportEvent:registerEvent([=[Player.InputKeyDown]=],huoqudaoju)
```








### 物品提取器
> [!TIP|style:flat]
> 1. 脚本加入到地图的ui脚本里面
> 2. 更改界面id换成自己的`[[7139883818813972303_12]]`,`[[7139883818813972303]]`，`[[7139883818813972303_10]]` `[[7139883818813972303_13]]`， `[[7139883818813972303_19]]`，`[[7139883818813972303_20]]`，`[[7139883818813972303_25]]` `[[7139883818813972303_38]]`，`[[7139883818813972303_40]]`等...
> 3. 更换完成之后转成玩法生存模式长按N键即可开启使用
>
> ```xmind preview
> ./upload/xmind/物品提取箱子思维导图.xmind
> ```
```lua
--团梦秋自制脚本 迷你号：636968783 QQ：3085967892 请勿删除此注释 删除此注释必究
b = 1
ztdk = 0

--关闭ui
local function UIButtonClick1(event)
    if(event.btnelenemt == [[7139883818813972303_12]])
    then
        Player:hideUIView(event.eventobjid, [[7139883818813972303]])
    end
    end
-- 注册ui输入框失去焦点监听器
ScriptSupportEvent:registerEvent([=[UI.Button.Click]=], UIButtonClick1)





-- 道具id
--团梦秋自制脚本 迷你号：636968783 QQ：3085967892 请勿删除此注释 删除此注释必究
local function UI_LostFocus(event)
    if(event.btnelenemt == [[7139883818813972303_10]])
    then
    local hour = tonumber(event.content)
        a = hour
        content = tostring(hour)
        local result,iconid = Customui:getItemIcon(a)
              Customui:setTexture(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_20]], iconid)
              if(b>=1)
              then
        local result,name=Item:getItemName(a)
              Customui:setText(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_19]], name.."x"..b)
              else
        local result,name=Item:getItemName(a)
              Customui:setText(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_19]], name..b)   
    end
    end
    end
-- 注册ui输入框失去焦点监听器
ScriptSupportEvent:registerEvent([=[UI.LostFocus]=], UI_LostFocus)



-- 数量
local function UI_LostFocus2(event)
    if(event.btnelenemt == [[7139883818813972303_13]])
    then
    local hour = tonumber(event.content)
        b = hour
        content = tostring(hour)
    if(string.sub(b,1,1) ~= "-")
    then
    local result,name=Item:getItemName(a)
        Customui:setText(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_19]], name.."x"..b)
            else
    local result,name=Item:getItemName(a)
        Customui:setText(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_19]], name..b)
    end
    end
    end

 
    
-- 注册ui输入框失去焦点监听器
ScriptSupportEvent:registerEvent([=[UI.LostFocus]=], UI_LostFocus2)

-- 注册ui输入框失去焦点监听器
ScriptSupportEvent:registerEvent([=[UI.LostFocus]=], UI_LostFocus2)

-- 添加
local function UI_Button_Click(event)

    if(event.btnelenemt == [[7139883818813972303_9]])
    then
    if(b>=1)
    then
        Backpack:addItem(event.eventobjid,a,b)--添加
    else
        c = -(b)
        Backpack:removeGridItemByItemID(event.eventobjid,a,c)--销毁
end
end
end

-- 注册界面中的按钮被松开监听器
ScriptSupportEvent:registerEvent([=[UI.Button.Click]=], UI_Button_Click)



--主题打开和关闭
local function UIButtonClick1(event)
    if(event.btnelenemt == [[7139883818813972303_37]])
    then
    if(ztdk <= 0)
    then
        Customui:showElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_25]])
        Customui:showElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_40]])
        ztdk = 1
    else
        Customui:hideElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_25]])
        Customui:hideElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_40]])
        ztdk = 0
    end
    end
    end
-- 注册ui输入框失去焦点监听器
ScriptSupportEvent:registerEvent([=[UI.Button.Click]=], UIButtonClick1)

--默认主题
local function zt1(event)
    if(event.btnelenemt == [[7139883818813972303_35]])
    then
        Customui:showElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_3]])--显示默认
        Customui:hideElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_21]])--隐藏1
        Customui:hideElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_22]])--隐藏2
        Customui:hideElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_39]])--隐藏4
    end
    end
-- 注册ui输入框失去焦点监听器
ScriptSupportEvent:registerEvent([=[UI.Button.Click]=], zt1)

--主题2
local function zt2(event)
    if(event.btnelenemt == [[7139883818813972303_33]])
    then
        Customui:showElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_21]])--显示1
        Customui:hideElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_3]])--隐藏默认
        Customui:hideElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_22]])--隐藏2
        Customui:hideElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_39]])--隐藏4
    end
    end
-- 注册ui输入框失去焦点监听器
ScriptSupportEvent:registerEvent([=[UI.Button.Click]=], zt2)

--主题3
local function zt3(event)
    if(event.btnelenemt == [[7139883818813972303_34]])
    then
        Customui:showElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_22]])--显示3
        Customui:hideElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_3]])--隐藏默认
        Customui:hideElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_21]])--隐藏1
        Customui:hideElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_39]])--隐藏4
    end
    end
-- 注册ui输入框失去焦点监听器
ScriptSupportEvent:registerEvent([=[UI.Button.Click]=], zt3)

--主题4
local function zt4(event)
    if(event.btnelenemt == [[7139883818813972303_38]])
    then
        Customui:showElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_39]])--显示4
        Customui:hideElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_3]])--隐藏默认
        Customui:hideElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_21]])--隐藏1
        Customui:hideElement(event.eventobjid, [[7139883818813972303]], [[7139883818813972303_22]])--隐藏3
    end
    end
-- 注册ui输入框失去焦点监听器
ScriptSupportEvent:registerEvent([=[UI.Button.Click]=], zt4)
```











### 防审核员脚本
> [!TIP|style:flat]
> 1. 脚本加入到地图的脚本选项里
> 2. 转换玩法生存即可使用


```lua
ScriptSupportEvent:registerEvent("Game.AnyPlayer.EnterGame",function(event)
local result,name=Player:getNickname(event.eventobjid)
  local function find(mtable,value)
    for i, v in pairs(mtable)do
      if value ~= v then
        return true
      end
    end
  end
  local objid = event.eventobjid
  local objids = {1187519858,1106,899993838,1122,1123,1126,1103,1120,3000,924587058,919332008,1025503668,936983964,333778370,1193044893,1127,1002,1006,1007,1009,1012,1013,1193044893,1030890971,930190653,830756533,1025503668,842127314,915289568,915291355,915292099,915292750,915293729,915294505,916402129,916401912,916401451,916401971,916401966,916401428,916423193,916427610,916440969,916420115,916401290,916401802,916431825,916437764,916426582,916158521,916435058,916548909,916553384,916555486,916561556,916548859,916562432,916554440,916569252,916545302,916550058,916545176,916567987,916545193,916547025,916549200,916545827,916549392,916550635,916545142,916545936,916572530,916574912,916566790,916545719,916553099,917538663,918228621,918242370,918242726,918240873,918240868,918241047,918241612,918243839,918241278,918241946,918242498,918240016,918243078,918244232,918243673,918243081,918243224,918243595,918251534,918251700,918251172,836557926,54672794,551043713,918466268,918466275,918929757,918920898,918929841,916443617,918929419,1120,1123,923432019,923448414,923461352,923472359,923464540,923467902,923485590,923378463,923491552,923495170,923475719,923494182,923483026,918893146,444039195,925160505,925152074,925151752,925150230,925148619,925149037,925150605,925152636,925149688,925149422,925149782,925149330,925149842,925155413,925830861,925830166,925827763,925828591,925830542,925826644,925827047,926448193,926452472,926447975,926447082,926451860,926447111,926447388,926447491,926447940,926447133,926446776,926447919,926446853,926447019,926452427,930287110,930286873,930286026,930287742,930276794,930233788,930285551,930288528,930290782,930287128,930222705,930258737,930294242,930249757,930288174,930230495,930236796,930286292,930232165,930289500,930237783,930236680,930237077,930289650,930243586,930292852,930232468,930219915,930232735,930229708,930238620,930293128,930298893,936991322,936982720,936985001,936983895,936982536,936982100,936982730,936983458,936981636,936983441,936993531,936991200,936982742,936982237,936988881,936982571,936982420,936984368,936982575,936981742,936994941,936998273,936990574,936990930,936158286,928587500,936996026,936992975,927441552,734676122,205154734,940589549,940595853,940598606,940601688,940604280,940607581,944098253,944100477,944098996,944101416,944103266,941359087,942352038,941048478,941066546,941364126,941339733,940911217,549418580,942423778,941273492,940648071,942632798,943935685,941043882,946761516,946767851,946767079,946759240,946761435,946760085,942429056,946772303,946770635,946761574,943903011,946760836,946762249,944102382,944103279,944101790,944101302,944099004,944096715,944098296,956632807,981861671,981861199,981860358,981861378,981861015,981864898,981860907,981861308,981861183,981865065,981862947,981860043,981860566,981863195,981862830,981862957,981978159,981977168,981979268,981977878,333778370,936983964,1359276003,1359268047,1359470401,1359461879,1359473282,1359262484,1359257950,1359252025,1359468406,1359242744,1359232735,1359225803,1106,1124,1127,1002,1006,1007,1009,1012,1013}
  if find(objids,objid)==true then
local uin=event.eventobjid
    local uiid="0000000000000000000"--专门对审核员打开的界面id
    Player:openUIView(uin,uiid)
else
    print(true)
  end
end)
```














### 生成家园物品
> [!TIP|style:flat]
> 1. 脚本加入到地图的脚本选项里
> 2. 转换玩法生存即可使用

```lua
--欢迎使用家园物品脚本，脚本于1.22.0版本迷你世界制作
--团梦秋自制脚本 迷你号：636968783 QQ：3085967892 请勿删除此注释 删除此注释必究
s = 64 --物品数量默认64
function ClickBlock(obj)
x,y,z = obj.x,obj.y,obj.z
y = y+1
WorldContainer:addStorageBox(x,y,z) for i=1550,1573 do local result,relNum=WorldContainer:addStorageItem(x,y,z,i,s)end
y = y+1
WorldContainer:addStorageBox(x,y,z) for i=1574,1597 do local result,relNum=WorldContainer:addStorageItem(x,y,z,i,s)end
y = y+1
WorldContainer:addStorageBox(x,y,z) for i=1598,1621 do local result,relNum=WorldContainer:addStorageItem(x,y,z,i,s)end
y = y+1
WorldContainer:addStorageBox(x,y,z) for i=1622,1645 do local result,relNum=WorldContainer:addStorageItem(x,y,z,i,s)end
y = y+1
WorldContainer:addStorageBox(x,y,z) for i=1646,1669 do local result,relNum=WorldContainer:addStorageItem(x,y,z,i,s)end
y = y+1
WorldContainer:addStorageBox(x,y,z) for i=1722,1811 do local result,relNum=WorldContainer:addStorageItem(x,y,z,i,s) end
y = y+1
WorldContainer:addStorageBox(x,y,z)for i=1691,1714 do local result,relNum=WorldContainer:addStorageItem(x,y,z,i,s)end
y = y+1
WorldContainer:addStorageBox(x,y,z) for i=1670,1690 do local result,relNum=WorldContainer:addStorageItem(x,y,z,i,s) end
y = y+1
WorldContainer:addStorageBox(x,y,z) for i=62202,63549 do local result,relNum=WorldContainer:addStorageItem(x,y,z,i,s) end
y = y+1
WorldContainer:addStorageBox(x,y,z) for i=62452,63625 do local result,relNum=WorldContainer:addStorageItem(x,y,z,i,s) end
y = y+1
WorldContainer:addStorageBox(x,y,z) for i=1526,1549 do local result,relNum=WorldContainer:addStorageItem(x,y,z,i,s) end
y = y+1
WorldContainer:addStorageBox(x,y,z) for i=1502,1525 do local result,relNum=WorldContainer:addStorageItem(x,y,z,i,s) end
y = y+1
WorldContainer:addStorageBox(x,y,z) for i=1400,1451 do local result,relNum=WorldContainer:addStorageItem(x,y,z,i,s) end
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], ClickBlock)--点击方块
```


### 物品提取箱子
> [!TIP|style:flat]
>1. 脚本加入到方块的脚本选项里
>2. 绑定当前方块做成插件包加入生存即可使用
>
> ```xmind preview
> ./upload/xmind/物品提取箱子思维导图.xmind
> ```
``` lua
--团梦秋自制脚本 迷你号：636968783 QQ：3085967892 请勿删除此注释 删除此注释必究
function PlaceBy(obj)
    	id = 1
    	s = 1 --数量
    	for i = 0, 29 do
    		local result, itemid, itemNum = WorldContainer:getStorageItem(obj.x, obj.y, obj.z, i)
    		if itemid ~= 12239 then
    			id = id .. itemNum
    		end
    	end
    	id = string.gsub(id, "0*$", "")
    	for i = 0, 29 do
    		local result, itemid, itemNum = WorldContainer:getStorageItem(obj.x, obj.y, obj.z, i)
    		if itemid == 12239 then
    			id = id .. 0
    		end
    	end
    	id = string.sub(id, 2)
     	print(id)
    	id = tonumber(id)
    	local result, successNum = Backpack:addItem(obj.eventobjid, id, s)
    	if result == 0 then --添加成功
    		id = 1
    		Chat:sendSystemMsg("成功添加",obj.eventobjid)
    	else
    		Chat:sendSystemMsg("添加失败",obj.eventobjid)
    	end
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], PlaceBy) --点击方块
```


### 纯生存区域清除
> [!TIP|style:flat]
>1. 脚本加入到方块的脚本选项里
>2. 绑定当前方块做成插件包加入生存即可使用
>
> 理论上区域可以无限大
> 放到插件包中方块脚本下
> 目前粘贴区域必须和复制区域大小一样，第一个方块xyz必须小于第二个方块xyz
>
> ```xmind preview
> ./upload/xmind/纯生存区域清除思维导图.xmind
> ```
``` lua
--阿狸自制脚本 迷你号：761317340 QQ：2153624819 请勿删除此注释 删除此注释必究
--制作时间：2024年7月21日
local function al(obj)
	local result, value = Player:getAttr(0, 1) --获取房主的最大生命值
	if value == 100 then
		x0 = obj.x
		y0 = obj.y
		z0 = obj.z
		Chat:sendSystemMsg("起点已放置")
		Player:gainItems(0, obj.blockid, 1, 1) --添加方块
		Chat:sendSystemMsg("请放置终点")
		Player:setAttr(0, 1, 101) --设置房主的生命上限
	elseif value == 101 then
		x1 = obj.x
		y1 = obj.y
		z1 = obj.z
		Chat:sendSystemMsg("终点已放置")
		Chat:sendSystemMsg("即将传送回起点...")
		threadpool:wait(2) --等待x秒
		Player:setPosition(0, x0, y0 + 1, z0) --设置玩家到某坐标
		xhc = x0
		yhc = y0
		zhc = z0
		jd = (x1 - x0) * (z1 - z0) * (y1 - y0) --总进度
		jxjd = 0 --进行进度
		Player:setAttr(0, 1, 10000) --设置房主的生命上限
		Player:setAttr(0, 2, 10000) --设置房主的当前生命
		while yhc <= y1 do --循环直到方块id对应
			threadpool:wait(0.00000001) --等待x秒
			if xhc <= x1 then
				Block:destroyBlock(xhc, yhc, zhc, false) --清除方块
				Player:setPosition(0, xhc, yhc + 3, zhc) --设置玩家到某坐标
				xhc = xhc + 1
			elseif xhc > x1 and zhc < z1 then
				zhc = zhc + 1
				xhc = x0
				Chat:sendChat("#R正在清除...")
			elseif xhc > x1 and zhc >= z1 and yhc < y1 then
				xhc = x0
				zhc = z0
				yhc = yhc + 1
			elseif yhc == y1 then --修复yhc=y1时还在循环
				yhc = yhc + 1
				Chat:sendChat("#B清除成功！")
				Player:setAttr(0, 1, 100) --设置房主的生命上限
				Player:setAttr(0, 2, 100) --设置房主的当前生命
			end
		end
	end
end

ScriptSupportEvent:registerEvent([=[Block.Add]=], al)
```


### 检测所有玩家物品、背包、装备栏道具
> [!TIP|style:flat]
> 1. 脚本加入到地图的脚本选项里
> 2. 转换玩法生存即可使用

```lua
--团梦秋自制脚本 迷你号：636968783 QQ：3085967892 请勿删除此注释 删除此注释必究
ScriptSupportEvent:registerEvent([=[Player.UseItem]=],function(e)
--获取指定玩家背包的物品列表
--第一个参数为玩家迷你号
--第二个参数为背包栏类型：1快捷栏 2储存栏 3装备栏
local result,namefz=Player:getNickname(0)
Chat:sendSystemMsg("#cFF6A6A"..namefz.."牌检测系统已启动")
local result,num,array=World:getAllPlayers(-1)
for ii,aname in ipairs(array) do
local result,num,arr=Backpack:getBackpackBarItemList(aname,1)
if result==0 then--如果获取成功
	--在聊天框显示种类数
	local result,name=Player:getNickname(aname)
	Chat:sendSystemMsg("#R" .. name .. "的快捷栏一共有"..num.."种物品")
	for i,a in ipairs(arr) do
		--在聊天框显示物品id列表
		local result,idname=Item:getItemName(a)
				Chat:sendSystemMsg("#G快捷栏物品"..i.."："..idname)
	end
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("脚本运行错误")
end
end

local result,num,array=World:getAllPlayers(-1)
for ii,aname in ipairs(array) do
local result,num,arr=Backpack:getBackpackBarItemList(aname,2)
if result==0 then--如果获取成功
	--在聊天框显示种类数
	local result,name=Player:getNickname(aname)
	Chat:sendSystemMsg("#R" .. name .. "的背包栏一共有"..num.."种物品")
	for i,a in ipairs(arr) do
		--在聊天框显示物品id列表
		local result,idname=Item:getItemName(a)
				Chat:sendSystemMsg("#G背包栏物品"..i.."："..idname)
	end
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("脚本运行错误")
end
end

local result,num,array=World:getAllPlayers(-1)
for ii,aname in ipairs(array) do
local result,num,arr=Backpack:getBackpackBarItemList(aname,3)
if result==0 then--如果获取成功
	--在聊天框显示种类数
	local result,name=Player:getNickname(aname)
	Chat:sendSystemMsg("#R" .. name .. "的装备栏一共有"..num.."种物品")
	for i,a in ipairs(arr) do
		--在聊天框显示物品id列表
		local result,idname=Item:getItemName(a)
				Chat:sendSystemMsg("#G装备栏物品"..i.."："..idname)
	end
else--如果获取失败
	--在聊天框显示
	Chat:sendSystemMsg("脚本运行错误")
end
end



local result,num,array=World:getAllPlayers(-1)
for ii,aname in ipairs(array) do
	print("第"..i.."个:"..a)
end
end)--点击方块

```
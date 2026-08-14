LUA执行器插件包+模组指令（更新于2025-10-01 23:08）
### 自带变量介绍
> [!NOTE|style:flat]
>
> uin为触发事件玩家的迷你号 理解为自己即可
>
> uinx,uiny,uinz 为触发事件玩家的x,y,z坐标 自己的x y  z坐标
>
> x-横坐标 y-竖坐标 z-纵坐标
>


### LUA执行编译器(脚本完整版)使用示例
> [!NOTE|style:flat]
> #### 基本框架
> ```lua
> function 示例(e)
>   if 关闭示例==false then
>       return--停止执行
>   end
> 
>   --函数体
> 
> end
> run([=[事件]=], 示例)
> ```
> run([=[事件]=], 示例)是事件监听器，函数体为要运行的LUA脚本，整个框架缺一不可随意改动
>
> if 关闭示例==false then这里的关闭示例可以随便起名，注意:每一次自定义的名字不能一样，一样会导致无法正常关闭
>
> 如果不想监听事件了可以使用 关闭示例=true 来关闭 或聊天框打 /关闭示例=true 来关闭
>
>
>
> #### 点击方块打印玩家名字和方块名字示例
> ```lua
> function 示例(e)
>    if 关闭点击方块==false then
>        return--停止执行
>    end
>
>    local result,name=Player:getNickname(e.eventobjid)--获取玩家名字
>    local result,fkname = Block:GetBlockDefName(e.blockid)--获取方块名字
>    print("玩家"..name.."点击了"..fkname)
>
> end
> run([=[Player.ClickBlock]=], 示例)--玩家点击方块时执行
> ```
>
> 这里的Player.ClickBlock为玩家点击方块事件
>
>函数体为获取玩家名字获取方块名字后赋值变量给name和fkname之后打印name和fkname变量
>


### 隐藏输入代码 
> [!TIP|style:flat]
> ```
> /Actor:setnickname(uin, "")
> ```

### 循环执行 
> [!TIP|style:flat]
> ```
> /a=true while a==true do print("执行完成") threadpool:wait(0.01) end
> ```

### 锁定时间 
> [!TIP|style:flat]
> 
>
> ```
> /a=true while a==true do Trigger.World:setWorldTime(12) threadpool:wait(0.01) end
> ```

### 等待1秒执行 
> [!TIP|style:flat]
> ```
> /threadpool:wait(1)
> ```

### 设置时间 
> [!TIP|style:flat]
> ```
> /World:setHours(12)
> ```

### 设置天气 
> [!TIP|style:flat]
> ```
> /World:SetGroupWeather(WEATHERGROUP.COMMON,1)
> ```
>
> --第一个参数为地形组ID
>
> --第二个参数为天气类型 0晴雨交替 1晴天 2雨天 3雷阵雨 5雪天 7雷+暴风

### 设置太阳光强度 
> [!TIP|style:flat]
> ```
> /World:setBlockLightEx(uinx, uiny, uinz, 15)
> ```
>
> --第一到三个参数为x y z坐标
>
> --第四个参数为要设置的亮度级别(0-15)

### 设置触发器全局变量
> [!TIP|style:flat]
> ```
> /class.TriggerVarLibVar2.new(110050001).Data = 100
> ```
>
> --第一个参数为变量ID 11005000数值 11010000字符串 11014000布尔值
>
> --第二个参数为要设置的数值

### 设置触发器玩家变量
> [!TIP|style:flat]
> ```
> /class.TriggerVarLibVar2.new(210050001, uin).PrivateData = 100
> ```
>
> --第一个参数为变量ID 21005000数值 21010000字符串 21014000布尔值
>
> --第二个参数为玩家迷你号
>
> --第三个参数为要设置的数值

### 消息弹框 
> [!TIP|style:flat]
> ```
> /Game:msgBox("这是一个弹窗！")
> ```
>
> --第一个参数为要设置的弹窗内容

### 发送系统消息 
> [!TIP|style:flat]
> ```
> /Chat:sendSystemMsg("这是一条系统消息！",0)
> ```
>
> --第一个参数为要设置的消息内容
>
> --第二个参数为发给迷你号的玩家，0表示发给所有玩家

### 发送聊天消息 
> [!TIP|style:flat]
> ```
> /Chat:sendChat("这是一条聊天消息！",0)
> ```
>
> --第一个参数为要设置的消息内容.
>
> --第二个参数为发给迷你号的玩家，0表示发给所有玩家

### 设置blockalldata 更新+通知 
> [!TIP|style:flat]
> ```
> /Block:setBlockAll(uinx,uiny,uinz,1,0)
> ```
>
> --第一到三个参数为x y z坐标
>
> --第四个参数是方块ID
>
> --第五个参数是方块Data

### 放置方块 
> [!TIP|style:flat]
> ```
> /Block:placeBlock(uinx,uiny,uinz,0,0)
> ```
>
> --第一到三个参数为x y z坐标
>
> --第四个参数是方块ID
>
> --第五个参数是方块朝向 0西 1东 2南 3北 4下 5上

### 放置颜色方块 
> [!TIP|style:flat]
> ```
> /Trigger.Block:createBlock({x=uinx,y=uiny,z=uinz},666,0,[=[0x87e4ff]=])
> ```
>
> --第一到三个参数为x y z坐标
>
> --第四个参数是666方块ID
>
> --第五个参数是方块朝向 0西 1东 2南 3北 4下 5上
>
> --第六个参数是方块的颜色16进制代码
>

### 摧毁方块 
> [!TIP|style:flat]
> ```
> /Block:destroyBlock(uinx,uiny,uinz,true)
> ```
>
> --第一到三个参数为x y z坐标
>
> --第四个参数true为掉落，false为不掉落

### 替换方块 
> [!TIP|style:flat]
> ```
> /Block:replaceBlock(1,0,6,0,0)
> ```
> --第一到三个参数为x y z坐标
>
> --第四个参数是方块ID
>
> --第五个参数是方块朝向 0西 1东 2南 3北 4下 5上

### 区域范围内有方块 
> [!TIP|style:flat]
> ```
> /fk=Area:blockInAreaRange(101,{x=x,y=y,z=z},{x=uinx,y=uiny,z=uinz}) if fk==0 then print("有") end
> ```
>
> ```
> /x,y,z=uinx,uiny,uinz  --设置起始位置
> ```
>
>
> --判断两点之前的范围内有没有某种方块
>
> --第一个参数为方块id，101是土块
>
> --后两个参数分别是范围起点和终点坐标组成的表

### 设置方块属性状态 
> [!TIP|style:flat]
> ```
> /Block:setBlockSettingAttState(101,1,false)
> ```
> --第一个参数为方块ID
>
> --第二个参数1为方块属性：1破坏 2操作 4推拉 8掉落 16推拉掉落
>
> --第三个参数false为“不可”，改为true表示“可以”

### 设置功能方块的开关状态 
> [!TIP|style:flat]
> ```
> /Block:setBlockSwitchStatus({x=uinx,y=uiny,z=uinz},true)
> ```
>
> --第一到三个参数为x y z坐标
>
> --最后一个参数true为打开，false为关闭

### 生成投掷物 
> [!TIP|style:flat]
> ```
> /World:spawnProjectile(uin, 12054, uinx, uiny, uinz, uinx, uiny, uinz, 50)
> ```
>
> --第一个参数为玩家id或玩家迷你号
>
> --第二个参数12054为投掷物id，这里是小雪球
>
> --第三到五个参数为投掷起点坐标
>
> --第六到八个参数为向此方向投掷
>
> --第九个参数为抛出速度

### 生成投掷物(通过方向) 
> [!TIP|style:flat]
> ```
> /World:spawnProjectileByDir(uin, 12054, uinx, uiny, uinz, uinx, uiny, uinz, 50)
> ```
>
> --第一个参数为玩家id或玩家迷你号
>
> --第二个参数12054为投掷物id，这里是小雪球
>
> --第三到五个参数为投掷起点坐标
>
> --第六到八个参数为向此方向投掷
>
> --第九个参数为抛出速度

### 计算位置之间的距离
> [!TIP|style:flat]
> ```
> /x,y,z=uinx,uiny,uinz  --设置起始位置
> ```
>
> ```
> /c,jl=World:calcDistance({x=x,y=y,z=z},{x=uinx,y=uiny,z=uinz}) print(math.ceil(jl))  --计算距离
> ```

### 在指定位置播放特效 
> [!TIP|style:flat]
> ```
> /World:playParticalEffect(0,7,0,1001,1,3,true)
> ```
> --第一到三个参数为x y z坐标
>
> --第四个参数是播放特效的特效id，具体可以在“迷你世界ID查询”的“特效表数据”里查看
>
> --第五个参数是特效的缩放比例
>
> --第六个参数是播放时长，时长大于0时，特效会在设定时间内循环播放，直到时间结束；设置时间小于等于0或为nil时，循环类型的特效会持续播放，非循环类型的特效只播放一次
>
> --最后一个参数可以设定是否根据视野裁剪范围，如果设定为false，特效稍远一点就会被裁剪，如果设定为true，会根据视野来决定裁剪范围

### 生成生物(包括怪物、NPC、动物等) 
> [!TIP|style:flat]
> ```
> /World:spawnCreature(uinx,uiny,uinz,3400,1)
> ```
>
> --第一到三个参数为x y z坐标
>
> --第四个参数3400是生成的生物id
>
> --最后一个参数3是生成的数量



### 在指定位置生成道具 
> [!TIP|style:flat]
> ```
> /World:spawnItem(uinx,uiny,uinz,101,3)
> ```
>
>
> --第一到三个参数为x y z坐标
>
> --第四个参数101是土块，生成的物品id
>
> --最后一个参数3是生成的数量

### 对玩家显示飘窗文字 
> [!TIP|style:flat]
> ```
> /Player:notifyGameInfo2Self(uin,"这里是飘窗文字内容")
> ```
>
> --第一个参数为玩家id或玩家迷你号，0是房主
>
> --第二个参数是显示的文本内容

### 设置玩家行为属性状态 
> [!TIP|style:flat]
> ```
> /Actor:setActionAttrState(uin,1,false)
> ```
>
> --第一个参数为生物在存档中的id，可以是玩家迷你号，0是房主
>
> --第二个参数为要设置的属性 1 可移动 32 可攻击 64 可被攻击 128 可被杀死 256 可拾取道具 512死亡掉落
>
> --第三个参数为设置：true可以 false不可


### 设置玩家道具设置属性：丢弃、掉落
> [!TIP|style:flat]
> ```
> /Player:setItemAttAction(uin,101,1,true)
> ```
> --第一个参数为玩家id或玩家迷你号，0是房主
>
> --第二个参数为要设置的道具的id，101是土块
>
> --第三个参数为属性值：1不可丢弃 2不可掉落
>
> --最后一个参数为是否开启属性：true开启 false关闭


### 给玩家附加Buff效果 
> [!TIP|style:flat]
> ```
> /Buff:addBuff(uin, 16, 5, -1)
> ```
>
> --第一个参数为玩家id或玩家迷你号
>
> --第二个参数为效果ID
>
> --第三个参数为效果等级
>
> --第四个参数为效果持续时间(-1表示默认配置，0表示无限)

### 给玩家移除指定Buff效果 
> [!TIP|style:flat]
> ```
> /Buff:removeBuff(uin, 16)
> ```
>
> --第一个参数为玩家id或玩家迷你号
>
> --第二个参数为效果ID

### 给玩家清除所有buff效果 
> [!TIP|style:flat]
> ```
> /Buff:clearAllBuff(uin)
> ```
>
> --第一个参数为玩家id或玩家迷你号

### 给玩家清除所有负面Buff效果 
> [!TIP|style:flat]
> ```
> /Buff:clearAllBadBuff(uin)
> ```
>
> --第一个参数为玩家id或玩家迷你号

### 玩家乘上坐骑 
> [!TIP|style:flat]
> ```
> /Actor:mountActor(uin,event.toobjid,0)
> ```
>
> --第一个参数为骑乘的生物在存档中的id，可以为玩家迷你号
>
> --第二个参数为被骑乘生物在存档中的id
>
> --第三个参数为骑乘位

### 获取手持道具ID
> [!TIP|style:flat]
> ```
> /result,id=Player:getCurToolID(uin) print("道具ID是"..id)
> ```
>
> --第一个参数为玩家id或玩家迷你号


### 获取物品名
> [!TIP|style:flat]
> ```
> /result,name=Item:getItemName(100) print("物品的名字是："..name)
> ```
>
> --第一个参数100为物品id



### 设置玩家掉落物拾取范围
> [!TIP|style:flat]
> ```
> /Player:setCheckBoxScale(uin,999)
> ```
>
> --第一个参数为玩家迷你号
>
> --第二个参数是范围
>



### 给玩家增加道具 
> [!TIP|style:flat]
> ```
> /Player:gainItems(uin,1,10,1)
> ```
>
> --第一个参数为玩家id或玩家迷你号，0是房主
>
> --第二个参数是添加物品的id，1是基岩
>
> --第三个参数是添加的物品数量，默认是10个
>
> --最后一个参数是优先快捷栏还是背包栏：1优先快捷栏 2优先背包栏

### 给玩家增加道具批量(模组版)
> [!TIP|style:flat]
> ```lua
> local wp={100,101,666}
> s=1
> for i=1,#lt do
>	Player:gainItems(uin,lt[i],s,1)
> end
> ```
>
> --101、101、666为要添加的道具 s为要添加的数量 uin为被添加道具的玩家迷你号




### 给玩家批量增加道具
> [!TIP|style:flat]
> ```
> /s = 64 for i=1, 10 do local result,name=Item:getItemName(i) Player:gainItems(uin,i,s,1) print("#R已添加 " .. name) end
> ```
>
> --s为要添加的数量
>
> --i=1,10为从id为1的物品一直添加到id为10的物品
>
> --Player:gainItems(uin,i,s,1)里面的uin为玩家迷你号0为房主

### 设置背包格道具 
> [!TIP|style:flat]
> ```
> /Backpack:setGridItem(uin,0,12005,10,nil)
> ```
>
> --给指定玩家的指定背包栏添加物品
>
> --第一个参数uin为玩家迷你号
>
> --第二个参数0为背包栏id，0为储存栏的第一格：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
>
> --第三个参数为要添加的物品id，12005是钻石剑
>
> --第四个参数为要添加的物品数量
>
> --最后一个参数为要添加的物品耐久，nil为默认满

### 交换背包道具 
> [!TIP|style:flat]
> ```
> /Backpack:moveGridItem(uin,0,1000)
> ```
>
> --交换玩家两个物品栏的物品
>
> --第一个参数为玩家迷你号
>
> --后两个参数为要交换的背包栏id：0-29储存栏 1000-1007快捷栏 8000-8004装备栏

### 移走背包里的物品 
> [!TIP|style:flat]
> ```
> /Player:removeBackpackItem(uin,101,10)
> ```
>
> --第一个参数为玩家id或玩家迷你号，0是房主
>
> --第二个参数为要移除的物品id，101是土块
>
> --第三个参数为要移除的物品数量，默认是10个

### 移除背包内一定数量道具，通过道具ID移除 
> [!TIP|style:flat]
> ```
> /Backpack:removeGridItemByItemID(uin,101,50)
> ```
>
> --移除指定玩家背包里的指定物品
>
> --第一个参数为玩家迷你号
>
> --第二个参数为要移除的物品id，101为土块
>
> --第三个参数为要移除的物品数量 输入nil  为全部移除

### 移除背包格内一定数量道具，通过道具格移除 
> [!TIP|style:flat]
> ```
> /Backpack:removeGridItem(uin,0,10)
> ```
>
>
> --移除指定玩家的指定背包栏的物品
>
> --第一个参数为玩家迷你号
>
> --第二个参数0为背包栏id，0为储存栏的第一格：0-29储存栏 1000-1007快捷栏 8000-8004装备栏
>
> --第三个参数为移除数量 输入nil 为全部移除

### 清空玩家指定栏 
> [!TIP|style:flat]
> ```
> /Backpack:clearPack(uin,1)
> ```
>
> --清空指定玩家的背包物品
> --第一个参数为玩家迷你号
> --第二个参数为背包类型：1快捷栏 2背包栏 3装备栏

### 清空玩家背包 
> [!TIP|style:flat]
> ```
> /Backpack:clearAllPack(uin)
> ```
>
> --第一个参数为玩家id或玩家迷你号

### 创建装备 
> [!TIP|style:flat]
> ```
> /Backpack:actCreateEquip(uin, 12241)
> ```
>
> --第一个参数为玩家id或玩家迷你号，uin是自己
>
> --第二个参数为装备ID 12241是钨金头盔

### 销毁装备 
> [!TIP|style:flat]
> ```
> /Backpack:actDestructEquip(uin, 12241)
> ```
>
> --第一个参数为玩家id或玩家迷你号，uin是自己
>
> --第二个参数为装备ID 12241是钨金头盔
>
> --销毁玩家装备(不放入背包的才行)

### 玩家穿上装备
> [!TIP|style:flat]
> ```
> /Backpack:actEquipUpByResID(uin, 12241)
> ```
>
> --第一个参数为玩家id或玩家迷你号，uin是自己
>
> --第二个参数为装备ID 12241是钨金头盔

### 玩家脱下装备栏装备 
> [!TIP|style:flat]
> ```
> /Backpack:actEquipOffByEquipID(uin, 0)
> ```
>
> --第一个参数为玩家id或玩家迷你号，uin是自己
>
> --第二个参数为装备栏id，0代表头盔

### 玩家手机震动 
> [!TIP|style:flat]
> ```
> /Player:setMobileVibrate(uin, 10, 1)
> ```
>
> --第一个参数为玩家id或玩家迷你号，uin是自己
>
> --第二个参数为震动时长(单位：ms)
>
> --第三个参数为震动强度(范围：1~255)

### 设置CD 
> [!TIP|style:flat]
> ```
> /Player:setSkillCD(0,12005,100)
> ```
>
> --第一个参数为玩家id或玩家迷你号，0是房主
>
> --第二个参数为道具id，12005是能量剑(能量剑)
>
> --第三个参数为设置的技能冷却时长

### 设置昵称 
> [!TIP|style:flat]
> ```
> / Actor:setnickname(uin, "名字")
> ```
>
> --第一个参数为玩家迷你号
>
> --第二个参数为要设置的名字

### 设置昵称显示 
> [!TIP|style:flat]
> ```
> /Actor:shownickname(uin, false)
> ```
>
> --第一个参数为玩家迷你号
>
> --第二个参数是否显示昵称：true为显示 false为不显示

### 设置玩家的摄像机挂载到对象 
> [!TIP|style:flat]
> ```
> /Player:SetCameraMountObj(uin, objid)
> ```
>
> --第一个参数为玩家迷你号
>
> --第二个参数为被挂载的玩家迷你号

### 设置玩家的摄像机挂载到位置 
> [!TIP|style:flat]
> ```
> /Player:SetCameraMountPos(uin, {x=0,y=7,z=0})
> ```
>
> --第一个参数为玩家迷你号
>
> --第二个参数为位置信息x,y,z

### 重置玩家摄像机 
> [!TIP|style:flat]
> ```
> /Player:ResetCameraAttr(uin)
> ```
>
> --第一个参数为玩家迷你号

### 设置玩家飞行 
> [!TIP|style:flat]
> ```
> /Player:changPlayerMoveType(uin,1)
> ```
>
> --第一个参数为玩家迷你号
>
> --第二个参数为是否飞行1为飞行2为取消飞行

### 设置玩家队伍 
> [!TIP|style:flat]
> ```
> /Player:setTeam(uin,2)
> ```
>
> --第一个参数为玩家id或玩家迷你号，0是房主
>
> --第二个参数为要设置为的队伍

### 设置玩家无敌 
> [!TIP|style:flat]
> ```
> /for i=0,14 do Actor:setImmuneType(uin, i, true) end
> ```
> --第一个参数uin为玩家id或玩家迷你号
>
> --第二个参数true为开关 true为开启 false为关闭

### 设置玩家免疫属性 
> [!TIP|style:flat]
> ```
> /Actor:setImmuneType(uin, 0, true)
> ```
>
> --伤害类型枚举
0, 近战伤害 1, 远程伤害 2, 爆炸伤害 3, 物理伤害 3, 燃烧伤害 4, 毒素伤害 5, 混乱伤害 6, 元素伤害 6, 日晒 7, 跌落伤害 8, 被砸中伤害 9, 仙人掌伤害 10, 窒息伤害 11, 溺水伤害 12, 水下生物在空气中窒息伤害 13, 反伤 14, 被激光伤害
>
> --第一个参数uin为玩家id或玩家迷你号
>
> --第二个参数为伤害类型枚举 默认为0 ，0是近战伤害
>
> --第三个参数true为开关 true为开启 false为关闭

### 设置玩家属性 
> [!TIP|style:flat]
> ```
> /Player:setAttr(uin,1,100)
> ```
>
> --玩家属性枚举 
1, 最大生命值，2, 当前生命值，3, 生命恢复，4, 生命数，5, 最大饥饿值，6, 当前饥饿值，7, 最大氧气值，8, 当前氧气值，9, 氧气恢复速度，10, 移动速度，11, 奔跑速度，12, 潜行速度，13, 游泳速度，14, 跳跃力，16, 闪避率，17, 近战攻击，18, 远程攻击，19, 近战防御，20, 远程防御，21, 大小，22, 分数，23, 星星等级，28, 当前体力值，29, 当前最大体力值，30, 当前体力值恢复速度，物理攻击，元素攻击，物理防御，元素防御，26, 当前经验，27, 当前等级
>
> --第一个参数玩家迷你号
>
> --第二个参数为玩家属性枚举 默认为1 ，1是最大生命值
>
> --第三个参数为要设置的值  

### 设置玩家胜利 
> [!TIP|style:flat]
> ```
> /Player:setGameResults(0,1)
> ```
>
> --第一个参数玩家迷你号
>
> --第二个参数为1是胜利为2是游戏结束

### 获取玩家的外观 
> [!TIP|style:flat]
> ```
> /result,wg=Actor:getActorFacade(uin)
> ```
>
> --第一个参数玩家迷你号

### 设置玩家外观 
> [!TIP|style:flat]
> ```
> /Actor:changeCustomModel(uin,[[skin_392]])
> ```
>
> --第一个参数玩家迷你号
>
> --第二个参数为皮肤ID skin_392 为皮肤 懒洋洋 [[mob_3400]]为生物 3400是生物ID [[item_229]]为道具 1是道具ID [[block_1]]为方块 1是方块ID
>
> --（只能切换已拥有皮肤的外观）

### 恢复玩家外观 
> [!TIP|style:flat]
> ```
> /Actor:recoverinitialModel(uin)
> ```
> --第一个参数玩家迷你号

### 设置玩家生命值上限和生命值 
> [!TIP|style:flat]
> ```
> /for a=1,2 do Player:setAttr(uin,a,100) end
> ```
>
> --第一个参数玩家迷你号
>
> --第二个参数为玩家属性枚举 
>
> --第三个参数为要设置的值  

### 设置玩家饱食度 
> [!TIP|style:flat]
> ```
> /Player:setFoodLevel(uin,100)
> ```
>
> --第一个参数为玩家id或玩家迷你号，0是房主
>
> --第二个参数为要设置的饱食度,默认为100

### 设置玩家移动速度 
> [!TIP|style:flat]
> ```
> /Creature:setWalkSpeed(uin,100)
> ```
>
> --第一个参数为玩家迷你号

### 设置玩家游泳速度 
> [!TIP|style:flat]
> ```
> /Creature:setSwimSpeed(uin,100)
> ```
>
> --第一个参数为玩家迷你号

### 设置玩家跳跃力 
> [!TIP|style:flat]
> ```
> /Creature:setJumpPower(uin,100)
> ```
>
> --第一个参数为玩家迷你号

### 设置玩家移动 
> [!TIP|style:flat]
> ```
> /Actor:appendSpeed(uin,0,0,0)
> ```
>
> --第一个参数为玩家迷你号 
>
> --第二个参数为x y z坐标

### 设置玩家位置 
> [!TIP|style:flat]
> ```
> /Actor:setPosition(uin,x,y,z)
> ```
>
> --第一个参数为玩家迷你号
>
> --第二个参数为x y z坐标

### 设置出生点位置  
> [!TIP|style:flat]
> ```
> /Spawnport:setSpawnPoint(x, y, z)
> ```
>
> --第一个参数为x y z坐标


### 复活玩家到指定坐标 
> [!TIP|style:flat]
> ```
> /Player:reviveToPos(uin,x,y,z)
> ```
>
> --第一个参数为玩家迷你号
>
> --第二个参数为x y z坐标

### 传送玩家到出生点 
> [!TIP|style:flat]
> ```
> / Player:teleportHome(uin)
> ```
>
>
> --第一个参数为玩家id或玩家迷你号，0是房主

### 传送玩家到房主 
> [!TIP|style:flat]
> ```
> /result,fzuin=Player:getHostUin() local result,x,y,z=Actor:getPosition(fzuin) Actor:setPosition(uin,x,y,z)
> ```
>
>
> --第一个参数uin为玩家迷你号

### 将玩家传送到玩家 
> [!TIP|style:flat]
> ```
> /local result,x,y,z=Actor:getPosition(636968783) Actor:setPosition(186194,x,y,z)
> ```
>
> --第一个参数636968783为迷你号代表目标玩家
>
> --第二个参数186194为被传送的玩家，该指令为将186194迷你号的玩家传送到636968783迷你号玩家的位置

### 传送玩家到指定地图 
> [!TIP|style:flat]
> ```
> /CloudSever:TransmitToMap(uin, mapid)
> ```
>
> --第一个参数为玩家id或玩家迷你号，uin是自己
>
> --第二个参数为地图ID

### 传送玩家到指定房间 
> [!TIP|style:flat]
> ```
> /CloudSever:TransmitToRoom(uin, roomid)
> ```
>
> --第一个参数为玩家id或玩家迷你号，uin是自己
>
> --第二个参数为房间ID

### 传送玩家到其他房间 
> [!TIP|style:flat]
> ```
> /CloudSever:TransmitOtherRoom(uin)
> ```
>
> --第一个参数为玩家id或玩家迷你号，uin是自己

### 抖动玩家摄像机 
> [!TIP|style:flat]
> ```
> /Player:shakeCamera(uin, 10, 100)
> ```
>
> --第一个参数uin> --要抖动摄像机的玩家迷你号
>
> --第二个参数10> --抖动持续秒数
>
> --第三个参数100> --抖动力度

### 停止抖动玩家的摄像机 
> [!TIP|style:flat]
> ```
> /Player:stopShakeCamera(uin)
> ```
>
> --第一个参数uin> --要停止抖动摄像机的玩家迷你号

### 发送好友请求 
> [!TIP|style:flat]
> ```
> /Player:SendFriendApply(uin,1000)
> ```
>
> --第一个参数为发送请求的玩家ID uin为自己
>
> --第二个参数为被添加的好友ID 默认为1000(迷你队长)

### 寻找附近方块 
> [!TIP|style:flat]
> ```
> /result,x,y,z=Actor:findNearestBlock(uin, 100, 10) if result == 0 then print("范围内找到了方块") end
> ```
>
> --第一个参数为玩家迷你号
>
> --第二个参数寻找方块id
>
> --第三个参数寻找范围

### 寻路到目标位置 
> [!TIP|style:flat]
> ```
> /Actor:tryNavigationToPos(objid, x, y, z, false, true)
> ```
>
> --第一个参数为自动寻路的生物实体id，或玩家迷你号
>
> --第二到四个参数为寻路目的地 x y z 坐标
>
> --第五个参数为寻路过程中是否可控制：默认 否 (false)   类型{是(true) 否 (false)}
>
> --第六个参数为是否显示路线提示：默认 是(true)            类型{是(true) 否 (false)}

### 显示屏幕特效 
> [!TIP|style:flat]
> ```
> /UI:ShowScreenEffect(3,false,1)
> ```
>
> --显示雾效(貌似没效果)
>
> --第一个参数为屏幕效果id：1 speedline 2 powerline 3 fog
>
> --第二个参数为是否循环：true是 false否
>
> --第三个参数为增速

### 打开好友邀请界面 
> [!TIP|style:flat]
> ```
> /Player:OpenInviteBulletBox(uin)
> ```
>
> --第一个参数为玩家迷你号

### 打开可以操作的箱子 
> [!TIP|style:flat]
> ```
> /Player:openBoxByPos(uin, x, y, z)
> ```
>
> --第一个参数为玩家迷你号
>
> --后三个参数为 x y z坐标

### 强制打开可以操作的方块 如工匠台 
> [!TIP|style:flat]
> ```
> /Player:forceOpenBoxUI(uin, 797)
> ```
>
> --第一个参数为玩家迷你号
>
> --第二个参数为方块ID 797为完整工匠台


### 打开开发者商店
> [!TIP|style:flat]
> ```
> /Player:openDevStore(uin)
> ```
>
> --第一个参数为玩家迷你号


### 打开开发者商店（仅开发者可用）
> [!TIP|style:flat]
> ```
> /Player:openDevStoreNew(uin)
> ```
>
> --第一个参数为玩家迷你号


### 获取玩家的消费统计 
> [!TIP|style:flat]
> ```
> /e ,i=Player:GetPlayerCostStatic(uin, 1750151887, 1750238614, 1) print(i)
> ```
>
> --第一个参数为玩家迷你号
>
> --第二个参数为开始时间的时间戳（时间戳（Unix timestamp）是指自协调世界时（UTC）的1970年1月1日00:00:00起至现在所经过的秒数。时间戳一般是一个10位数字）
>
> --第三个参数结束时间的时间戳
>
> --第四个参数为查询类型（1是迷你豆 2是迷你币）
>
> --（有15s冷却限制，查询失败或触发冷却返回-1）

### 旋转玩家摄像机
> [!TIP|style:flat]
> 
> ```
> /Player:rotateCamera(0,90,90)
> ```
> --设置玩家视角方向
>
> --第一个参数为玩家id或玩家迷你号，0是房主
>
> --第二个参数为水平方向旋转角度，正北为0，由北向东为正方向
>
> --第三个参数为俯仰角，90为俯视，-90为仰视，之间的角度可任意设置

### 改变玩家视角模式 
> [!TIP|style:flat]
> ```
> /Player:changeViewMode(0,0,true)
> ```
>
> --设置玩家视角模式
>
> --第一个参数为玩家id或玩家迷你号，0是房主
>
> --第二个参数为视角模式：0主视角 1背视角 2正视角 3俯视角 4俯视角 5自定义视角
>
> --第三个参数为是否锁定视角：true锁定 false不锁定


### 踢出玩家 
> [!TIP|style:flat]
> ```
> /World:despawnActor(uin)
> ```
> --第一个参数为玩家迷你号

### 玩家播放QQ音乐
> [!TIP|style:flat]
> ```
> /Player:playQQMusic(uin,335035887,100,false)
> ```
>
> --第一个参数为玩家迷你号
>
> --第二个参数为音乐ID
>
> --第三个参数为音量
>
> --第四个参数为是否循环 true为循环 false为不循环

### 播放动作
> [!TIP|style:flat]
> ```
> /Actor:playAct(uin,14)
> ```
>
> --第一个参数为玩家迷你号
>
> --第二个参数为动作ID 
>
> | ID | 动作描述            |
> | ---- | ------------------- |
> | 1    | 打招呼              |
> | 2    | 低头思考            |
> | 3    | 哭泣                |
> | 4    | 生气                |
> | 5    | 伸懒腰              |
> | 6    | 胜利 (高兴)         |
> | 7    | 感谢                |
> | 8    | 休闲动作            |
> | 9    | 倒地                |
> | 10   | 摆姿势              |
> | 11   | 站立                |
> | 12   | 跑                  |
> | 13   | 躺下睡觉            |
> | 14   | 坐下                |
> | 15   | 游泳                |
> | 16   | 攻击                |
> | 17   | 死亡                |
> | 18   | 受击                |
> | 19   | 休闲 (人物出场动作) |
> | 20   | 跳                  |
> | 100100   | 站立                  |
> | 100101   | 跑                  |
> | 100109   | 跳                  |
> | 100111   | 冲刺                  |
> | 110033   | 飞行                  |
> | 100105   | 攻击                  |
> | 100106   | 死亡                  |
> | 100996   | 默认复活                  |
> | 100107   | 受击                  |
> | 100104   | 游泳                  |
> | 100102   | 躺下睡觉                  |
> | 100103   | 坐下                  |
> | 100140   | 打招呼                  |
> | 100162   | 低头思考                  |
> | 100159   | 哭泣                  |
> | 100158   | 生气                  |
> | 100163   | 伸懒腰                  |
> | 100155   | 胜利(高兴)                  |
> | 100131   | 感谢                  |
> | 100130   | 休闲动作                  |
> | 100157   | 倒地                  |
> | 100133   | 摆姿势                  |
> | 100112   | 双手互搓                  |
> | 100117   | 吃东西                  |
> | 100108   | 休闲                  |
> | 100212   | 出场                  |
> | 100116   | 射箭                  |
> | 100142   | 戳1                  |
> | 100153   | 戳2                  |
> | 100127    | 手枪射击              |
> | 100129    | 步枪射击              |
> | 100136    | 手枪待机              |
> | 100137    | 步枪待机              |
> | 100138    | 手枪换弹              |
> | 100139    | 步枪换弹             |
> | 100144    | 机枪待机              |
> | 100145    | 机枪射击              |
> | 100146    | 机枪换弹              |
> | 100147    | 斧头横砍              |
> | 100148    | 蓄力挖掘              |
> | 100149    | 矛蓄力              |
> | 100143    | 矛攻击              |
> | 100150    | 能量剑蓄力              |
> | 100151    | 能量剑攻击              |
> | 100154    | 狙击枪射击              |
> | 100160    | 足球传球              |
> | 100164    | 坐下2              |
> | 100191    | 篮球阻挡              |
> | 100193    | 篮球投篮              |
> | 100113    | 乘骑              |
> | 100502    | 扛人              |
> | 600100    | 舞蹈1              |
> | 600101    | 舞蹈2              |
> | 600102    | 舞蹈3              |
> | 600103    | 舞蹈4              |
> | 600104    | 舞蹈5              |
> | 100210    | 舞蹈6              |
> | 600213    | 舞蹈7              |
> | 600110    | 艺人动作1              |
> | 600111    | 艺人动作2              |
> | 600112    | 艺人动作3              |
> | 600113    | 艺人动作4              |
> | 600114    | 艺人动作5              |
> | 600115    | 艺人动作6              |
> | 600117    | 二胡演奏              |
> | 600105    | 古筝演奏              |
> | 600106    | 唢呐演奏              |
> | 600107    | 琵琶演奏              |
> | 600109    | 笛子演奏              |
> | 600108    | 鼓演奏              |
> | 600116    | 二胡待机              |
> | 600118    | 古筝待机              |
> | 600119    | 唢呐待机              |
> | 600120    | 琵琶待机              |
> | 600122    | 笛子待机              |
> | 600111    | 鼓待机              |
> | 600123    | 钢琴演奏              |
> | 100878    | 钓鱼待机              |
> | 600142    | 手持道具移动              |
> | 600169    | 手持武器待机              |
> | 110157    | 倒地              |
> | 110028    | 人被举起来              |
> | 600186    | 丢人动作              |
> | 600187    | 倒地站立              |
> | 600188    | 濒死爬行              |
> | 600189    | 爬行停止              |
> | 600193    | 技能冲刺              |
> | 600197    | 旋风斩              |
>

### 手持道具附魔
> [!TIP|style:flat]
> ```
> /for i = 1,28 do Actor:addEnchant(uin, 5, i, 5)  end
> / Actor:addEnchant(uin, 5, 5, 5) Actor:addEnchant(0, 5, 6, 5)
> / Actor:addEnchant(0, 5, 10, 5) Actor:addEnchant(0, 5, 11, 5)
> / Actor:addEnchant(0, 5, 15, 5) Actor:addEnchant(0, 5, 15, 5) 
> / Actor:addEnchant(0, 5, 16, 5) Actor:addEnchant(0, 5, 17, 5) 
> / Actor:addEnchant(0, 5, 18, 5) Actor:addEnchant(0, 5, 19, 5) 
> / Actor:addEnchant(0, 5, 10, 5) Actor:addEnchant(0, 5, 11, 5) 
> / Actor:addEnchant(0, 5, 15, 5) Actor:addEnchant(0, 5, 26, 3) 
> / Actor:addEnchant(0, 5, 25, 5) Actor:addEnchant(0, 5, 10, 5)
> / Actor:addEnchant(0, 5, 13, 5) Actor:addEnchant(0, 5, 14, 1) 
> / Actor:addEnchant(0, 5, 15, 5) Actor:addEnchant(0, 5, 27, 1) 
> ```
> ```
> / Actor:addEnchant(0, 5, 28, 1)
> ```
>
> --第一个参数0为玩家迷你号

### 区域平地 (类地形编辑器功能)
> [!TIP|style:flat]
> ```
> /x,y,z=uinx,uiny,uinz --设置起始位置
> ```
>
>--设置起始位置
>
> ```
> /Area:fillBlockAreaRange({x=x,y=y,z=z},{x=uinx,y=uiny,z=uinz},1,0)  --创建方块
> ```
>
> --创建方块
>
> ```
> /Area:clearAllBlockAreaRange({x=x,y=y,z=z},{x=uinx,y=uiny,z=uinz},100)  --销毁方块
> ```
>
> --销毁方块
>
>
> ```
> /Area:DestroyBlockAreaRange({{x=x,y=y,z=z},{x=uinx,y=uiny,z=uinz},100)  --破坏方块
> ```
>
> --破坏方块
>
> ```
> /Area:replaceAreaRangeBlock({x=x,y=y,z=z},{x=uinx,y=uiny,z=uinz},3,100,0)  --替换方块
> ```
>
> --替换方块
>
> ```
> /Area:fillBlockAreaRange({x=x,y=y-1,z=z},{x=uinx,y=uiny-1,z=uinz},1,0)  --脚下创建方块
> ```
> --脚下创建方块
> ```
> /Area:clearAllBlockAreaRange({x=x,y=y-1,z=z},{x=uinx,y=uiny-1,z=uinz},100)  --脚下销毁方块
> ```
> --脚下销毁方块
> ```
> /Area:DestroyBlockAreaRange({{x=x,y=y-1,z=z},{x=uinx,y=uiny-1,z=uinz},100)  --脚下破坏方块
> ```
> --脚下破坏方块
> ```
> /Area:replaceAreaRangeBlock({x=x,y=y-1,z=z},{x=uinx,y=uiny-1,z=uinz},3,100,0)  --替换脚下方块
> ```
> --替换脚下方块
>
> --使用时请先设置起始位置，创建方块、销毁方块、替换方块指令为终点位置，打完终点位置指令即可对角线填充、替换、破坏等
>
> --第一个参数1为方块id
>
> --第二个参数0为方块data
>
> --100为销毁方块的id，0为销毁全部方块


### 指定位置生成生物 
> [!TIP|style:flat]
> ```
> /World:spawnCreature(x,y,z,actorid,num)
> ```
>
>
> --第一到三个参数为x y z坐标
>
> --第四个参数为生物ID
>
> --第五个参数为数量

### 清理生物 
> [!TIP|style:flat]
> ```
> /Actor:clearActorWithId(3400,false)
> ```
> --第一个参数为生物ID 
>
> --第二个参数为 true代表掉落 false为不掉落

### 清理海鸥 
> [!TIP|style:flat]
> ```
> /Actor:clearActorWithId(3622,false)
> ```
> --执行后会清理地图内所有海鸥

### 清理怪物 
> [!TIP|style:flat]
> ```
> /for i=3101,3199 do Actor:clearActorWithId(i,false) end for a=3921,3936 do Actor:clearActorWithId(a,false) end
> ```
>
> --执行后会清理地图内所有野人等怪物

### 获取蓝图 
> [!TIP|style:flat]
> ```
> /Player:gainItems(uin,1062,64,1) Player:gainItems(uin,1063,1,1) Player:gainItems(uin,11806,1,1)
> ```
>
>
> --执行后会在背包添加区域方块方块*64 蓝图工作台*1 皮革卷轴*1


### 获取蓝图(模组版) 
> [!TIP|style:flat]
> ```lua
> local lt={1062,1063,11806}
> for i=1,#lt do
>   if i == 1062 then
>       Player:gainItems(uin,lt[i],64,1)
>   else
>       Player:gainItems(uin,lt[i],1,1)
>   end
> end
> ```
>
>
> --执行后会在背包添加区域方块方块*64 蓝图工作台*1 皮革卷轴*1


### 复制区域范围内方块到另一个区域 
> [!TIP|style:flat]
> ```
> /Area:cloneAreaRange({x=0,y=3,z=0},{x=5,y=7,z=5},{x=0,y=10,z=0})
> ```
>
> --复制两点之间范围内的方块到另一位置
>
> --前两个参数为范围的起点和终点坐标组成的表
>
> --后一个参数为要复制到的范围起点坐标





### 指定位置批量生成方块 
> [!TIP|style:flat]
> ```
> /s={{1,1,1,100,0},{1,2,1,100,0}}
> ```
> --数据示例s={{x,y,z,方块ID,data},{x,y,z,方块ID,data}}
> ```
> /for k = #s, 1, -1 do Block:setBlockAll(uinx + s[k][1], uiny + s[k][2], uinz + s[k][3], s[k][4], s[k][5])end
> ```
> --生成方块

### 音乐播放
> [!TIP|style:flat]
> #### 放歌 
>
> ```
> /Actor:playSoundEffectById(0,10713,100,1,false)
> ```
>
> #### 停止 
>
> ```
> /Actor:stopSoundEffectById(0,10713)
> ```
>
> #### 放歌 
>
> ```
> /Trigger.PlayerGroup:playMusic(Trigger.World:getAllPlayers(), -1706440059, 100, 1, false)
> ```
>
> #### 停止 
>
> ```lua
> /Trigger.PlayerGroup:stopMusic(Trigger.World:getAllPlayers(), 10015)
> ```
>
> --第一个参数为玩家迷你号，0是房主
>
> --第二个参数为音乐ID自定义音乐格式 -音乐id
>
> --第三个参数为音量
>
> --第四个参数为音调
>
> --第五个参数为是否循环 false为不循环true为循环

### ！以下指令需要下载图形扩展插件包来运行
> [!TIP|style:flat]
> 
> ```
> /竖圆(uinx, uiny, uinz, 1, 5)  
> ```
> --第一到三参数分别为x,y,z坐标 第四个参数为方块id 第五个参数为半径
> 
> ```
> /圆(uinx, uiny, uinz, 1, 5)  
> ```
> --第一到三参数分别为x,y,z坐标 第四个参数为方块id 第五个参数为半径
> 
> ```
> /正方形(uinx, uiny, uinz, 1, 5)  
> ```
> --第一到三参数分别为x,y,z坐标 第四个参数为方块id 第五个参数为边长
> 
> ```
> /长方形(uinx, uiny, uinz, 1, 8, 5)  
> ```
> --第一到三参数分别为x,y,z坐标 第四个参数为方块id 第五个参数为长度 第六个参数为宽度
> 
> ```
> /三角形(uinx, uiny, uinz, 1, 8)  
> ```
> --第一到三参数分别为x,y,z坐标 第四个参数为方块id 第五个参数为底边长度
> 
> ```
> /梯形(uinx, uiny, uinz, 1, 4, 8, 5)  
> ```
> --第一到三参数分别为x,y,z坐标 第四个参数为方块id 第五个参数为上底长度 第六个参数为下底长度 第七个参数为高度
> ```
> /五角星(uinx, uiny, uinz, 1, 5)  
> ```
> --第一到三参数分别为x,y,z坐标 第四个参数为方块id 第五个参数为大小
> 
> ```
/像素字(uinx,uiny,uinz,101,"团梦秋") 
> ```
> --第一到三参数分别为x,y,z坐标 第四个参数为方块id 第五个参数为要生成的字
> 
> ```
/显示图片(uinx,uiny,uinz,1679217558,1,100) 
> ```
> --第一到三参数分别为x,y,z坐标 第四个参数为图片id 第五个参数为图片大小1为图片默认大小 第六个参数为不透明度默认为100不透明

### ！以下指令需要下载蓝图扩展插件包Beta来运行
> [!TIP|style:flat]
> ```
> /x,y,z=uinx,uiny,uinz  --设置起始位置
> ```
>
>
>
> ```
> /复制(x, y, z, uinx, uiny, uinz)  
> ```
>
>
> --设置终点位置并开启复制 建筑名字可以自定义
>
> ```
> /复制(x, y, z, uinx, uiny, uinz,"名字")
> ```
>
> 或
>
> ```
> /起始位置()
> ```
>
>
>
> ```
> /终点位置()
> ```
>
> 或
> /终点位置(uinx, uiny, uinz)
> --设置终点位置并开启复制 建筑名字可以自定义
>
> ```
> /终点位置(uinx, uiny, uinz,"名字")
> ```
>
>
>
> ```
> /粘贴蓝图()
> ```
>
> --获取蓝图方块通过蓝图生成 如果设置了名字用
?
> ```
> /粘贴蓝图("名字")
> ```
>
> --在当前位置直接生成仅房主可用
>
> ```
> /生成蓝图()
> ```
>
> --在当前位置直接生成仅房主可用 如果设置了名字用
>
> ```
> /生成蓝图("名字")
> ```



更多api前往https://www.qiugf.cn/kfz/#/miniapi/ 查询
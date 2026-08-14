### 变身代码生成器
方法1
> [!TIP|style:flat]
>1. 下载安装[IntelliJ IDEA ](https://www.jetbrains.com/idea/)
>2. 安装[Java-jdk20](https://www.oracle.com/java/technologies/downloads/)
>3. 配置[Java环境变量](https://blog.csdn.net/qq_38436214/article/details/105071088)
>4. 运行代码复制粘贴到迷你地图的脚本选项里,聊天框输入model模型id 即可使用

方法2
> [!TIP|style:flat]
>1. 使用[在线Java编译器](https://c.runoob.com/compile/10/)
>2. 运行代码复制粘贴到迷你地图的脚本选项里,聊天框输入model模型id 即可使用


```java
//团梦秋制作禁止盗取代码，使用代码请勿删除此注释
public class bianshen {
    public static void main(String[] args) {
        System.out.println("local function Game(event)");
            for (int i = 0; i < 1001; i++) {
                System.out.println("if event.content == "+"\"model"+i+"\"then");
                System.out.println("Chat: sendSystemMsg(\"#cAAFFFF设#cAAEEFF置#cAADDFF外#cAACCFF观#cAABBFF为#R"+i+"\")");
                System.out.println("Actor:changeCustomModel(event.eventobjid,[[skin_"+i+"]])");
                System.out.println("end");
                System.out.println("");
        System.out.println("end");
        System.out.println("ScriptSupportEvent:registerEvent([=[Player.InputContent]=], Game)");
    }
    }
}
```

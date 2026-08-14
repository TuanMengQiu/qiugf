
//获取本地设置的Snippet
function GetSnippetText() {
	var snippet = "\n\
snippet local 创建变量\n\
	local ${1:val} = 0\n\
snippet local 创建空表\n\
	local ${1:tab}= {} \n\
snippet function 创建函数\n\
	function ${1:game}(obj) \n\
		${2:--函数体}\n\
	end\n\
snippet if 条件语句\n\
	if ${1:true} then\n\
		${2:--如果条件为真的执行体}\n\
	end\n\
snippet if.else条件语句\n\
	if ${1:true} then\n\
		${2:--如果条件为真的执行体}\n\
	else\n\
		${3:--如果条件为假的执行体}\n\
	end\n\
snippet for 循环语句\n\
	for i = 0 ,${1:10} do\n\
		--循环体\n\
		print(i)\n\
	end\n\
snippet for pairs迭代器语句\n\
	for k ,v in pairs(${1:tab}) do\n\
		--循环体\n\
		print(k,v)\n\
	end\n\
snippet while 循环语句\n\
	${1:val} = 0\n\
	while ${2:val < 5} do\n\
		${3:--循环直到val为假}\n\
		${4:val = val + 1}\n\
	end\n\
snippet repeat 循环语句\n\
	${1:val} = 0\n\
	repeat\n\
		${2:--循环直到val为假}\n\
		${3:val = val + 1}\n\
	until ${4:val > 5}\n\
snippet math.sin三角函数,正弦\n\
	math.sin(${1:deg})\n\
snippet math.asin反正弦\n\
	math.asin(${1:rad})\n\
snippet math.cos余弦\n\
	math.cos(${1:deg})\n\
snippet math.acos反余弦\n\
	math.acos(${1:rad})\n\
snippet math.tan正切\n\
	math.tan(${1:deg})\n\
snippet math.atan反正切\n\
	math.atan(${1:rad})\n\
snippet math.exp取e的x次方\n\
	math.exp(${1:x})\n\
snippet math.log计算x自然对数\n\
	math.log(${1:x})\n\
snippet math.log10计算10为底，x的对数\n\
	math.log(${1:x})\n\
snippet math.frexp将val拆成x*(2^y)的形式\n\
	math.frexp(${1:val})\n\
snippet math.ldexp计算x*(2^y)\n\
	math.ldexp(${1:x},y)\n\
snippet math.pi圆周率\n\
	math.pi\n\
snippet math.abs取绝对值\n\
	math.abs(${1:val})\n\
snippet math.pow幂运算\n\
	math.pow(${1:m},n)\n\
snippet math.sqrt开平方\n\
	math.sqrt(${1:m})\n\
snippet math.mod取模\n\
	math.mod(${1:val1},val2)\n\
snippet math.modf取整数、小数\n\
	math.modf(${1:float})\n\
snippet math.rad角度转弧度\n\
	math.rad(${1:val})\n\
snippet math.deg弧度转角度\n\
	math.deg(${1:val})\n\
snippet math.floor向上取整\n\
	math.floor(${1:val})\n\
snippet math.ceil向下取整\n\
	math.ceil(${1:val})\n\
snippet math.max取最大值\n\
	math.max(${1:str})\n\
snippet math.min取最小值\n\
	math.min(${1:str})\n\
snippet math.randomseed随机数种子\n\
	math.randomseed(os.time())\n\
snippet math.random取随机数（0-1）\n\
	math.random()\n\
snippet math.random取随机数（0-n）\n\
	math.random(${1:n})\n\
snippet math.random取随机数（m-n）\n\
	math.random(${1:m},n)\n\
snippet table.insert末尾插入\n\
	table.insert(${1:tab}, ${2:val})\n\
snippet table.insert在第n位插入\n\
	table.insert(${1:tab},${2:n},${3:val})\n\
snippet table.remove删除末尾\n\
	table.remove(${1:tab})\n\
snippet table.remove删除第n位的元素\n\
	table.remove(${1:tab},n)\n\
snippet table.concat连接字符串\n\
	table.concat(${1:tab})\n\
snippet table.concat连接字符串，指定连接符\n\
	table.concat(${1:tab},',')\n\
snippet table.concat连接字符串，指定索引和连接符\n\
	table.concat(${1:tab},',',m,n)\n\
snippet table.sort排序↑\n\
	table.sort(${1:tab})\n\
snippet table.sort排序↓\n\
	table.sort(${1:tab}, function (a, b) if a > b then return true end end)  --排序tab内元素，z-a，降序\n\
snippet OS库 clock获取cpu近似值\n\
	os.clock() --返回CPU运行的近似值\n\
snippet OS库 time时间\n\
	os.time() --返回从1070.1.1到当前的秒数\n\
snippet OS库 difftime返回时间差\n\
	os.difftime(m,n) --返回m-n之间的时间差，m、n可以用os.time()获取\n\
snippet OS库 date时间列表\n\
	os.date('*t') --返回当前时间的列表\n\
snippet OS库 date字符串参数\n\
	--%a  一星期中天数的简写Wed）\n\
	--%A  一星期中天数的全称（Wednesday）\n\
	--%b  月份的简写（Sep）\n\
	--%B  月份的全称（September）\n\
	--%c  日期和时间（09/16/98 23:48:10）\n\
	--%d  一个月中的第几天[0 ~ 31]\n\
	--%H  24小时制中的小时数[00 ~ 23]\n\
	--%I  12小时制中的小时数[01 ~ 12]\n\
	--%j  一年中的第几天[01 ~ 366]\n\
	--%M  分钟数[00 ~ 59]\n\
	--%m  月份数[01 ~ 12]\n\
	--%P  上午(am) 或 下午(pm)\n\
	--%S  秒数[00 ~ 59]\n\
	--%w  一星期中的第几天[0 ~ 6 = 星期天 ~ 星期六]\n\
	--%W　一年中的第几个星期0 ~ 52\n\
	--%x  日期（09/16/98）\n\
	--%X  时间（23:48:10）\n\
	--%y  两位数的年份[00 ~ 99]\n\
	--%Y  完整的年份\n\
	--%%  字符串'%'\n\
snippet string.len 长度\n\
	string.len(${1:str}) --返回字符串长度（不支持中文）\n\
snippet string.sub 截取字符串内容\n\
	string.sub(${1:str},m,n) --返回str中m-n位的内容\n\
snippet string.rep 重复\n\
	string.rep(${1:str},n) --重复n次str，并返回结果\n\
snippet string.lower 转换小写字母\n\
	string.lower(${1:str}) --str中的大写转为小写\n\
snippet string.upper 转换大写字母\n\
	string.upper(${1:str}) --str中的小写转为大写\n\
snippet string.char 转换字符\n\
	string.char(${1:ASCII}) --ASCII码转为字符\n\
snippet string.byte 转换ASCII码\n\
	string.byte(${1:str},n) --返回str中第n位字符对应的ASCII码\n\
snippet string.reverse 反转字符串\n\
	string.reverse(${1:str}) --反转字符串\n\
snippet string.format 格式化字符串\n\
	string.format(${1:val},str) --按照val参数格式化str\n\
snippet string.find 字符串查找\n\
	string.find(${1:str},n,1) --查找str中是否存在n，并返回具体位置\n\
snippet string.gmatch 字符串查找\n\
	string.gmatch(${1:str},st) --迭代器查找str中是否存在st，如果存在则返回st\n\
snippet string.match 字符串配对\n\
	string.match(${1:st1},st2) --只查找st1中第一个与st2匹配的字符串并返回\n\
snippet string.gsub 字符串替换\n\
	string.gsub(${1:str},m,n,num) --把str中的m替换成n，替换num次\n\
snippet string库 字符串配对转译码\n\
	--.(点): 与任何字符配对\n\
	--%a: 与任何字母配对\n\
	--%c: 与任何控制符配对\n\
	--%d: 与任何数字配对\n\
	--%l: 与任何小写字母配对\n\
	--%p: 与任何标点(punctuation)配对\n\
	--%s: 与空白字符配对\n\
	--%u: 与任何大写字母配对\n\
	--%w: 与任何字母/数字配对\n\
	--%x: 与任何十六进制数配对\n\
	--%z: 与任何代表0的字符配对\n\
	--%x(此处x是非字母非数字字符): 与字符x配对. 主要用来处理表达式中有功能的字符(^$()%.[]*+-?)的配对问题, 例如%%与%配对\n\
	--[数个字符类]: 与任何[]中包含的字符类配对. 例如[%w_]与任何字母/数字, 或下划线符号(_)配对\n\
	--[^数个字符类]: 与任何不包含在[]中的字符类配对. 例如[^%s]与任何非空白字符配对\n\
snippet string库 字符串格式化转译码\n\
	--%s - 接受一个字符串并按照给定的参数格式化该字符串\n\
	--%d - 接受一个数字并将其转化为有符号的整数格式\n\
	--%f - 接受一个数字并将其转化为浮点数格式(小数)，默认保留6位小数，不足位用0填充\n\
	--%x - 接受一个数字并将其转化为小写的十六进制格式\n\
	--%X - 接受一个数字并将其转化为大写的十六进制格式\n\
	--%c - 接受一个数字,并将其转化为ASCII码表中对应的字符\n\
	--%d, %i - 接受一个数字并将其转化为有符号的整数格式\n\
	--%o - 接受一个数字并将其转化为八进制数格式\n\
	--%u - 接受一个数字并将其转化为无符号整数格式\n\
	--%x - 接受一个数字并将其转化为十六进制数格式,使用小写字母\n\
	--%X - 接受一个数字并将其转化为十六进制数格式,使用大写字母\n\
	--%e - 接受一个数字并将其转化为科学记数法格式,使用小写字母e\n\
	--%E - 接受一个数字并将其转化为科学记数法格式,使用大写字母E\n\
	--%f - 接受一个数字并将其转化为浮点数格式\n\
	--%g(%G) - 接受一个数字并将其转化为%e(%E,对应%G)及%f中较短的一种格式\n\
	--%q - 接受一个字符串并将其转化为可安全被Lua编译器读入的格式\n\
	--%s - 接受一个字符串并按照给定的参数格式化该字符串\n\
	";
	return snippet;
}

//获取本地设置的Completer
function GetServiceFuncs() {
	var jsonObj = [
	]
	return jsonObj
}

function GetGlobalVars() {
	var jsonObj = [
	]
	return jsonObj
}

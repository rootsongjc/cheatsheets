---
title: sed
category: Linux
layout: 2017/sheet
intro: |
  sed命令行格式为：sed [-nefri] ‘command’ 输入文本   
---

## Sed

### 常用选项

命令行参数

| 参数   | 用法                                       |
| ---- | ---------------------------------------- |
| -n   | 使用安静(silent)模式。在一般 sed 的用法中，所有来自 STDIN的资料一般都会被列出到屏幕上。但如果加上 -n 参数后，则只有经过 sed 特殊处理的那一行(或者动作)才会被列出来。 |
| -e   | 直接在指令列模式上进行 sed 的动作编辑；                   |
| -f   | 执行 -f filename 文件内的 sed 命令               |
| -r   | sed 的扩展正规表示法的语法。(预设是基础正规表示法语法)           |
| -i   | 直接修改读取文件内容，而不是输出到屏幕上                     |

### 命令字解析

| 命令字  | 用法                                       |
| ---- | ---------------------------------------- |
| a    | 新增， a 的后面可以接字串，而这些字串会在新的一行出现(目前的下一行)     |
| c    | 取代， c 的后面可以接字串，这些字串可以取代 n1,n2 之间的行       |
| d    | 删除，因为是删除，所以 d 后面通常不接任何东西；                |
| i    | 插入， i 的后面可以接字串，而这些字串会在新的一行出现(目前的上一行)；    |
| p    | 列印，亦即将某个选择的资料印出。通常 p 会与参数 sed -n 一起运作    |
| s    | 替换，替换输入中的内容，通常这个 s 的动作可以搭配正规。例如 1,20s/old/new/g |

## 示例

### 显示某行

```bash
[root@localhost ruby] # sed -n '1p' ab           #显示第一行 
[root@localhost ruby] # sed -n '$p' ab           #显示最后一行
[root@localhost ruby] # sed -n '1,2p' ab        #显示第一行到第二行
[root@localhost ruby] # sed -n '2,$p' ab        #显示第二行到最后一行
```

### 使用模式进行查询

```bash
[root@localhost ruby] # sed -n '/ruby/p' ab    #查询包括关键字ruby所在所有行
[root@localhost ruby] # sed -n '/$/p' ab        #查询包括关键字$所在所有行，使用反斜线\屏蔽特殊含义
```

### 替换

替换一行或者多行

```bash
[root@localhost ruby] # sed '1c Hi' ab                #第一行代替为Hi
Hi
ruby is me,welcome to my blog.
end
[root@localhost ruby] # sed '1,2c Hi' ab             #第一行到第二行代替为Hi
Hi
end
```

### 替换一行中的某部分

格式：sed 's/要替换的字符串/新的字符串/g'   （要替换的字符串可以用正则表达式）

```bash
[root@localhost ruby] # sed -n '/ruby/p' ab | sed 's/ruby/bird/g'    #替换ruby为bird
[root@localhost ruby] # sed -n '/ruby/p' ab | sed 's/ruby//g'        #删除ruby
```

### 插入

在文件ab中最后一行直接输入"bye"

```bash
[root@localhost ruby] # sed -i '$a bye' ab         
[root@localhost ruby]# cat ab
Hello!
ruby is me,welcome to my blog.
end
bye
```


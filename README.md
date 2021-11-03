
# 介绍
这是协助安全工作人员快速查找目标敏感信息泄漏的chrome插件工具。
![image](https://github.com/aetkrad/SearchHack/blob/main/images/1.png?raw=true)

# 开发原因

- 搜索敏感信息时要一直复制规则，很麻烦。
- 使用脚本爬取可能需要代理池等反爬虫手段
- 通过人工审查能更精确。
# 使用教程
- 按F12点击SearchHack
![image](https://github.com/aetkrad/SearchHack/blob/main/images/2.png?raw=true)
- 选择搜索引擎并填目标
![image](https://github.com/aetkrad/SearchHack/blob/main/images/3.png?raw=true)

- 选择搜索条件
搜索条件可以累加，同时还可以点清空进行一键清空。
![image](https://github.com/aetkrad/SearchHack/blob/main/images/4.png?raw=true)

- 点击搜索
![image](https://github.com/aetkrad/SearchHack/blob/main/images/5.png?raw=true)
页面会自动跳转
![image](https://github.com/aetkrad/SearchHack/blob/main/images/6.png?raw=true)


# 功能介绍
目前已经集合Google、Baidu、Bing、Github引擎以及常用的搜索规则。
## intitle
- 目录遍历：intitle:index.of
- phpinfo: intitle:phpinfo
- phpmyadmin：intitle:phpmyadmin
## ext(只有google支持)
- 备份文件: ext:bk | ext:bak| ext:bkp | ext:old | ext:backup
- 数据库: ext:dbf | ext:sql | ext:mdb
- 配置文件: ext:conf | ext:cnf | ext:cfg | ext:inf | ext:ini | ext:ora | ext:rdp | ext:xml | ext:txt
- 日志文件: ext:log
- 文档文件: ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv
## intext
- SQL报错: intext:%22sql syntax near%22 | intext:%22syntax error has occurred%22 | intext:%22incorrect syntax near%22 | intext:%22unexpected end of SQL command%22 | - intext:%22Warning: mysql_connect()%22 | intext:%22Warning: mysql_query()%22 | intext:%22Warning: pg_connect()%22
- 查询系统：intext:管理 | intext:后台 | intext:登陆 | intext:用户名 | intext:密码 | intext:默认密码 | intext:验证码 | intext:系统 | intext:admin | intext:login | intext:sys | intext:management | intext:password | intext:username

## inurl
- 后台地址：inurl:login | inurl:admin | inurl:manage | inurl:member | inurl:admin_login | inurl:login_admin | inurl:system | inurl:login | inurl:user | inurl:main | inurl:cms
- 上传地址：inurl:file | inurl:load | inurl:editor | inurl:Files
- SQL注入：inurl:?id= | inurl:?mid= | inurl:?ID= | 
- 编辑器：inurl:ewebeditor | inurl:editor | inurl:uploadfile | inurl:eweb | inurl:edit
- struts：inurl:.action | inurl:.do
## filetype
- filetype:xls
- filetype:pdf
- filetype:doc
- filetype:ppt
- filetype:rtf

## github
- 版权所有：in:file Copyright
- 开发语言：language:
- IP地址：in:file ip
- 主机地址：in:file host
- 域名：in:file domain
- URL地址：in:file url
- 代理：in:file proxy
- 认证：in:file auth
- 内部：in:file 内部
- 邮箱：
   * in:file smtp
   * in:file email
- 数据库：
   * in:file sa password
   * in:file root password
   * in:file User ID=’sa’;Password
   * in:file jdbc
- 服务：
   * ftp：in:file ftp password
   * svn：in:file svn username password

- 密码：
   * in:file password
   * in:file passwd
   * in:file pass
   * in:file pwd
- 密钥：
  * in:file public_key
  * in:file publickey
  * in:file private_ke
  * in:file accessKeyId accessKeySecret
- 敏感文件：
  * config: filename:config
  * credential: filename:credential
  * properties: filename:properties
  * backup: filename:backup
  * dump: filename:dump
  * password: filename:password
  * secret: filename:secret
  * setting: filename:setting
  * log: filename:log
  * sql: filename:sql

- 文件路径（下拉菜单过长未添加）：
  * _rsa
  * _dsa
  * _ed25519
  * _ecdsa
  * bash_history
  * zsh_history
  * mysql_history
  * psql_history
  * pgpass
  * dbeaver-data-sources.xml
  * muttrc
  * s3cfg
  * ovpn
  * bashrc
  * zshrc
  * bash_profile
  * zsh_profile
  * bash_aliases
  * zsh_aliases
  * secret_token.rb
  * schema.rb
  * database.yml
  * kdb
  * agilekeychain
  * keychain
  * pcap
  * private.key
  * jenkins.plugins.publish_over_ssh.BapSshPublisherPlugin.xml
  * htpasswd
  * netrc
  * content.xml
  * pubxml
  * Favorites.plist
  * proftpdpasswd
  * robomongo.json
  * filezilla.xml
  * recentservers.xml
  * ventrilo_srv.ini
  * dockercfg
  * npmrc

# 声明
本程序仅供于学习交流，请使用者遵守《中华人民共和国网络安全法》，勿将此脚本用于非授权的测试，脚本开发者不负任何连带法律责任。
"""
发送微信
"""

import itchat

itchat.auto_login()

itchat.send('Hello, filehelper', toUserName='filehelper')



#爬取自己好友相关信息， 返回一个json文件
friends = itchat.get_friends(update=True)[0:]


#想给谁发信息，先查找到这个朋友
users = itchat.search_friends(name=u'通讯录备注名')
#找到UserName
userName = users[0]['UserName']
#然后给他发消息
itchat.send('hello',toUserName = userName)
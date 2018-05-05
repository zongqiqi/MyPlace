"""
发送微信
"""

import itchat

itchat.auto_login()

itchat.send('Hello, filehelper', toUserName='filehelper')
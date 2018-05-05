"""
发送SMS短信

settings为同目录下的一个配置文件，主要是账户信息，密码，进入https://www.twilio.com申请即可
"""

from settings import account_sid,auth_token,From,MyNumber,XiaoNumber

from twilio.rest import Client

def sendsms(number=mynumber,text="Hello World!"):
    """
    发送者的号码随机，number为收短信者的号码，短信有前缀标志，收信人的号码需验证
    https://www.twilio.com/console/phone-numbers/verified：添加号码
    """
    if number=="xiao":
        number=XiaoNumber
    client = Client(account_sid, auth_token)
    message = client.messages.create(
    to="+86{0}".format(number), 
    from_=From,
    body=text)
    print(message.sid)

if __name__ == '__main__':
    sendsms()
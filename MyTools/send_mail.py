"""
发送邮件

"""
import smtplib
from email.mime.text import MIMEText
from email.utils import formataddr

from settings import my_sender,my_pass,my_user

def mail(to=my_user,sub="宗七七的发送邮件测试",text="填写邮件内容"):
    ret=True
    try:
        msg=MIMEText(text,'plain','utf-8')
        msg['From']=formataddr(["宗七七",my_sender])  # 括号里的对应发件人邮箱昵称、发件人邮箱账号
        msg['To']=formataddr(["client",to])              # 括号里的对应收件人邮箱昵称、收件人邮箱账号
        msg['Subject']=sub                # 邮件的主题，也可以说是标题

        server=smtplib.SMTP_SSL("smtp.qq.com", 465)  # 发件人邮箱中的SMTP服务器，端口是25
        server.login(my_sender, my_pass)  # 括号中对应的是发件人邮箱账号、邮箱密码
        server.sendmail(my_sender,[to,],msg.as_string())  # 括号中对应的是发件人邮箱账号、收件人邮箱账号、发送邮件
        server.quit()  # 关闭连接
    except Exception as e:  # 如果 try 中的语句没有执行，则会执行下面的 ret=False
        ret=False
        print(e)
    print(ret)
    return ret


if __name__ == '__main__':
    mail(to="544136329@qq.com",sub="test222222222",text="发疯的宗小七")
import requests


##获取登录cookies
login_url='https://passport.mysteel.com/loginJson.jsp?callback=loginJsn&my_username=18505518070&my_password=qgswzb&callbackJsonp=loginJsn&jumpPage=http%3A%2F%2Fwww.mysteel.com%2F&site=www.mysteel.com&my_rememberStatus=true&_=1524219625362'
se=requests.Session()
res=se.get(login_url)


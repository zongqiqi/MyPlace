import requests,os

c=r'''initpath=C%3A%5CUsers%5CAdministrator%5CDesktop; GTP_IdServer_LangID=2052; portal_default_menu_name_4563=%E5%8D%8F%E5%90%8C%E5%8A%9E%E5%85%AC; ASP.NET_SessionId=kxmqrrvmcfynb0ppj2l3pcyl; .ASPXAUTH=E312C692E2193ADE2A8A719A0F8C536102783A666299DFBCF24837FACD37E2BA4636A02A2BC4B74283C0D2F3F7AE621F11EE67D71BC2E5E63D0B9935ADB936172CDB3B0D4DB67FDA50A24750B75217936B22A3D97CAB954B10C74CB242BA7116ACFBF7E984FD5F27C63947B5B98C46A34017442AAA3FCB35EAF441F43FC8FAB0A1750699C50CBF512A33F61A1DC10F27'''
h=r'''Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Encoding:gzip,deflate,sdch
Accept-Language:zh-CN,zh;q=0.8
Cache-Control:no-cache
Connection:keep-alive
Host:210.22.120.98:8888
Pragma:no-cache
User-Agent:Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36'''

def str_cookie(raw_cookie):
    """将str_cookie转换为键值对cookie"""
    cookie={}
    splited=raw_cookie.split(';')
    for item in splited:
        k,v=item.split('=')
        cookie[k.strip()]=v.strip()
    return cookie
def str_header(raw_header):
    header={}
    splited=raw_header.split('\n')
    for item in splited:
        k,v=item.split(':',1)
        header[k.strip()]=v.strip()
    return header
    

def write_html(html,name='1.html'):
    filename=os.path.join('response_html/',name)
    with open(filename,'w') as f:
        f.write(html)



cookies=str_cookie(c)
headers=str_header(h)
url='http://210.22.120.98:8888/GB/LK/IRS/InfosToIm/InfosToIm.aspx'
res=requests.get(url,headers=headers,cookies=cookies)
print(res.text)

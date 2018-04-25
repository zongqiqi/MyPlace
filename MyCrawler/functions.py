"""Crawler常用函数"""
import os

k=r'''initpath=C%3A%5CUsers%5CAdministrator%5CDesktop; GTP_IdServer_LangID=2052; portal_default_menu
_name_4563=%E5%8D%8F%E5%90%8C%E5%8A%9E%E5%85%AC; ASP.NET_SessionId=kxmqrrvmcfynb0ppj2l3pcyl; .ASPXAUTH
=E312C692E2193ADE2A8A719A0F8C536102783A666299DFBCF24837FACD37E2BA4636A02A2BC4B74283C0D2F3F7AE621F11EE6
7D71BC2E5E63D0B9935ADB936172CDB3B0D4DB67FDA50A24750B75217936B22A3D97CAB954B10C74CB242BA7116ACFBF7E984FD
5F27C63947B5B98C46A34017442AAA3FCB35EAF441F43FC8FAB0A1750699C50CBF512A33F61A1DC10F27'''

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

def write_html(html):
    filename=os.path.join('response_html/','1.html')
    with open(filename,'w') as f:
        f.write(html)

headers=[
    'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50',
    'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50',
    'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0',
    'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko',
    'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0',
    'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 Firefox/4.0.1',
    'Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox/4.0.1',
    'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11',
    'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.8.131 Version/11.11',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Maxthon 2.0)',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; TencentTraveler 4.0)',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; The World)',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SE 2.X MetaSr 1.0; SE 2.X MetaSr 1.0; .NET CLR 2.0.50727; SE 2.X MetaSr 1.0)',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; 360SE)',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Avant Browser)',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',
    ]
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
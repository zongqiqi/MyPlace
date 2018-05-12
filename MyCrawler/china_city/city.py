import os
import time
import random
import requests
from lxml import etree
import pickle

init_url="http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2016/"
headers={
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 SE 2.X MetaSr 1.0',
    'Host':'www.stats.gov.cn',
    'Origin':'http://www.stats.gov.cn',
    'Cookie': 'AD_RS_COOKIE=20080918',
    'Pragma':'no-cache',
    'Referer':'http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2016/',
    'Accept-Language':'zh-CN,zh;q=0.8',
    'Accept':'*/*',
    'Accept-Encoding':'identity;q=1, *;q=0',
    'Range':'bytes=0-',
    'Upgrade-Insecure-Requests':'1',
    'Cache-Control':'no-cache',
    'Connection':'keep-alive',
}
def get_provinces():
    """抓取统计局下的省份信息
    结构：table--tr--td"""
    provinces=[]
    html=requests.get(init_url,headers=headers).content
    selector = etree.HTML(html)  
    table=selector.xpath("//table[@class='provincetable']")[0]
    td_node=table.xpath(".//td/a")
    for td in td_node:
        provinces.append(td.text)
    return provinces

def get_citys():
    """抓取统计局下的城市信息"""
    data={}
    html=requests.get(init_url,headers=headers).content
    selector = etree.HTML(html)  
    table=selector.xpath("//table[@class='provincetable']")[0]
    td_node=table.xpath(".//td/a/@href")
    for td in td_node:
        url="http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2016/"+td
        html2=requests.get(url,headers=headers).content
        selector2 = etree.HTML(html2)  
        table2=selector2.xpath("//table[@class='citytable']")[0]
        tr_node=table2.xpath(".//tr[@class='citytr']")
        for tr in tr_node:
            city_code=tr.xpath("./td/a")[0].text
            city_name=tr.xpath("./td/a")[1].text
            data[city_code]=city_name
    city=[v for k,v in data.items()]
    city=list(set(city))
    city.remove('市辖区')
    city.remove('自治区直辖县级行政区划')
    city.append('北京市')
    city.append('上海市')
    city.append('天津市')
    city.append('重庆市')
    return city

if __name__ == '__main__':
    provinces=get_provinces()
    citys=get_citys()

#写数据
    data={}
    data['provinces']=provinces
    data['citys']=citys
    with open('data.txt','wb') as f:
        pickle.dump(data,f)
#读数据
    # with open('data.txt','rb') as f:
    #     data = pickle.load(f)
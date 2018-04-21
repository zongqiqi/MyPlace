import requests
from datetime import datetime

from lxml import etree

from models import Steel,create_database


##获取登录cookies
login_url='https://passport.mysteel.com/loginJson.jsp?callback=loginJsn&my_username=18505518070&my_password=qgswzb&callbackJsonp=loginJsn&jumpPage=http%3A%2F%2Fwww.mysteel.com%2F&site=www.mysteel.com&my_rememberStatus=true&_=1524219625362'
se=requests.Session()
res=se.get(login_url)

citys_url={
    'Nanjing':'http://list1.mysteel.com/market/p-228-15407-----0--------1.html',
    'Hefei':'http://list1.mysteel.com/market/p-228-----010101-0-01010701-------1.html',
    'Shanghai':'http://list1.mysteel.com/market/p-228-15278-----0--------1.html',
    'Beijing':'http://list1.mysteel.com/market/p-228-12911-----0--------1.html',
    'Hangzhou':'http://list1.mysteel.com/market/p-228-15472-----0--------1.html',
    'Jinan':'http://list1.mysteel.com/market/p-228-15480-----0--------1.html',
    'Shenyang':'http://list1.mysteel.com/market/p-228-----010101-0-01050101-------1.html',
    'Liuzhou':'http://list1.mysteel.com/market/p-228-15600-----0--------1.html',
}


class SteelCrawer:
    def __init__(self):
        self.req = requests.Session()

    def login(self):

        login_url='https://passport.mysteel.com/loginJson.jsp?callback=loginJsn&my_username=18505518070&my_password=qgswzb&callbackJsonp=loginJsn&jumpPage=http%3A%2F%2Fwww.mysteel.com%2F&site=www.mysteel.com&my_rememberStatus=true&_=1524219625362'
        self.req.get(login_url)

    def city_data(self,city_page):
        '''给定url，返回当前页的具体页面的时间、url、time'''
        html = requests.get(city_page)
        all_data = []
        html2 = etree.HTML(html.text)
        codes = html2.xpath('//*[@id="articleList"]/ul')
        codes_li = codes[0].xpath("li[not(@class)]")
        for li in codes_li:
            data = li.xpath('a')[0].text
            url = li.xpath('a/@href')[0]
            date1 = li.xpath('span')[0].text.split()
            date2 = ' '.join(date1)
            date = datetime.strptime(date2, '%Y-%m-%d %H:%M')
            all_data.append({'data': data, 'url': url, 'time': date})
        #下一页
        a=html2.xpath('//*[@id="articleList"]/div/a')[-1]
        if a.text=='下一页':
            next_page='http://www.mysteel.com'+a.xpath('@href')[0]
        else:
            next_page=[]
        return all_data,next_page####[{'date':'...','url':'...','time':'...',},...]

    def detail_page_url_list(self,city='Nanjing',pages=5):
        '''根据需要,返回多页面具体页信息'''
        data=[]
        city_url=citys_url[city]
        page_data,next_page=self.city_data(city_url)
        data+=page_data
        for i in range(pages-1):
            if next_page:
                page_data,next_page=self.city_data(next_page)
                data+=page_data
        return data
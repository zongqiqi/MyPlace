import requests
import time
import random
from datetime import datetime
import functools 

from lxml import etree
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

from models import Steel,create_database


##获取登录cookies
# login_url='https://passport.mysteel.com/loginJson.jsp?callback=loginJsn&my_username=18505518070&my_password=qgswzb&callbackJsonp=loginJsn&jumpPage=http%3A%2F%2Fwww.mysteel.com%2F&site=www.mysteel.com&my_rememberStatus=true&_=1524219625362'
# se=requests.Session()
# res=se.get(login_url)

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

#requests请求头
header={
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 SE 2.X MetaSr 1.0',
}

def fail_then_try_again(func):
    """函数运行失败再尝试启动"""
    run_list=[]
    @functools.wraps(func)
    def warps(*args, **kwargs):
        if func in run_list:
            raise ValueError('>Parse<---func must dead,')
        else:
            try:
                li=func(*args, **kwargs)
            except Exception as e:
                run_list.append(func)
                time.sleep(5)
                li=func(*args,**kwargs)
            return li
    return warps

class SteelCrawer:
    def __init__(self,city='Nanjing'):
        """构造函数：登录----数据库初始化"""
        self.req = requests.Session()
        self.login()
        create_database(city)
        engine=create_engine("sqlite:///steel/%s_steel.db"%city,echo=False)  # 不打印数据库存入数据信息
        Session = sessionmaker(bind=engine)
        self.session = Session()

    def login(self):
        '''登录我的钢铁网，获取session及cookies'''
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
            all_data.append({'title': data, 'url': url, 'datetime': date})
        #下一页
        a=html2.xpath('//*[@id="articleList"]/div/a')[-1]
        if a.text=='下一页':
            next_page='http://www.mysteel.com'+a.xpath('@href')[0]
        else:
            next_page=[]
        return all_data,next_page####[{'title':'...','url':'...','datetime':'...',},...]

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

    
    def Parse(self, url):
        """页面解析，获取具体数据"""
        html=self.req.get(url,headers=header).text
        all_list = []
        one_list = []
        tree = etree.HTML(html)
        nodes_tr = tree.xpath('//*[@id="marketTable"]/tr[starts-with(@id,"ctr")]')
        for result in nodes_tr:
            a_td = result.xpath('td')
            for a in a_td:
                if a.text:
                    a1 = a.text.strip()
                else:
                    a1=a.text
                one_list.append(a1)
            ##调整价格为数字类型
            if one_list[4].isdigit():
                one_list[4]=int(one_list[4])
            else:
                one_list[4]=0
                print(url+'    jiage has no digit')
            ##调整涨跌为数字类型
            if one_list[5][1:].isdigit():
                if one_list[5][0]=='+':
                    one_list[5]=int(one_list[5][1:])
                else:
                    one_list[5]=-int(one_list[5][1:])
            else:
                one_list[5]=0
            all_list.append(one_list)
            one_list = []
        return all_list ##date  # [['高线','Ф6.5-10',...],...]

    def store(self,page_list,date):
        """数据存入数据库，存入前检查"""
        if not self.session.query(Steel).filter(Steel.time==date).all():
            for a in page_list:
                steel = Steel(time=date, pingming=a[0], guige=a[
                          1], caizhi=a[2], chandi=a[3], jiage=a[4], zhangtie=a[5], beizhu=a[6])
                self.session.add(steel)
        else:
            print('Data already exists')
            return 
        self.session.commit()
        print('------->> 日期：{}， {} 条数据，存库成功！'.format(date.strftime('%Y-%m-%d %H:%M'),len(page_list)))


def run():
    """试运行"""
    st=SteelCrawer()
    datas=st.detail_page_url_list(pages=2)
    for data in datas:
        url=data['url']
        date=data['datetime']
        detail_list=st.Parse(url)
        time.sleep(random.randint(1, 2))  #休眠
        st.store(detail_list,date)
    print('ALL Complete-------------------------->')
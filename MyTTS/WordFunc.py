"""
注册装饰器

"""
import functools
import jieba
import pickle
import requests
import datetime


def text_split(text):
    """结巴分词，返回集合"""
    if text:
        cut=set(jieba.cut(text)) #结巴分词
        return cut
    else:
        raise TypeError('text is not true')


def get_city(text):
    """查找文字中的城市信息,若text里面没有城市信息，返回ip所在地区"""
    with open('files/city_data.txt','rb') as f:
        city_data = pickle.load(f)
    text_set=text_split(text)
    citys=city_data['citys']
    for text in text_set:
        for city in citys:
            if text in city: 
                print('city：',text)
                return text
            else:
                return ip_city()
def ip_city(ip=None):
    """查询ip地址城市"""
    url="http://int.dpool.sina.com.cn/iplookup/iplookup.php"
    if not ip:
        res=requests.get(url).text
        t=[i for i in res.split('\t') if i]
    return t[-1]


def get_date(text):
    """获取日期"""
    now=datetime.date.today()
    today=now.strftime("%Y-%m-%d")
    yesterday=(now-datetime.timedelta(days=1)).strftime("%Y-%m-%d")
    day_b_4_yesterday=(now-datetime.timedelta(days=2)).strftime("%Y-%m-%d")
    tomorrow=(now+datetime.timedelta(days=1)).strftime("%Y-%m-%d")
    day_after_tomorrow=(now+datetime.timedelta(days=2)).strftime("%Y-%m-%d")

    input_text=text_split(text)
    date_dict={'今天':today,'明天':tomorrow,'后天':day_after_tomorrow,'前天':day_b_4_yesterday,'大后天':day_after_tomorrow}
    input_date=set(date_dict.keys())&input_text
    if input_date:
        return date_dict[list(input_date)[0]]
    return today

TestDict={}
#装饰器，收集函数与参数到TestDict
def TextFunc(text):
    def wrapper(func):
        if isinstance(text,str):
            TestDict[text]=func
        elif isinstance(text,list):
            for t in text:
                TestDict[t]=func
        @functools.wraps(func)
        def _wrapper(*args, **kargs):
            return func(*args, **kargs)
        return _wrapper
    return wrapper
##---------------------------------------------------

@TextFunc('王晓')
def func(text):
    return "王晓是你的好朋友呀"

@TextFunc('开始')
def func(text):
    return "好的"

@TextFunc("地区")
def func(text):
    if text:
        return get_city(text)

if __name__ == '__main__':
    print(TestDict)
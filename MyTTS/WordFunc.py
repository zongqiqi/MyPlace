"""
注册装饰器

"""
import functools
import jieba
import pickle

def get_city(text):
    """查找文字中的城市信息"""
    with open('files/city_data.txt','rb') as f:
        city_data = pickle.load(f)
    text_set=text_split(text)
    citys=city_data['citys']
    for text in text_set:
        for city in citys:
            if text in city: 
                print('city：',t)
                return text

TestDict={}

def text_split(text):
    """结巴分词，返回集合"""
    if text:
        cut=set(jieba.cut(text)) #结巴分词
        return cut
    else:
        raise TypeError('text is not true')

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
    return get_city(text)

if __name__ == '__main__':
    print(TestDict)
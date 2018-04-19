"""
注册装饰器

"""
import functools

from stt_tts import tts_play

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
def func():
    tts_play("王晓是你的好朋友呀")

if __name__ == '__main__':
    print(TestDict)
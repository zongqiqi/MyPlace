"""
图灵机器人调用WebAPI
接口：http://openapi.tuling123.com/openapi/api/v2
参数：
    {
        "reqType":0,
        "perception": {
            "inputText": {
                "text": "附近的酒店"
            },
            "inputImage": {
                "url": "imageUrl"
            },
            "selfInfo": {
                "location": {
                    "city": "北京",
                    "province": "北京",
                    "street": "信息路"
                }
            }
        },
        "userInfo": {
            "apiKey": "",
            "userId": ""
        }
    }
"""
import requests


keys=['d733c517209449fe9572db351880af27',
    '71c49726a6204d1688f00109ab2001a9',
    '325999e2c62a40ffa856d4717a4cebe5',
    '7be68b35e4994f638d7b2f89e9f4970b',
    '3be0dc9b10a04b09ab3e48128883f3a8'
    ]

def tuling(text,loc='安徽省安庆市'):
    """图灵机器人接口 """
    url='http://www.tuling123.com/openapi/api'
    for key in keys:
        data={
            'key':key,
            'info':text,
            'loc':loc,
            'userid':'247876',
        }
        r=requests.post(url,data=data)
        if r.json()['code'] == 100000:
            return r.json()['text']
        elif r.json()['code'] == 40004:
            continue
        else:
            return '图灵识别出现问题（错误码:%s）'%r.json()['code']
    return '今日识别资源全部使用完毕（5k）'


##--------------------------
##录音时停止语音播放，开启语音停止
"""
下载网易云音乐
"""
from Crypto.Cipher import AES
import base64
import requests
import json
import codecs


headers={
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 SE 2.X MetaSr 1.0',
    'Host':'music.163.com',
    'Origin':'http://music.163.com',
    'Cookie': 'appver=1.5.2',
    'Referer': 'http://music.163.com/outchain/player',
    'Pragma':'no-cache',
    'Accept-Language':'zh-CN,zh;q=0.8',
    'Accept':'*/*',
    'Accept-Encoding':'identity;q=1, *;q=0',
    'Range':'bytes=0-',
}
MAX_RETRIES = 20
requests=requests.Session()

def aesEncrypt(text, secKey):
    pad = 16 - len(text) % 16
    text = text + pad * chr(pad)
    encryptor = AES.new(secKey, 2, '0102030405060708')
    ciphertext = encryptor.encrypt(text)
    ciphertext = base64.b64encode(ciphertext)
    return ciphertext

nonce = '0CoJUm6Qyw8W8jud'
# secKey = createSecretKey(16)

#csrf_token值可以为空
# text1='{"id":"579954","ids":"[\\"579954\\"]","limit":10000,"offset":0,"csrf_token":""}'
# text2='{"ids":"[579954]","br":128000,"csrf_token":""}'
secKey='F'*16
# encText = aesEncrypt(str(aesEncrypt(text1, nonce),encoding='utf8'), secKey)
# encText2 = aesEncrypt(str(aesEncrypt(text2, nonce),encoding='utf8'), secKey)

def get_params(number=579954,text=1):
    text1='{"id":"%s","ids":"[\\"%s\\"]","limit":10000,"offset":0,"csrf_token":""}'%(number,number)
    text2='{"ids":"[%s]","br":128000,"csrf_token":""}'%number
    if text==1:
        encText = aesEncrypt(str(aesEncrypt(text1, nonce),encoding='utf8'), secKey)
    else:
        encText = aesEncrypt(str(aesEncrypt(text2, nonce),encoding='utf8'), secKey)
    return encText

def rsaEncrypt():
    #text = text[::-1]
    # rs = int(text.encode('hex'), 16)**int(pubKey, 16) % int(modulus, 16)
    #rs = int(text, 16)**int(pubKey, 16) % int(modulus, 16)
    #return format(rs, 'x').zfill(256)
    return '257348aecb5e556c066de214e531faadd1c55d814f9be95fd06d6bff9f4c7a41f831f6394d5a3fd2e3881736d94a02ca919d952872e7d0a50ebfa1769a7a62d512f5f1ca21aec60bc3819a9c3ffca5eca9a0dba6d6f7249b06f5965ecfff3695b54e1c28f3f624750ed39e7de08fc8493242e26dbc4484a01c76f739e135637c'

def get_detail(music_id=579954):
    """获取音乐信息
    {"songs":[{"name":"恋爱サーキュレーション","id":579954,"position":1,........爱循环"]}],"equalizers":{},"code":200}"""
    url="http://music.163.com/weapi/song/detail"
    data={"params":get_params(number=music_id),"encSecKey":rsaEncrypt()}
    res=requests.post(url,data=data,headers=headers)
    return res.json()

def get_url(music_id=579954):
    """获取音乐url
    print(res['data'][0]['url'])"""
    url="http://music.163.com/weapi/song/enhance/player/url"
    data={"params":get_params(number=music_id,text=2),"encSecKey":rsaEncrypt()}
    res=requests.post(url,data=data,headers=headers)
    return res.json()

def save(music_id=452986458):
    res=get_url(music_id)
    url=res['data'][0]['url']
    print(url)
    data=requests.get(url).content
    name=get_detail(music_id)['songs'][0]['name']
    with open('music/%s.mp4'%name,'wb') as f:
        f.write(data)
res=save()


user_list_url="http://music.163.com/weapi/user/playlist"
play_list_detail_url="http://music.163.com/weapi/v3/playlist/detail"
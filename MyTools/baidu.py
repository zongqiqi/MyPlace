import requests

headers={
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 SE 2.X MetaSr 1.0',
    'Pragma':'no-cache',
    'Accept-Language':'zh-CN,zh;q=0.8',
    'Accept':'*/*',
    'Accept-Encoding':'identity;q=1, *;q=0',
    'Range':'bytes=0-',
}

def get_html(params):
    url='https://baike.baidu.com/item/{}'.format(params)
    res=requests.get(url,headers=headers).content
    return res
get_html('params')
import os
import time
import random
import requests
from lxml import etree


# #weibo
# url="http://www.sohu.com/a/162088136_659432"
# if not os.path.exists("weibo/"):
#     os.mkdir("weibo/")
# re=requests.get(url)
# html=re.content
# selector = etree.HTML(html)  
# srcs = selector.xpath('//img/@src')  
# i=0
# for src in srcs:
#     data=requests.get(src).content
#     with open("weibo/{}.png".format(i),"wb") as f:
#         f.write(data)   
#     i+=1

# #douban
# url_1="https://movie.douban.com/celebrity/1098533/photos/?type=C&start={}&sortby=like&size=a&subtype=a"
# url_list=[url_1.format(i*30) for i in range(31)]
# pics_url=[]
# dirs='douban/'
# if not os.path.exists(dirs):
#     os.mkdir(dirs)
# for url in url_list:
#     html=requests.get(url).content
#     selector = etree.HTML(html)  
#     pics_field=selector.xpath('//*[@id="content"]/div/div[1]/ul')
#     pics=pics_field[0].xpath(".//img/@src")
#     pics_url+=pics
# print(len(pics_url))
# for index,value in enumerate(pics_url):
#     data=requests.get(value).content
#     with open("douban/{}.png".format(index),"wb") as f:
#         f.write(data)   

#wangyi
if not os.path.exists("wangyi/"):
    os.mkdir("wangyi/")
dir_init_url="http://s1.ph.126.net/odRPEct3Er61yJNvb5j8uQ==/74766800978158.js"
js_data=requests.get(dir_init_url).text.split("1104d=")[1][:-1]
id='id'
name='name'
s='s'
desc='desc'
st='st'
au='au'
count='count'
t='t'
ut='ut'
cvid='cvid'
curl='curl'
surl='surl'
lurl='lurl'
dmt='dmt'
alc='alc'
kw='kw'
purl='purl'
true=True
py_data=eval(js_data)

dir_list=[i['purl'] for i in py_data if i['name'].startswith('Ryoko')]
id='id'
s='s'
ourl='ourl'
ow='ow'
oh='oh'
murl='murl'
surl='surl'
turl='turl'
qurl='qurl'
desc='desc'
t='t'
kw='kw'
picsetids='picsetids'
t1='t1'
i=0
error_code=0
for dirs in dir_list:
    js_image=requests.get("http://"+dirs)
    js_data=js_image.text.split('=',1)[1][:-1]
    py_data=eval(js_data)
    for pyd in py_data:
        pic="http://img7.ph.126.net/"+pyd['murl'].split('/',1)[1]
        with open('wangyi/{}.png'.format(i),'wb') as f:
            try:
                data=requests.get(pic).content
                f.write(data)
                i+=1
            except Exception as e:
                error_code+=1
                if error_code< 10:
                    time.sleep(2)
                    pass
                else:
                    print(e)
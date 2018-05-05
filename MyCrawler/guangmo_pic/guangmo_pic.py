import requests
from lxml import etree

url="http://www.sohu.com/a/162088136_659432"

#pic_contailer_xpath='//*[@id="mp-editor"]'

re=requests.get(url)
# with open('res_html/re.html',"wb") as f:
#     f.write(re.content)
html=re.content
selector = etree.HTML(html)  
srcs = selector.xpath('//img/@src')  
i=0
for src in srcs:
    data=requests.get(src).content
    with open("pics/{}.png".format(i),"wb") as f:
        f.write(data)   
    i+=1
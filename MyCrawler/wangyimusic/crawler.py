from Crypto.Cipher import AES
import base64
import requests
import json


text1={"id":"579954","ids":"[\"579954\"]","limit":10000,"offset":0,"csrf_token":"683ba29b8a5f519112f06b198ebb0d98"}
text2={"ids":"[579954]","br":128000,"csrf_token":"683ba29b8a5f519112f06b198ebb0d98"}

def aesEncrypt(text, secKey):
    pad = 16 - len(text) % 16
    text = text + pad * chr(pad)
    encryptor = AES.new(secKey, 2, '0102030405060708')
    ciphertext = encryptor.encrypt(text)
    ciphertext = base64.b64encode(ciphertext)
    return ciphertext


nonce = '0CoJUm6Qyw8W8jud'
# secKey = createSecretKey(16)

text1='{"id":"579954","ids":"[\\"579954\\"]","limit":10000,"offset":0,"csrf_token":"b066411661c0b4f376b0de9daae6ef39"}'
text2="gPS3ZDW46aPPo+7Ystqs+toAEXDQEilQv0D7zIdEPzFYy6KU8DlBjsDhy1NY4KfaLR7r6gC63grEzs+9Kl9kypjitB0uPjYO5VpjL3JjLdM="
secKey='F'*16
#encText = aesEncrypt(str(aesEncrypt(text1, nonce),encoding='utf8'), secKey)
encText=aesEncrypt(text1,nonce)
print(encText)
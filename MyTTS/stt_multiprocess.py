"""
多进程语音识别
def voice_save(queue):
    filename=v.get_voice(queue)  #语音采集
def read(queue):
    while True:
        filename=queue.get(True)
        t=v.stt(filename) #语音转文字
        print(t['result'])  # 打印文字
"""
import requests,json,os,sys,wave,io,time
from pydub import AudioSegment
import base64
from pyaudio import PyAudio, paInt16
import pyaudio
from datetime import datetime
import numpy as np
from multiprocessing import Process,Queue
import jieba

from WordFunc import TestDict

Default_APIKey='******'
Default_SecretKey='*********'
class BaiDuVoice():
    def __init__(self):
        """
        初始化、开启百度语音认证、创建文件目录
        """
        self.token=self.get_token(Default_APIKey,Default_SecretKey)
        self.cwd=os.getcwd()#当前文件目录
        self.make_files()

    def make_files(self):
        """
        创建文件目录
        """
        path=self.cwd+'\\files\\voice'
        isExists=os.path.exists(path)
        if not isExists:
            os.makedirs(path)

    def get_token(self,app_key,secret_key,way='read'):
        """
        认证
        """
        data = {'grant_type': 'client_credentials', 'client_id': app_key, 'client_secret': secret_key}
        response=requests.post('https://openapi.baidu.com/oauth/2.0/token',data=data)
        json_result=json.loads(response.content)
        return json_result['access_token']

    def tts(self,text='你忘记输入文字了，笨蛋',per='0',pit='5',spd='5',vol='5'):
        """
        文字转语音，获得语音数据
        per = 发音人选择, 0为普通女声，1为普通男生，3为情感合成-度逍遥，4为情感合成-度丫丫，默认为普通女声
        pit = '5'#音调，取值0-9，默认为5中语调
        spd = '5'#语速，取值0-9，默认为5中语速
        vol = '5'#音量，取值0-9，默认为5中音量
        """
        text = text.replace(u' ', u',')
        tts_url='http://tsn.baidu.com/text2audio'
        data={'tex':text,'lan':'zh','ctp':'1','tok':self.token,'cuid':'123456','per':per,'pit':pit,'spd':spd,'vol':vol}
        response=requests.post(tts_url,data=data)
        # print(response.content)
        return response.content

    def voice_save(self,voice,out_put_file='1.mp3'):
        """
        文字合成语音进行保存
        """
        file_name=self.cwd+'\\files\\voice\\'+out_put_file
        with open(file_name,'wb') as f:#返回语音保存
            f.write(voice)
        audio = AudioSegment.from_file(file_name)
        audio.export(file_name, format='wav')
        return file_name

    def voice_play(self,vioce_file):
        """
        文字合成语音进行播放
        """
        CHUNK = 1024
        wf = wave.open(vioce_file, 'rb')
        p = pyaudio.PyAudio()
        # 打开声音输出流
        stream = p.open(format = p.get_format_from_width(wf.getsampwidth()),
                        channels = wf.getnchannels(),
                        rate = wf.getframerate(),
                        output = True)
        FILE_SIZE=os.path.getsize(vioce_file)
        with open(vioce_file, 'rb') as fh:
            while True:
                data = wf.readframes(CHUNK)
                if data ==b"": break
                stream.write(data)
            stream.close()
            p.terminate()     
##-----------------------------------------------------
    def save_wave_file(self,filename, data,SAMPLING_RATE):
        """
        保存录音程序
        """
        wf = wave.open(filename, 'wb')   
        wf.setnchannels(1)   
        wf.setsampwidth(2)   
        wf.setframerate(SAMPLING_RATE)  
        for i in data:  
            wf.writeframes(i)   
        wf.close()  

    def get_voice(self,queue):
        """
        提取有效的音频信息，并保存
        """
        NUM_SAMPLES = 2000      # pyAudio内部缓存的块的大小
        SAMPLING_RATE = 8000    # 取样频率
        LEVEL = 1500            # 声音保存的阈值
        COUNT_NUM = 20          # NUM_SAMPLES个取样之内出现COUNT_NUM个大于LEVEL的取样则记录声音
        SAVE_LENGTH = 3         # 声音记录的最小长度：SAVE_LENGTH * NUM_SAMPLES 个取样
        # 开启声音输入
        pa = PyAudio()
        stream = pa.open(format=paInt16, channels=1, rate=SAMPLING_RATE, input=True,
                        frames_per_buffer=NUM_SAMPLES)
        save_count = 0
        save_buffer = []
        i=0
        while True:
            # 读入NUM_SAMPLES个取样
            string_audio_data = stream.read(NUM_SAMPLES)
            # 将读入的数据转换为数组
            audio_data = np.fromstring(string_audio_data, dtype=np.short)
            # 计算大于LEVEL的取样的个数
            large_sample_count = np.sum( audio_data > LEVEL )
            # print(np.max(audio_data))
            # 如果个数大于COUNT_NUM，则至少保存SAVE_LENGTH个块
            if large_sample_count > COUNT_NUM:
                save_count = SAVE_LENGTH
            else:
                save_count -= 1

            if save_count < 0:
                save_count = 0

            if save_count > 0:
                # 将要保存的数据存放到save_buffer中
                save_buffer.append( string_audio_data )
            else:
                # 将save_buffer中的数据写入WAV文件，WAV文件的文件名是保存的时刻
                if len(save_buffer) > 0:
                    filename = "files/voice/" +datetime.now().strftime("%Y-%m-%d_%H_%M_%S") + ".wav"
                    self.save_wave_file(filename, save_buffer,SAMPLING_RATE)
                    save_buffer = []
                    print(filename, "saved")
                    queue.put(filename)
            i+=1
        

    def stt(self,voice_file):
        """
        百度语音识别
        """
        get_text_url='http://vop.baidu.com/server_api'
        data = {"format":"wav","rate":8000, "channel":1,"token":self.token,"cuid":'123456',"lan":"zh"} 
        wav_fp = open(voice_file,'rb')
        voice_data = wav_fp.read()
        data['len'] = len(voice_data)
        data['speech'] = base64.b64encode(voice_data).decode('utf-8')
        post_data = json.dumps(data)
        r=requests.post(get_text_url,data=bytes(post_data,encoding="utf-8"))
        # 处理返回数据
        return r.json()

v=BaiDuVoice()
def tts(text='你忘记输入文字了，笨蛋'):
    f=v.voice_save(v.tts(text)) #语音转文字，保存语音文件
    v.voice_play(f)  #播放语音文件

def voice_save(queue):
    filename=v.get_voice(queue)  #语音采集

def read(queue):
    tts('语音识别开始')
    while True:
        filename=queue.get(True)
        t=v.stt(filename) #语音转文字
        if t['err_no'] == 0 :
            print(t['result'])  # 打印文字
            cut=set(jieba.cut(t['result'][0])) #结巴分词
            print(cut)
            orders=cut&set(TestDict.keys())   #求识别结果和函数的的交集
            if orders:
                for order in orders:
                    TestDict[order]()       #执行函数
        else:
            tts("识别错误")

def main():
    q=Queue()
    p1=Process(target=voice_save,args=(q,))
    p2=Process(target=read,args=(q,))
    p1.start()
    p2.start()


if __name__ == '__main__':
    main()
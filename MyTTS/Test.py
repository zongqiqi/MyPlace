"""
stt_tts测试
"""
import os
import unittest
from multiprocessing import Queue

from stt_tts import Voice,BaiDuVoice

class Stt_TtsTest(unittest.TestCase):
    def setUp(self):
        '''测试初始化，实例化语音类和接口类'''
        self.v=Voice()
        self.b=BaiDuVoice()

    @unittest.skip("I don't want to run this case.")
    def test_init(self):
        '''文件目录创建测试'''
        self.assertEqual(self.v.path,'files/voices/')
        # self.assertIs(os.path.exists('files/voices/'),True)

    @unittest.skip("I don't want to run this case.")
    def test_save(self):
        '''语音保存测试'''
        self.v.save(self.b.tts())
        self.assertEqual(os.path.exists('files/voices/1.mp3'),True)

    @unittest.skip("I don't want to run this case.")
    def test_paly(self):
        '''语音播放测试'''
        self.v.play('files/voices/1.mp3')

    @unittest.skip("I don't want to run this case.")
    def test_record(self):
        '''录音测试'''
        q=Queue()
        self.v.record(q)
        filename=q.get()
        self.assertIn('files/voices/',filename)
        print('语音类：录音测试(文件保存)   '+filename)

    @unittest.skip("I don't want to run this case.")
    def test_token(self):
        '''token测试'''
        print('接口adpi测试（token）：'+self.b.token)

    @unittest.skip("I don't want to run this case.")
    def test_tts(self):
        '''文字转语音测试'''
        data=self.b.tts(test='你忘记输入文字了，笨蛋')
        self.v.save(data,name='1.mp3')
        self.v.play('files/voices/1.mp3')

    
    def test_stt(self):
        '''语音识别测试'''
        result=self.b.stt('files/voices/test.wav')
        error_message=result['err_msg']  #期望'success.'
        error_no=result['err_no'] #期望 0
        res=result['result']  # 期望 ['北京欢迎你，']
        self.assertEqual(error_message,'success.')
        self.assertIs(error_no,0)
        self.assertEqual(res,['北京欢迎你，'])

if __name__ == '__main__':
    unittest.main()
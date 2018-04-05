from PIL import Image
import os

def clipimage(size):#返回需要裁剪区域的坐标（box）
    width = int(size[0])
    height = int(size[1])
    box = ()
    if (width > height):
        dx = width - height
        box = (dx / 2, 0, height + dx / 2,  height)
    else:
        dx = height - width
        box = (0, dx / 2, width, width + dx / 2)
    return box
def image_size_off(pic,base):
    if not os.path.exists(base+'/love/thumbanils/'):
        os.makedirs(base+'/love/thumbanils/')
    im=Image.open(pic)
    box = clipimage(im.size)
    region = im.crop(box)#返回图像某个给定区域。box 是一个 4 元素元组，定义了 left, upper, right, lower 像素坐标
    size = (250, 250)
    region.thumbnail(size, Image.ANTIALIAS)
    region.save(os.path.join(base+'/love/thumbanils/'+os.path.basename(pic)))

def main():
	image_size_off()

if __name__ == '__main__':
	main()
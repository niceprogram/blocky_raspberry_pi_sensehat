from sense_hat import SenseHat
sense = SenseHat()

from time import sleep

day = None
day_temp = None
temperature = None
y = None


day = 0
day_temp = 0
while True:
  temperature = sense.get_temperature()

  y = (temperature - 10) / 3
  if y > 7:
    sense.set_pixel(0,7,[255,0,0])   # (x,y,r,g,b)
  elif y < 0:
    sense.set_pixel(0,0,[0,255,255])   # (x,y,r,g,b)
  else:
    sense.set_pixel(0,y,[255,255,0])   # (x,y,r,g,b)
  sleep(10000/1000)

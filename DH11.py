from sense_hat import SenseHat
sense = SenseHat()

from time import sleep
from numbers import Number

hour = None
day_temp = None
temperature = None
y = None


sense.clear(0,0,0)
hour = 0
day_temp = 0
for count in range(7):
  temperature = sense.get_temperature()

  y = (temperature - 10) / 3
  if y > 7:
    sense.set_pixel(hour,7,[255,0,0])   # (x,y,r,g,b)
  elif y < 0:
    sense.set_pixel(hour,0,[0,255,255])   # (x,y,r,g,b)
  else:
    sense.set_pixel(hour,y,[255,255,0])   # (x,y,r,g,b)
  sleep(3600000/1000)
  hour = (hour if isinstance(hour, Number) else 0) + 1

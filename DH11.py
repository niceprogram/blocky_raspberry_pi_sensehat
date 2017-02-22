from sense_hat import SenseHat
sense = SenseHat()

import math
from time import sleep
from numbers import Number

hour = None
day_temp = None
temperature = None
y = None

def text_prompt(msg):
  try:
    return raw_input(msg)
  except NameError:
    return input(msg)


sense.clear(0,0,0)
hour = 0
day_temp = 0
for count in range(7):
  temperature = sense.get_temperature()

  print(float(text_prompt(temperature)))
  y = (round(temperature) - 10) / 3
  if y > 7:
    sense.set_pixel(hour,7,[255,0,0])   # (x,y,r,g,b)
  elif y < 0:
    sense.set_pixel(hour,0,[0,255,255])   # (x,y,r,g,b)
  else:
    sense.set_pixel(hour,y,[255,255,0])   # (x,y,r,g,b)
  sleep(360/1000)
  hour = (hour if isinstance(hour, Number) else 0) + 1
https://github.com/initialstate/wunderground-sensehat/blob/master/README.md

from sense_hat import SenseHat
sense = SenseHat()

import curses
screen = curses.initscr()
screen.keypad(True)
import random
from time import sleep
from sense_hat import SenseHat
sense = SenseHat()

import curses
screen = curses.initscr()
screen.keypad(True)
curses.cbreak()
curses.noecho()

Maze_field = None
ghost_position = None
grid_move_ok = [102,0,204]
newXY = None
tempXY = None
multipleof8 = None
choose_ghost_route = None
ghost_path_01 = None
Mnew_x = None
key = None
tempX = None
test_forX = None
ghost_path_02 = None
Mnew_y = None
tempY = None
ghost_path = None
i = None
ghost_path_03 = None
Mx = 0
new_grid_no = None
new_ghostX = None
My = 0
read_grid = None
new_ghostY = None
new_ghostX = 5
new_ghostY = 4
Mx = 1
My = 1
Mnew_x = 1
Mnew_y = 1


# move man within the maze by keys
def move_M():
  global newXY, Mnew_x, Mx, Mnew_y, My, new_grid_no, read_grid, Maze_field, grid_move_ok
  newXY = listen_for_key()
  Mnew_x = Mx + newXY[0]
  Mnew_y = My + newXY[1]
  print (Mx)
  print (My)
  new_grid_no = Mnew_x + Mnew_y * 8
  read_grid = Maze_field[int(new_grid_no)]
  if grid_move_ok == read_grid:
    sense.set_pixel(Mx,My,[0,0,0])   # (x,y,r,g,b)
    Mx = Mnew_x
    My = Mnew_y
    sense.set_pixel(Mx,My,[255,255,0])   # (x,y,r,g,b)

# listen to the key input, return X&Y
def listen_for_key():
  global key, tempX, tempY, Mx, My, tempXY
  key = screen.getch()
  tempX = 0
  tempY = 0
  if Mx != 0 and key == curses.KEY_DOWN:
    tempX = -1
  elif Mx != 7 and key == curses.KEY_UP:
    tempX = 1
  elif My != 0 and key == curses.KEY_LEFT:
    tempY = -1
  elif My != 7 and key == curses.KEY_RIGHT:
    tempY = 1
  tempXY = [tempX, tempY]
  return tempXY

# this function calculates the x and y of the ghost from the ghost_path
def ghostXY(ghost_position):
  global multipleof8, test_forX, new_ghostX, new_ghostY
  for multipleof8 in range(0, 65, 8):
    test_forX = ghost_position - multipleof8
    if 0 <= test_forX and test_forX <= 7:
      sense.set_pixel(new_ghostX,new_ghostY,[102,0,204])   # (x,y,r,g,b)
      new_ghostX = test_forX
      new_ghostY = multipleof8 / 8
      sense.set_pixel(new_ghostX,new_ghostY,[255,30,0])   # (x,y,r,g,b)
      break

# his function sets up the ghost path.
def move_ghost():
  global choose_ghost_route, ghost_path, ghost_path_01, ghost_path_02, ghost_path_03, i
  for count in range(100):
    choose_ghost_route = random.randint(1, 3)
    if choose_ghost_route == 1:
      ghost_path = ghost_path_01
    elif choose_ghost_route == 2:
      ghost_path = ghost_path_02
    else:
      ghost_path = ghost_path_03
    for i in ghost_path:
      ghostXY(i)
      sleep(500/1000);



# arrays (these arrays were added later.
ghost_path_01 = [28,36,44,52,60,61,62,63,55,54,47,38,37,36,35,34,33,25,17,18,19,11,10,9,1,0,1,2,3,4,5,6,7,6,5,4,3,2,1,9,10,18,17,25,33,34,35,36]
ghost_path_02 = [28,29,30,38,47,54,62,61,60,52,44,36,35,34,33,34,35,36]
ghost_path_03 = [28,36,35,34,33,25,17,18,10,2,3,4,5,13,5,4,3,11,19,18,17,25,33,41,40,41,33,34,35,36]
 
Maze_field = [[102,0,204], [102,0,204], [102,0,204], [102,0,204], [102,0,204], [102,0,204], [102,0,204], [102,0,204],
 [2,130,0], [102,0,204], [102,0,204], [102,0,204], [2,130,0], [102,0,204], [2,130,0], [2,130,0],
 [2,130,0], [102,0,204], [102,0,204], [102,0,204], [2,130,0], [2,130,0], [102,0,204], [2,130,0],
 [102,0,204], [102,0,204], [2,130,0], [2,130,0], [102,0,204], [102,0,204], [102,0,204], [102,0,204],
 [2,130,0], [102,0,204], [102,0,204], [102,0,204], [102,0,204], [102,0,204], [102,0,204], [2,130,0],
 [102,0,204], [102,0,204], [102,0,204], [2,130,0], [102,0,204], [2,130,0], [102,0,204], [2,130,0],
 [102,0,204], [102,0,204], [2,130,0], [102,0,204], [102,0,204], [2,130,0], [102,0,204], [102,0,204],
 [102,0,204], [2,130,0], [2,130,0], [102,0,204], [102,0,204], [102,0,204], [102,0,204], [102,0,204]] 
 

sense.set_pixels(Maze_field)   # [[r,g,b], [r,g,b],...]
import threading
thread = threading.Thread(target =  move_ghost)
thread.start()
while True:
  move_M()
  
  

screen.keypad(0)
curses.nocbreak()
curses.echo()
curses.endwin()

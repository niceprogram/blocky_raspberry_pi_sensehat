
Blockly‏ > Demos‏ > Code


Blocks	 	JavaScript	 	Python	 	PHP	 	Lua	 	Dart	 	XML	  
from sense_hat import SenseHat
sense = SenseHat()

import random
from time import sleep
import curses
screen = curses.initscr()
screen.keypad(True)
curses.cbreak()
curses.noecho()

ghost_path_01 = None
test_XY = None
ghost_position = None
ghost_path_02 = None
newXY = None
tempXY = None
multipleof8 = None
broom_x = None
ghost_path_03 = None
choose_ghost_route = None
Mnew_x = None
key = None
tempX = None
test_forX = None
broom_y = None
new_ghostX = None
Mnew_y = None
tempY = None
new_ghostY = None
ghost_path = None
i = None
Mx = None
new_grid_no = None
broom_grid_no = None
grid_move_ok = None
My = None
read_grid = None
Maze_field = None

# test is number are between 0 and 7
def test_XY_inside_grid(test_XY):
  if 0 <= test_XY and test_XY <= 7:
    return True

# This function sets up the ghost path. (later you can expand the ghost_path arrays using a text editor).
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
      sleep(500/1000)

# Move CleanerMan within the confides of the maze with the arrow keys
def move_M():
  global newXY, Mnew_x, Mx, Mnew_y, My, new_grid_no, read_grid, Maze_field, ghost_position, grid_move_ok
  newXY = listen_for_key()
  Mnew_x = Mx + newXY[0]
  Mnew_y = My + newXY[1]
  new_grid_no = Mnew_x + Mnew_y * 8
  # read the LED value
  # +1 compensate Blockly list
  read_grid = Maze_field[int((new_grid_no + 1) - 1)]
  # test for position
  print(''.join([str(temp_value) for temp_value in ['ghost:', ghost_position, 'cleaner:', new_grid_no]]))
  # test if CleanerMan has not collided with the ghost.
  # Check if the CleanerMan can
  if ghost_position == new_grid_no:
    sense.set_pixel(Mx,My,[0,0,0])   # (x,y,r,g,b)
    Mx = Mnew_x
    My = Mnew_y
    # if collided flash 10 times
    for count2 in range(10):
      sense.set_pixel(Mx,My,[255,0,255])   # (x,y,r,g,b)
      sleep(500/1000)
      sense.set_pixel(Mx,My,[0,0,0])   # (x,y,r,g,b)
  elif grid_move_ok == read_grid:
    sense.set_pixel(Mx,My,[0,0,0])   # (x,y,r,g,b)
    Mx = Mnew_x
    My = Mnew_y
    the_broom()
    sense.set_pixel(Mx,My,[255,255,0])   # (x,y,r,g,b)

# listen to the key input, return X&Y for the CleanerMan
def listen_for_key():
  global key, tempX, tempY, Mx, My, tempXY
  key = screen.getch()
  tempX = 0
  tempY = 0
  if Mx != 0 and key == curses.KEY_LEFT:
    tempX = -1
  elif Mx != 7 and key == curses.KEY_RIGHT:
    tempX = 1
  elif My != 0 and key == curses.KEY_UP:
    tempY = -1
  elif My != 7 and key == curses.KEY_DOWN:
    tempY = 1
  tempXY = [tempX, tempY]
  return tempXY

# This function calculates the x and y of the ghost from the ghost_path.
def ghostXY(ghost_position):
  global multipleof8, test_forX, new_ghostX, new_ghostY
  for multipleof8 in range(0, 65, 8):
    test_forX = ghost_position - multipleof8
    if test_XY_inside_grid(test_forX) == True:
      sense.set_pixel(new_ghostX,new_ghostY,[102,0,204])   # (x,y,r,g,b)
      new_ghostX = test_forX
      new_ghostY = multipleof8 / 8
      sense.set_pixel(new_ghostX,new_ghostY,[255,0,0])   # (x,y,r,g,b)
      break

# the broom forms an O around the CleanerMan. It will sweep away all the LEDs, except the walls.
def the_broom():
  global broom_x, broom_y, Mx, My, broom_grid_no, new_grid_no, read_grid, Maze_field, grid_move_ok, ghost_position
  for broom_x in range(-1, 2):
    for broom_y in range(-1, 2):
      if (test_XY_inside_grid(Mx + broom_x) and test_XY_inside_grid(My + broom_y)) == True:
        broom_grid_no = new_grid_no + (broom_x + 8 * broom_y)
        read_grid = Maze_field[int((broom_grid_no + 1) - 1)]
        if grid_move_ok == read_grid and ghost_position != read_grid:
          sense.set_pixel((Mx + broom_x),(My + broom_y),[0,0,0])   # (x,y,r,g,b)


# expand the paths in the python editr
ghost_path_01 = [0, 1, 2, 3, 11, 19, 18, 17, 16, 8]
ghost_path_02 = [0, 1, 2, 3, 2, 1]
ghost_path_03 = [0, 8, 16, 17, 16, 8]
new_ghostX = 0
new_ghostY = 0
grid_move_ok = [102, 0, 204]
Mx = 0
My = 0
Mnew_x = 0
Mnew_y = 0
Maze_field = [[102,0,204], [102,0,204], [102,0,204], [102,0,204], [2,130,0], [102,0,204], [102,0,204], [102,0,204],
 [102,0,204], [2,130,0], [2,130,0], [102,0,204], [102,0,204], [102,0,204], [2,130,0], [102,0,204],
 [102,0,204], [102,0,204], [102,0,204], [102,0,204], [2,130,0], [102,0,204], [102,0,204], [102,0,204],
 [2,130,0], [2,130,0], [2,130,0], [102,0,204], [2,130,0], [102,0,204], [2,130,0], [102,0,204],
 [102,0,204], [102,0,204], [102,0,204], [102,0,204], [2,130,0], [102,0,204], [2,130,0], [2,130,0],
 [102,0,204], [2,130,0], [102,0,204], [2,130,0], [2,130,0], [102,0,204], [102,0,204], [102,0,204],
 [102,0,204], [2,130,0], [102,0,204], [102,0,204], [102,0,204], [102,0,204], [2,130,0], [102,0,204],
 [102,0,204], [102,0,204], [102,0,204], [2,130,0], [102,0,204], [102,0,204], [102,0,204], [102,0,204]]

sense.set_pixels(Maze_field)   # [[r,g,b], [r,g,b],...]
sense.set_pixel(Mx,My,[255,255,0])   # (x,y,r,g,b)
import threading
thread = threading.Thread(target=  move_ghost)
thread.start()
while True:
  move_M()


screen.keypad(0)
curses.nocbreak()
curses.echo()
curses.endwin()
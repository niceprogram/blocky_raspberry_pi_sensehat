from sense_hat import SenseHat
sense = SenseHat()

import curses
screen = curses.initscr()
screen.keypad(True)
curses.cbreak()
curses.noecho()

grid_move_ok = None
newXY = None
broom_x = None
Mx = None
tempXY = None
Mnew_x = None
broom_y = None
My = None
key = None
tempX = None
Mnew_y = None
broom_grid_no = None
tempY = None
new_grid_no = None
read_grid = None
Maze_field = None

# Move CleanerMan within the confides of the maze with the arrow keys.
# The maze is read to see if the CleanerMan can move to the next position
def move_M():
  global newXY, Mnew_x, Mx, Mnew_y, My, new_grid_no, read_grid, Maze_field, grid_move_ok
  newXY = listen_for_key()
  Mnew_x = Mx + newXY[0]
  Mnew_y = My + newXY[1]
  new_grid_no = Mnew_x + Mnew_y * 8
  read_grid = Maze_field[int(new_grid_no - 1)]
  if grid_move_ok == read_grid:
    Mx = Mnew_x
    My = Mnew_y
    sense.set_pixel(Mx,My,[255,255,0])   # (x,y,r,g,b)
    the_broom()

# the broom forms an O around the CleanerMan. It will sweep away all the LEDs, except the walls.
def the_broom():
  global broom_x, broom_y, broom_grid_no, read_grid, grid_move_ok, Mx, Mnew_x, My, Mnew_y
  for broom_x in range(-1, 2):
    for broom_y in range(-8, 9, 8):
      broom_grid_no = read_grid + (broom_x + broom_y)
      if grid_move_ok == broom_grid_no:
        Mx = Mnew_x
        My = Mnew_y

# listen to the key input, return X&Y for the CleanerMan
def listen_for_key():
  global key, tempX, tempY, Mx, My, tempXY
  key = screen.getch()
  tempX = 0
  tempY = 0
  if Mx != 0 and key == curses.KEY_UP:
    tempX = -1
  elif Mx != 7 and key == curses.KEY_DOWN:
    tempX = 1
  elif My != 0 and key == curses.KEY_LEFT:
    tempY = -1
  elif My != 7 and key == curses.KEY_RIGHT:
    tempY = 1
  tempXY = [tempX, tempY]
  return tempXY


# Cleaner_Man may move on these purple fields
grid_move_ok = [102, 0, 204]
Mx = 3
My = 3
Mnew_x = 3
Mnew_y = 3
Maze_field = [[102,0,204], [102,0,204], [102,0,204], [102,0,204], [2,130,0], [102,0,204], [102,0,204], [102,0,204],
 [102,0,204], [2,130,0], [2,130,0], [102,0,204], [102,0,204], [102,0,204], [2,130,0], [102,0,204],
 [102,0,204], [102,0,204], [102,0,204], [102,0,204], [2,130,0], [102,0,204], [102,0,204], [102,0,204],
 [2,130,0], [2,130,0], [2,130,0], [102,0,204], [2,130,0], [102,0,204], [2,130,0], [102,0,204],
 [102,0,204], [102,0,204], [102,0,204], [102,0,204], [2,130,0], [102,0,204], [2,130,0], [2,130,0],
 [102,0,204], [2,130,0], [102,0,204], [2,130,0], [2,130,0], [102,0,204], [102,0,204], [102,0,204],
 [102,0,204], [2,130,0], [102,0,204], [102,0,204], [102,0,204], [102,0,204], [2,130,0], [102,0,204],
 [102,0,204], [102,0,204], [102,0,204], [2,130,0], [102,0,204], [102,0,204], [102,0,204], [102,0,204]]

sense.set_pixels(Maze_field)   # [[r,g,b], [r,g,b],...]
while True:
  move_M()


screen.keypad(0)
curses.nocbreak()
curses.echo()
curses.endwin()

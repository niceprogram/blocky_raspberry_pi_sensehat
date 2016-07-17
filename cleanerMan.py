from sense_hat import SenseHat
sense = SenseHat()

from time import sleep
import curses
screen = curses.initscr()
screen.keypad(True)
curses.cbreak()
curses.noecho()

ghost_path_01 = None
ghost_position = None
new_ghostX = None
multipleof8 = None
i = None
newXY = None
tempXY = None
new_ghostY = None
Mnew_x = None
key = None
tempX = None
grid_move_ok = None
test_forX = None
Mnew_y = None
tempY = None
Mx = None
new_grid_no = None
My = None
read_grid = None
Maze_field = None

# this function calculates the x and y of the ghost from the ghost_path
def ghostXY(ghost_position):
  global multipleof8, test_forX, new_ghostX, new_ghostY
  for multipleof8 in range(0, 65, 8):
    print(str('in function mul8 ') + str(multipleof8))
    test_forX = ghost_position - multipleof8
    print(str('test for x') + str(test_forX))
    if 0 <= test_forX and test_forX >= 7:
      sense.set_pixel(new_ghostX,new_ghostY,[102,0,204])   # (x,y,r,g,b)
      new_ghostX = test_forX
      new_ghostY = multipleof8 / 8
      sense.set_pixel(new_ghostX,new_ghostY,[255,0,0])   # (x,y,r,g,b)
      break

# Describe this function...
def move_ghost():
  global i, ghost_path_01
  i = 0
  for i in ghost_path_01:
    print(i)
    ghostXY(i)
    sleep(1000/1000);

# Describe this function...
def move_M():
  global newXY, Mnew_x, Mx, Mnew_y, My, new_grid_no, read_grid, Maze_field, grid_move_ok
  newXY = listen_for_key()
  Mnew_x = Mx + newXY[0]
  Mnew_y = My + newXY[1]
  new_grid_no = Mnew_x + Mnew_y * 8
  read_grid = Maze_field[int(new_grid_no - 1)]
  if grid_move_ok == read_grid:
    sense.set_pixel(Mx,My,[0,0,0])   # (x,y,r,g,b)
    Mx = Mnew_x
    My = Mnew_y
    sense.set_pixel(Mx,My,[255,255,0])   # (x,y,r,g,b)

# Describe this function...
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


ghost_path_01 = [0, 1, 2, 3, 11, 19, 18, 17, 16, 8]
new_ghostX = 0
new_ghostY = 0
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
import threading
thread = threading.Thread(target=  move_ghost)
thread.start()
while True:
  move_M()


screen.keypad(0)
curses.nocbreak()
curses.echo()
curses.endwin()



 

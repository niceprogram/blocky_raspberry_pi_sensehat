goog.require('Blockly.Blocks');

/////////////////////
//curses//
/////////////////////  

Blockly.Blocks['curses'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("curses");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('curses is used for keyboard input');
    this.setHelpUrl('http://www.example.com/');
  }
};
///////////////////////////////////////////////////////////////////////////////////
// javascript generator
Blockly.JavaScript['get_pressure'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = String('// <---- call the function cursus ----->//\n');
  return code;
};
/////////////////////////////////////////////////////////////////////////////////// 
// python generator
Blockly.Python['curses'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  '';
  // TODO: Change ORDER_NONE to the correct strength.
  
  Blockly.Python.definitions_['curses'] = 'import curses\nscreen = curses.initscr()\nscreen.keypad(True)\ncurses.cbreak()\ncurses.noecho()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

///////////////////////////////////////////////////////////////////////////////////


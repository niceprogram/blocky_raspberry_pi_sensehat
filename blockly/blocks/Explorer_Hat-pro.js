goog.provide('Blockly.Blocks.SHat_LED');

goog.require('Blockly.Blocks');

/////////////////////////
//set  lights//
////////////////////////
Blockly.Blocks['lights'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("light [");
    this.appendValueInput("lights ")
        .setCheck(null);
    this.appendValueInput("L_Output")
        .appendField("] .");
    this.appendDummyInput()
        .appendField("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('explorerhat.light.yellow');
    this.setHelpUrl('https://github.com/pimoroni/explorer-hat/blob/master/documentation/Function-reference.md');
  }
};

// python generator
Blockly.Python['lights'] = function(block) {
  var value_lights = Blockly.Python.valueToCode(block, 'lights ', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'L_Output', Blockly.Python.ORDER_ATOMIC);
  //var value_lights= value_lights.replace("(", "");
  //var value_lights= value_lights.replace(")", "");
  var code ='explorerhat.light[' + value_lights +'].' +value_name + '\n'
  Blockly.Python.definitions_['explorerhat'] = 'import explorerhat\n';
  return code;
};

/////////////////////////
//colour lights//
////////////////////////
Blockly.Blocks['colour_lights'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["yellow", "0"], ["blue", "1"], ["red", "2"], ["green", "3"]]), "four_lights");
    this.setOutput(true, null);
    this.setColour(55);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
// python generator
Blockly.Python['colour_lights'] = function(block) {
  var dropdown_four_lights = block.getFieldValue('four_lights');
  // TODO: Assemble Python into code variable.
  var code = dropdown_four_lights;
  // Blockly.Python.definitions_['explorerhat'] = 'import explorerhat\n';
  return [code];
};

/////////////////////////
//output fade//
////////////////////////
Blockly.Blocks['fader'] = {
  init: function() {
    this.appendValueInput("fromx")
        .setCheck("Number")
        .appendField("fade from");
    this.appendValueInput("tox")
        .setCheck("Number")
        .appendField("to");
    this.appendValueInput("timex")
        .setCheck("Number")
        .appendField(", time");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(55);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
// python generator
Blockly.Python['fader'] = function(block) {
  var value_from = Blockly.JavaScript.valueToCode(block, 'fromx', Blockly.JavaScript.ORDER_ATOMIC);
  var value_to = Blockly.JavaScript.valueToCode(block, 'tox', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'timex', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'fade('+ value_from + ',' + value_to + ',' + value_time + ')';
  // Blockly.Python.definitions_['explorerhat'] = 'import explorerhat\n';
  return code;
};

/////////////////////////
//outputs//
////////////////////////
Blockly.Blocks['outputs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["on()", "on()"], ["off()", "off()"], ["toggle()", "toggle()"], ["stop()", "stop()"]]), "output_L");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(55);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// python generator
Blockly.Python['outputs'] = function(block) {
  var dropdown_outputs = block.getFieldValue('output_L');
  //var value_outputs = Blockly.Python.valueToCode(block, 'Outputs', Blockly.Python.ORDER_ATOMIC);
  var code = dropdown_outputs;
  return [code];
};



/////////////////////////
//output fade//
////////////////////////
Blockly.Blocks['fader'] = {
  init: function() {
    this.appendValueInput("fromx")
        .setCheck(null)
        .appendField("fade from");
    this.appendValueInput("tox")
        .setCheck(null)
        .appendField("to");
    this.appendValueInput("timex")
        .setCheck(null)
        .appendField(", time");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(55);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
// python generator
Blockly.Python['fader'] = function(block) {
  var value_from = Blockly.JavaScript.valueToCode(block, 'fromx', Blockly.JavaScript.ORDER_ATOMIC);
  var value_to = Blockly.JavaScript.valueToCode(block, 'tox', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'timex', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'fade('+ value_from + ',' + value_to + ',' + value_time + ')';
  // Blockly.Python.definitions_['explorerhat'] = 'import explorerhat\n';
  return [code];
};

/////////////////////////
//output fade//
////////////////////////
Blockly.Blocks['pulse'] = {
  init: function() {
    this.appendValueInput("inx")
        .setCheck(null)
        .appendField("Pulse: fade in time");
    this.appendValueInput("outx")
        .setCheck(null)
        .appendField("fade out time");
    this.appendValueInput("ontimex")
        .setCheck(null)
        .appendField(", on time");
    this.appendValueInput("outtimex")
        .setCheck(null)
        .appendField(", off time");
    this.setInputsInline(true);
    this.setOutput(true, null);
	this.setColour(55);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
// python generator
Blockly.Python['pulse'] = function(block) {
  var value_inx = Blockly.JavaScript.valueToCode(block, 'inx', Blockly.JavaScript.ORDER_ATOMIC);
  var value_outx = Blockly.JavaScript.valueToCode(block, 'outx', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ontimex = Blockly.JavaScript.valueToCode(block, 'ontimex', Blockly.JavaScript.ORDER_ATOMIC);
  var value_outtimex = Blockly.JavaScript.valueToCode(block, 'outtimex', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'pulse(' + value_inx  + ',' + value_outx + ',' + value_ontimex + ',' + value_outtimex +')';
  return [code];
};

/////////////////////////
//output blink//
////////////////////////
Blockly.Blocks['blink'] = {
  init: function() {
    this.appendValueInput("ontimex")
        .setCheck(null)
        .appendField("Blink: on time");
    this.appendValueInput("outtimex")
        .setCheck(null)
        .appendField(", off time");
    this.setInputsInline(true);
    this.setOutput(true, null);
	this.setColour(55);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
// python generator
Blockly.Python['blink'] = function(block) {
  var value_ontimex = Blockly.JavaScript.valueToCode(block, 'ontimex', Blockly.JavaScript.ORDER_ATOMIC);
  var value_outtimex = Blockly.JavaScript.valueToCode(block, 'outtimex', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'blink(' + value_ontimex + ',' + value_outtimex +')';
  return [code];
};


/////////////////////////
//output pads//
////////////////////////
Blockly.Blocks['pads'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["one", "one"], ["two", "two"], ["three", "three"], ["four", "four"], ["five", "five"], ["six", "six"], ["seven", "seven"], ["eight", "eight"], ["-", "xx"]]), "pad");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['pads'] = function(block) {
  var dropdown_pad = block.getFieldValue('pad');
  // TODO: Assemble Python into code variable.
  var code = dropdown_pad;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};


/////////////////////////
//output events//
////////////////////////
Blockly.Blocks['events'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["pressed", "pressed"], ["released", "released"], ["held", "held"]]), "event");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['events'] = function(block) {
  var dropdown_pad = block.getFieldValue('event');
  // TODO: Assemble Python into code variable.
  var code = dropdown_pad;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};


/////////////////////////
//output is_events//
////////////////////////
Blockly.Blocks['is_events'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["is_pressed", "is_pressed"], ["is_held", "is_held"], ["is_released", "is_released"]]), "is_event");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['is_events'] = function(block) {
  var dropdown_pad = block.getFieldValue('is_event');
  // TODO: Assemble Python into code variable.
  var code = dropdown_pad;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};


/////////////////////////
//output touch functions//
////////////////////////
Blockly.Blocks['touch'] = {
  init: function() {
    this.appendValueInput("pads1")
        .setCheck(null)
        .appendField("touch.");
    this.appendValueInput("events1")
        .setCheck(null)
        .appendField("events.");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("handler_function"), "handler_function");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
// python generator
Blockly.Python['touch'] = function(block) {
  var value_pads = Blockly.Python.valueToCode(block, 'pads1', Blockly.Python.ORDER_ATOMIC);
  var value_events = Blockly.Python.valueToCode(block, 'events1', Blockly.Python.ORDER_ATOMIC);
  //var text_handler_function = Blockly.Python.text_handler_function(block, 'handler_function', Blockly.Python.ORDER_ATOMIC);
  var text_handler_function = block.getFieldValue('handler_function');
  // TODO: Assemble Python into code variable.
  var code = 'explorerhat.touch.' + value_pads + '.' + value_events + '(' + text_handler_function + ')\n';
  var code = code.replace(/.xx./g , ".");
  Blockly.Python.definitions_['explorerhat'] = 'import explorerhat\n';
  return code;
};

/////////////////////////
//output if touch //
////////////////////////
Blockly.Blocks['iftouch'] = {
  init: function() {
    this.appendValueInput("pads2")
        .setCheck(null)
        .appendField("touch.");
    this.appendValueInput("events2")
        .setCheck(null)
        .appendField("events.");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
// python generator
Blockly.Python['iftouch'] = function(block) {
  var value_pads = Blockly.Python.valueToCode(block, 'pads2', Blockly.Python.ORDER_ATOMIC);
  var value_events = Blockly.Python.valueToCode(block, 'events2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'explorerhat.touch.' + value_pads + '.' + value_events + '()';
  var code = code.replace(/.xx./g , ".");
  Blockly.Python.definitions_['explorerhat'] = 'import explorerhat\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};


/////////////////////////
//ad_inputs//
////////////////////////
Blockly.Blocks['ad_inputs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["one", "one"], ["two", "two"], ["three", "three"], ["four", "four"], ["-", "xx"]]), "ad_input");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['ad_inputs'] = function(block) {
  var dropdown_pad = block.getFieldValue('ad_input');
  // TODO: Assemble Python into code variable.
  var code = dropdown_pad;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};


/////////////////////////
//output if touch //
////////////////////////
Blockly.Blocks['iftouch'] = {
  init: function() {
    this.appendValueInput("pads2")
        .setCheck(null)
        .appendField("touch.");
    this.appendValueInput("events2")
        .setCheck(null)
        .appendField("events.");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
// python generator
Blockly.Python['iftouch'] = function(block) {
  var value_pads = Blockly.Python.valueToCode(block, 'pads2', Blockly.Python.ORDER_ATOMIC);
  var value_events = Blockly.Python.valueToCode(block, 'events2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'explorerhat.touch.' + value_pads + '.' + value_events + '()';
  var code = code.replace(/.xx./g , ".");
  Blockly.Python.definitions_['explorerhat'] = 'import explorerhat\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/////////////////////////
//ad_inputs read//
////////////////////////
Blockly.Blocks['input_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["digital", "input"], ["analogue", "analog"]]), "dinput");
    this.appendValueInput("pins")
        .setCheck(null)
        .appendField(".");
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldTextInput("read()"), "read");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['input_read'] = function(block) {
  var dropdown_dinput = block.getFieldValue('dinput');
  var value_pins = Blockly.Python.valueToCode(block, 'pins', Blockly.Python.ORDER_ATOMIC);
  var text_read = block.getFieldValue('read');
  var code = ' explorerhat.' + dropdown_dinput + '.' + value_pins + '.' + text_read + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


/////////////////////////
//ad_inputs has_changed//
////////////////////////

Blockly.Blocks['input_has_changed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("has_changed()"), "has_changed");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['input_has_changed'] = function(block) {
  var text_read = block.getFieldValue('has_changed');
  // TODO: Assemble JavaScript into code variable.
  var code = 'input.' + text_read + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


/////////////////////////
//ad_inputs clear_events()//
////////////////////////

Blockly.Blocks['input_clear_events'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("clear_events()"), "clear_events");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['input_clear_events'] = function(block) {
  var text_read = block.getFieldValue('clear_events');
  // TODO: Assemble JavaScript into code variable.
  var code = 'input.' + text_read + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



Blockly.Blocks['ad_inputs_events'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["on_changed", "on_changed"], ["on_low", "on_low"], ["on_high", "on_high"]]), "ad_inputs_event");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['ad_inputs_events'] = function(block) {
  var dropdown_pad = block.getFieldValue('ad_inputs_event');
  // TODO: Assemble Python into code variable.
  var code = dropdown_pad;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

/////////////////////////
//input functions//
////////////////////////
Blockly.Blocks['input_function'] = {
  init: function() {
    this.appendValueInput("input_change")
        .setCheck(null)
        .appendField("input.");
	this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("handler_function"), "handler_function2");
    this.appendValueInput("input_bounce_time")
        .setCheck(null)
        .appendField("bounce_time");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// python generator
Blockly.Python['input_function'] = function(block) {
  var value_change = Blockly.Python.valueToCode(block, 'input_change', Blockly.Python.ORDER_ATOMIC);
  var value_input_bounce_time = Blockly.Python.valueToCode(block, 'input_bounce_time', Blockly.Python.ORDER_ATOMIC);
  //var text_handler_function = Blockly.Python.text_handler_function(block, 'handler_function', Blockly.Python.ORDER_ATOMIC);
  var text_handler_function = block.getFieldValue('handler_function2');
  // TODO: Assemble Python into code variable.
  var code = 'input.' + value_change + '(' + text_handler_function + '[' + value_input_bounce_time + '])\n';
  var code = code.replace(/.xx./g , ".");
  Blockly.Python.definitions_['explorerhat'] = 'import explorerhat\n';
  return code;
};

goog.provide('Blockly.Blocks.time');

goog.require('Blockly.Blocks');

/////////////////////
//activate time//
/////////////////////
var TIME_HUE = 140;
/////////////////////
//sleep//
/////////////////////  

Blockly.Blocks['sleep_ms'] = {
    init: function() {
    this.setHelpUrl('');
    this.setColour(TIME_HUE);
    this.appendValueInput('SLEEP_TIME_MILI')
        .appendField('wait');
    this.appendDummyInput()
        .appendField('milliseconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Wait specific time in milliseconds (1*1000 = 1 sec)');
  }
};
///////////////////////////////////////////////////////////////////////////////////
// javascript generator
Blockly.JavaScript['sleep_ms'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(
  block, 'SLEEP_TIME_MILI', Blockly.Python.ORDER_ATOMIC) || '0';
  var code = '// <-------sleep for ' + argument0 + '/1000) miliseconds ------->\n';
  return code;
};
///////////////////////////////////////////////////////////////////////////////////


// python generator
Blockly.Python['sleep_ms'] = function(block) {
  var argument0 = Blockly.Python.valueToCode(
      block, 'SLEEP_TIME_MILI', Blockly.Python.ORDER_ATOMIC) || '0';
  Blockly.Python.definitions_['import_sleep'] = 'from time import sleep';
  var code = 'sleep(' + argument0 + '/1000)\n';
  return code;
};
///////////////////////////////////////////////////////////////////////////////////

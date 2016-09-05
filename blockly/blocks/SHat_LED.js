goog.provide('Blockly.Blocks.SHat_LED');

goog.require('Blockly.Blocks');
// convert a hexidecimal color string to 0..255 R,G,B
function HexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function HexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function HexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
/////////////////////




/////////////////////////
//set rotation sensehat//
////////////////////////
Blockly.Blocks['set_rotation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set_rotation")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["90", "90"], ["180", "180"], ["270", "270"]]), "r");
    this.appendDummyInput()
        .appendField("redraw")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "redraw");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('needs SenseHat()');
  }
};


// JavaScript test generator
Blockly.JavaScript['set_rotation'] = function(block) {
  var dropdown_r = block.getFieldValue('r');
  code = '// <-------sense.set_rotation(' + String(dropdown_r) + String(')------->');
  return [code,Blockly.JavaScript.ORDER_ATOMIC];
  return window.alert(String('sense.set_rotation(') + String(dropdown_r) + String(')'));
};



// python generator
Blockly.Python['set_rotation'] = function(block) {
  var dropdown_r = block.getFieldValue('r');
  var checkbox_redraw = block.getFieldValue('redraw');
  // Get the rotation angle r  and redraws the figure if checked.
  var code ='sense.set_rotation('+ dropdown_r + ')\n' ;
 // if (checkbox_redraw == 'TRUE') {code = code + 'redraw\n'};
  // sense.set_rotation(180)
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return code;
};
////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////
//flip LED field sensehat//
///////////////////////////

Blockly.Blocks['flip_h'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("flip_h")
        this.appendDummyInput()
        .appendField("redraw")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "redraw");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('needs SenseHat()');
  }
};

// JavaScript test generator
  
  Blockly.JavaScript['flip_h'] = function(block) {
  code = '// <---- flip_h ----->';
  return [code,Blockly.JavaScript.ORDER_ATOMIC];
  return window.alert(String('flip_h'));
};


// python generator
Blockly.Python['flip_h'] = function(block) {
	var code ='sense.flip_h()\n' ;
	var checkbox_redraw = block.getFieldValue('redraw');
	//if (checkbox_redraw == 'TRUE') {code = code + 'redraw;\n'};
 
	Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
	return code;
};
////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////
//flip LED field sensehat//
///////////////////////////
Blockly.Blocks['flip_v'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("flip_v")
        this.appendDummyInput()
        .appendField("redraw")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "redraw");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('needs SenseHat()');
  }
};

// JavaScript test generator

  Blockly.JavaScript['flip_v'] = function(block) {
  code = '// <----- flip_v ---->';
  return [code,Blockly.JavaScript.ORDER_ATOMIC];
  return window.alert(String('flip_v'));
};


// python generator
Blockly.Python['flip_v'] = function(block) {
	var code ='sense.flip_v()\n' ;
	var checkbox_redraw = block.getFieldValue('redraw');
	// if (checkbox_redraw == 'TRUE') {code = code + 'redraw;\n'};
   
	Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
	return code;
};

////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////
//make a LED field sensehat//
/////////////////////////////
Blockly.Blocks['led_field'] = {
  init: function() {
	 // set your Field colours here
	Blockly.FieldColour.COLOURS = ['#000000', '#028200','#A20046', '#ff0000','#00ff00','#0000ff','#6600cc','#ff00ff','#FF8000', '#FFFF00', '#FFFFFF', '#00FFFF'];
	Blockly.FieldColour.COLUMNS = 3;
	this.appendDummyInput()
        .appendField("LED field");
	this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "r1")
        .appendField(new Blockly.FieldColour("#000000"), "r2")
		.appendField(new Blockly.FieldColour("#000000"), "r3")
        .appendField(new Blockly.FieldColour("#000000"), "r4")
		.appendField(new Blockly.FieldColour("#000000"), "r5")
        .appendField(new Blockly.FieldColour("#000000"), "r6")
		.appendField(new Blockly.FieldColour("#000000"), "r7")
		.appendField(new Blockly.FieldColour("#000000"), "r8");
	this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "r9")
		.appendField(new Blockly.FieldColour("#000000"), "r10")
        .appendField(new Blockly.FieldColour("#000000"), "r11")
		.appendField(new Blockly.FieldColour("#000000"), "r12")
        .appendField(new Blockly.FieldColour("#000000"), "r13")
		.appendField(new Blockly.FieldColour("#000000"), "r14")		
		.appendField(new Blockly.FieldColour("#000000"), "r15")
		.appendField(new Blockly.FieldColour("#000000"), "r16");
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#000000"), "r17")
		.appendField(new Blockly.FieldColour("#000000"), "r18")
		.appendField(new Blockly.FieldColour("#000000"), "r19")
		.appendField(new Blockly.FieldColour("#000000"), "r20")
		.appendField(new Blockly.FieldColour("#000000"), "r21")
		.appendField(new Blockly.FieldColour("#000000"), "r22")
		.appendField(new Blockly.FieldColour("#000000"), "r23")
		.appendField(new Blockly.FieldColour("#000000"), "r24");
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#000000"), "r25")
		.appendField(new Blockly.FieldColour("#000000"), "r26")
		.appendField(new Blockly.FieldColour("#000000"), "r27")
		.appendField(new Blockly.FieldColour("#000000"), "r28")
		.appendField(new Blockly.FieldColour("#000000"), "r29")
		.appendField(new Blockly.FieldColour("#000000"), "r30")
		.appendField(new Blockly.FieldColour("#000000"), "r31")
		.appendField(new Blockly.FieldColour("#000000"), "r32");
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#000000"), "r33")
		.appendField(new Blockly.FieldColour("#000000"), "r34")
		.appendField(new Blockly.FieldColour("#000000"), "r35")
		.appendField(new Blockly.FieldColour("#000000"), "r36")
		.appendField(new Blockly.FieldColour("#000000"), "r37")
		.appendField(new Blockly.FieldColour("#000000"), "r38")
		.appendField(new Blockly.FieldColour("#000000"), "r39")
		.appendField(new Blockly.FieldColour("#000000"), "r40");
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#000000"), "r41")
		.appendField(new Blockly.FieldColour("#000000"), "r42")
		.appendField(new Blockly.FieldColour("#000000"), "r43")
		.appendField(new Blockly.FieldColour("#000000"), "r44")
		.appendField(new Blockly.FieldColour("#000000"), "r45")
		.appendField(new Blockly.FieldColour("#000000"), "r46")
		.appendField(new Blockly.FieldColour("#000000"), "r47")
		.appendField(new Blockly.FieldColour("#000000"), "r48");
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#000000"), "r49")
		.appendField(new Blockly.FieldColour("#000000"), "r50")
		.appendField(new Blockly.FieldColour("#000000"), "r51")
		.appendField(new Blockly.FieldColour("#000000"), "r52")
		.appendField(new Blockly.FieldColour("#000000"), "r53")
		.appendField(new Blockly.FieldColour("#000000"), "r54")
		.appendField(new Blockly.FieldColour("#000000"), "r55")
		.appendField(new Blockly.FieldColour("#000000"), "r56");
	this.appendDummyInput()
		.appendField(new Blockly.FieldColour("#000000"), "r57")
		.appendField(new Blockly.FieldColour("#000000"), "r58")
		.appendField(new Blockly.FieldColour("#000000"), "r59")
		.appendField(new Blockly.FieldColour("#000000"), "r60")
		.appendField(new Blockly.FieldColour("#000000"), "r61")
		.appendField(new Blockly.FieldColour("#000000"), "r62")
		.appendField(new Blockly.FieldColour("#000000"), "r63")
		.appendField(new Blockly.FieldColour("#000000"), "r64");
    this.setOutput(true, null);
	this.setColour(25);
    this.setTooltip('set the LED field and click it into a variable. Then use the set_LED_field');
    this.setHelpUrl('https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#auxotz');
  }
};


// JavaScript test generator
Blockly.JavaScript['led_field'] = function(block) {
	var colour_r1 = '[' + HexToR(block.getFieldValue('r1')) + ',' + HexToG(block.getFieldValue('r1')) + ',' + HexToB(block.getFieldValue('r1')) + ']'
	var colour_r2 = '[' + HexToR(block.getFieldValue('r2')) + ',' + HexToG(block.getFieldValue('r2')) + ',' + HexToB(block.getFieldValue('r2')) + ']'
	var colour_r3 = '[' + HexToR(block.getFieldValue('r3')) + ',' + HexToG(block.getFieldValue('r3')) + ',' + HexToB(block.getFieldValue('r3')) + ']'
	var colour_r4 = '[' + HexToR(block.getFieldValue('r4')) + ',' + HexToG(block.getFieldValue('r4')) + ',' + HexToB(block.getFieldValue('r4')) + ']'
	var colour_r5 = '[' + HexToR(block.getFieldValue('r5')) + ',' + HexToG(block.getFieldValue('r5')) + ',' + HexToB(block.getFieldValue('r5')) + ']'
	var colour_r6 = '[' + HexToR(block.getFieldValue('r6')) + ',' + HexToG(block.getFieldValue('r6')) + ',' + HexToB(block.getFieldValue('r6')) + ']'
	var colour_r7 = '[' + HexToR(block.getFieldValue('r7')) + ',' + HexToG(block.getFieldValue('r7')) + ',' + HexToB(block.getFieldValue('r7')) + ']'
	var colour_r8 = '[' + HexToR(block.getFieldValue('r8')) + ',' + HexToG(block.getFieldValue('r8')) + ',' + HexToB(block.getFieldValue('r8')) + ']'
	var colour_r9 = '[' + HexToR(block.getFieldValue('r9')) + ',' + HexToG(block.getFieldValue('r9')) + ',' + HexToB(block.getFieldValue('r9')) + ']'
	var colour_r10 = '[' + HexToR(block.getFieldValue('r10')) + ',' + HexToG(block.getFieldValue('r10')) + ',' + HexToB(block.getFieldValue('r10')) + ']'
	var colour_r11 = '[' + HexToR(block.getFieldValue('r11')) + ',' + HexToG(block.getFieldValue('r11')) + ',' + HexToB(block.getFieldValue('r11')) + ']'
	var colour_r12 = '[' + HexToR(block.getFieldValue('r12')) + ',' + HexToG(block.getFieldValue('r12')) + ',' + HexToB(block.getFieldValue('r12')) + ']'
	var colour_r13 = '[' + HexToR(block.getFieldValue('r13')) + ',' + HexToG(block.getFieldValue('r13')) + ',' + HexToB(block.getFieldValue('r13')) + ']'
	var colour_r14 = '[' + HexToR(block.getFieldValue('r14')) + ',' + HexToG(block.getFieldValue('r14')) + ',' + HexToB(block.getFieldValue('r14')) + ']'
	var colour_r15 = '[' + HexToR(block.getFieldValue('r15')) + ',' + HexToG(block.getFieldValue('r15')) + ',' + HexToB(block.getFieldValue('r15')) + ']'
	var colour_r16 = '[' + HexToR(block.getFieldValue('r16')) + ',' + HexToG(block.getFieldValue('r16')) + ',' + HexToB(block.getFieldValue('r16')) + ']'
	var colour_r17 = '[' + HexToR(block.getFieldValue('r17')) + ',' + HexToG(block.getFieldValue('r17')) + ',' + HexToB(block.getFieldValue('r17')) + ']'
	var colour_r18 = '[' + HexToR(block.getFieldValue('r18')) + ',' + HexToG(block.getFieldValue('r18')) + ',' + HexToB(block.getFieldValue('r18')) + ']'
	var colour_r19 = '[' + HexToR(block.getFieldValue('r19')) + ',' + HexToG(block.getFieldValue('r19')) + ',' + HexToB(block.getFieldValue('r19')) + ']'
	var colour_r20 = '[' + HexToR(block.getFieldValue('r20')) + ',' + HexToG(block.getFieldValue('r20')) + ',' + HexToB(block.getFieldValue('r20')) + ']'
	var colour_r21 = '[' + HexToR(block.getFieldValue('r21')) + ',' + HexToG(block.getFieldValue('r21')) + ',' + HexToB(block.getFieldValue('r21')) + ']'
	var colour_r22 = '[' + HexToR(block.getFieldValue('r22')) + ',' + HexToG(block.getFieldValue('r22')) + ',' + HexToB(block.getFieldValue('r22')) + ']'
	var colour_r23 = '[' + HexToR(block.getFieldValue('r23')) + ',' + HexToG(block.getFieldValue('r23')) + ',' + HexToB(block.getFieldValue('r23')) + ']'
	var colour_r24 = '[' + HexToR(block.getFieldValue('r24')) + ',' + HexToG(block.getFieldValue('r24')) + ',' + HexToB(block.getFieldValue('r24')) + ']'
	var colour_r25 = '[' + HexToR(block.getFieldValue('r25')) + ',' + HexToG(block.getFieldValue('r25')) + ',' + HexToB(block.getFieldValue('r25')) + ']'
	var colour_r26 = '[' + HexToR(block.getFieldValue('r26')) + ',' + HexToG(block.getFieldValue('r26')) + ',' + HexToB(block.getFieldValue('r26')) + ']'
	var colour_r27 = '[' + HexToR(block.getFieldValue('r27')) + ',' + HexToG(block.getFieldValue('r27')) + ',' + HexToB(block.getFieldValue('r27')) + ']'
	var colour_r28 = '[' + HexToR(block.getFieldValue('r28')) + ',' + HexToG(block.getFieldValue('r28')) + ',' + HexToB(block.getFieldValue('r28')) + ']'
	var colour_r29 = '[' + HexToR(block.getFieldValue('r29')) + ',' + HexToG(block.getFieldValue('r29')) + ',' + HexToB(block.getFieldValue('r29')) + ']'
	var colour_r30 = '[' + HexToR(block.getFieldValue('r30')) + ',' + HexToG(block.getFieldValue('r30')) + ',' + HexToB(block.getFieldValue('r30')) + ']'
	var colour_r31 = '[' + HexToR(block.getFieldValue('r31')) + ',' + HexToG(block.getFieldValue('r31')) + ',' + HexToB(block.getFieldValue('r31')) + ']'
	var colour_r32 = '[' + HexToR(block.getFieldValue('r32')) + ',' + HexToG(block.getFieldValue('r32')) + ',' + HexToB(block.getFieldValue('r32')) + ']'
	var colour_r33 = '[' + HexToR(block.getFieldValue('r33')) + ',' + HexToG(block.getFieldValue('r33')) + ',' + HexToB(block.getFieldValue('r33')) + ']'
	var colour_r34 = '[' + HexToR(block.getFieldValue('r34')) + ',' + HexToG(block.getFieldValue('r34')) + ',' + HexToB(block.getFieldValue('r34')) + ']'
	var colour_r35 = '[' + HexToR(block.getFieldValue('r35')) + ',' + HexToG(block.getFieldValue('r35')) + ',' + HexToB(block.getFieldValue('r35')) + ']'
	var colour_r36 = '[' + HexToR(block.getFieldValue('r36')) + ',' + HexToG(block.getFieldValue('r36')) + ',' + HexToB(block.getFieldValue('r36')) + ']'
	var colour_r37 = '[' + HexToR(block.getFieldValue('r37')) + ',' + HexToG(block.getFieldValue('r37')) + ',' + HexToB(block.getFieldValue('r37')) + ']'
	var colour_r38 = '[' + HexToR(block.getFieldValue('r38')) + ',' + HexToG(block.getFieldValue('r38')) + ',' + HexToB(block.getFieldValue('r38')) + ']'
	var colour_r39 = '[' + HexToR(block.getFieldValue('r39')) + ',' + HexToG(block.getFieldValue('r39')) + ',' + HexToB(block.getFieldValue('r39')) + ']'
	var colour_r40 = '[' + HexToR(block.getFieldValue('r40')) + ',' + HexToG(block.getFieldValue('r40')) + ',' + HexToB(block.getFieldValue('r40')) + ']'
	var colour_r41 = '[' + HexToR(block.getFieldValue('r41')) + ',' + HexToG(block.getFieldValue('r41')) + ',' + HexToB(block.getFieldValue('r41')) + ']'
	var colour_r42 = '[' + HexToR(block.getFieldValue('r42')) + ',' + HexToG(block.getFieldValue('r42')) + ',' + HexToB(block.getFieldValue('r42')) + ']'
	var colour_r43 = '[' + HexToR(block.getFieldValue('r43')) + ',' + HexToG(block.getFieldValue('r43')) + ',' + HexToB(block.getFieldValue('r43')) + ']'
	var colour_r44 = '[' + HexToR(block.getFieldValue('r44')) + ',' + HexToG(block.getFieldValue('r44')) + ',' + HexToB(block.getFieldValue('r44')) + ']'
	var colour_r45 = '[' + HexToR(block.getFieldValue('r45')) + ',' + HexToG(block.getFieldValue('r45')) + ',' + HexToB(block.getFieldValue('r45')) + ']'
	var colour_r46 = '[' + HexToR(block.getFieldValue('r46')) + ',' + HexToG(block.getFieldValue('r46')) + ',' + HexToB(block.getFieldValue('r46')) + ']'
	var colour_r47 = '[' + HexToR(block.getFieldValue('r47')) + ',' + HexToG(block.getFieldValue('r47')) + ',' + HexToB(block.getFieldValue('r47')) + ']'
	var colour_r48 = '[' + HexToR(block.getFieldValue('r48')) + ',' + HexToG(block.getFieldValue('r48')) + ',' + HexToB(block.getFieldValue('r48')) + ']'
	var colour_r49 = '[' + HexToR(block.getFieldValue('r49')) + ',' + HexToG(block.getFieldValue('r49')) + ',' + HexToB(block.getFieldValue('r49')) + ']'
	var colour_r50 = '[' + HexToR(block.getFieldValue('r50')) + ',' + HexToG(block.getFieldValue('r50')) + ',' + HexToB(block.getFieldValue('r50')) + ']'
	var colour_r51 = '[' + HexToR(block.getFieldValue('r51')) + ',' + HexToG(block.getFieldValue('r51')) + ',' + HexToB(block.getFieldValue('r51')) + ']'
	var colour_r52 = '[' + HexToR(block.getFieldValue('r52')) + ',' + HexToG(block.getFieldValue('r52')) + ',' + HexToB(block.getFieldValue('r52')) + ']'
	var colour_r53 = '[' + HexToR(block.getFieldValue('r53')) + ',' + HexToG(block.getFieldValue('r53')) + ',' + HexToB(block.getFieldValue('r53')) + ']'
	var colour_r54 = '[' + HexToR(block.getFieldValue('r54')) + ',' + HexToG(block.getFieldValue('r54')) + ',' + HexToB(block.getFieldValue('r54')) + ']'
	var colour_r55 = '[' + HexToR(block.getFieldValue('r55')) + ',' + HexToG(block.getFieldValue('r55')) + ',' + HexToB(block.getFieldValue('r55')) + ']'
	var colour_r56 = '[' + HexToR(block.getFieldValue('r56')) + ',' + HexToG(block.getFieldValue('r56')) + ',' + HexToB(block.getFieldValue('r56')) + ']'
	var colour_r57 = '[' + HexToR(block.getFieldValue('r57')) + ',' + HexToG(block.getFieldValue('r57')) + ',' + HexToB(block.getFieldValue('r57')) + ']'
	var colour_r58 = '[' + HexToR(block.getFieldValue('r58')) + ',' + HexToG(block.getFieldValue('r58')) + ',' + HexToB(block.getFieldValue('r58')) + ']'
	var colour_r59 = '[' + HexToR(block.getFieldValue('r59')) + ',' + HexToG(block.getFieldValue('r59')) + ',' + HexToB(block.getFieldValue('r59')) + ']'
	var colour_r60 = '[' + HexToR(block.getFieldValue('r60')) + ',' + HexToG(block.getFieldValue('r60')) + ',' + HexToB(block.getFieldValue('r60')) + ']'
	var colour_r61 = '[' + HexToR(block.getFieldValue('r61')) + ',' + HexToG(block.getFieldValue('r61')) + ',' + HexToB(block.getFieldValue('r61')) + ']'
	var colour_r62 = '[' + HexToR(block.getFieldValue('r62')) + ',' + HexToG(block.getFieldValue('r62')) + ',' + HexToB(block.getFieldValue('r62')) + ']'
	var colour_r63 = '[' + HexToR(block.getFieldValue('r63')) + ',' + HexToG(block.getFieldValue('r63')) + ',' + HexToB(block.getFieldValue('r63')) + ']'
	var colour_r64 = '[' + HexToR(block.getFieldValue('r64')) + ',' + HexToG(block.getFieldValue('r64')) + ',' + HexToB(block.getFieldValue('r64')) + ']'
  
  var code =  '['  + colour_r1 + ', ' + colour_r2+ ', ' + colour_r3 + ', '
  + colour_r4+ ', ' + colour_r5 + ', ' + colour_r6+ ', ' + colour_r7+ ', ' + colour_r8+ ',\n ' 
  + colour_r9+ ', ' + colour_r10+ ', ' + colour_r11+ ', ' + colour_r12+ ', ' + colour_r13+ ', ' 
  + colour_r14+ ', ' + colour_r15+ ', ' + colour_r16+ ',\n ' + colour_r17+ ', ' + colour_r18+ ', ' 
  + colour_r19+ ', ' + colour_r20+ ', ' + colour_r21+ ', ' + colour_r22+ ', ' + colour_r23+ ', ' 
  + colour_r24+ ',\n ' + colour_r25+ ', ' + colour_r26+ ', ' + colour_r27+ ', ' + colour_r28+ ', ' 
  + colour_r29+ ', ' + colour_r30+ ', ' + colour_r31+ ', ' + colour_r32+ ',\n ' + colour_r33+ ', ' 
  + colour_r34+ ', ' + colour_r35+ ', ' + colour_r36+ ', ' + colour_r37+ ', ' + colour_r38+ ', ' 
  + colour_r39+ ', ' + colour_r40+ ',\n ' + colour_r41+ ', ' + colour_r42+ ', ' + colour_r43+ ', ' 
  + colour_r44+ ', ' + colour_r45+ ', ' + colour_r46+ ', ' + colour_r47+ ', ' + colour_r48+ ',\n ' 
  + colour_r49+ ', ' + colour_r50+ ', ' + colour_r51+ ', ' + colour_r52+ ', ' + colour_r53+ ', ' 
  + colour_r54+ ', ' + colour_r55+ ', ' + colour_r56+ ',\n ' + colour_r57+ ', ' + colour_r58+ ', ' 
  + colour_r59+ ', ' + colour_r60+ ', ' + colour_r61+ ', ' + colour_r62+ ', ' + colour_r63+ ', ' 
  + colour_r64+ ']\n';
  // returns an array in the form of [r,g,b]*64
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
  
};

// python generator
Blockly.Python['led_field'] = function(block) {
	var colour_r1 = '[' + HexToR(block.getFieldValue('r1')) + ',' + HexToG(block.getFieldValue('r1')) + ',' + HexToB(block.getFieldValue('r1')) + ']'
	var colour_r2 = '[' + HexToR(block.getFieldValue('r2')) + ',' + HexToG(block.getFieldValue('r2')) + ',' + HexToB(block.getFieldValue('r2')) + ']'
	var colour_r3 = '[' + HexToR(block.getFieldValue('r3')) + ',' + HexToG(block.getFieldValue('r3')) + ',' + HexToB(block.getFieldValue('r3')) + ']'
	var colour_r4 = '[' + HexToR(block.getFieldValue('r4')) + ',' + HexToG(block.getFieldValue('r4')) + ',' + HexToB(block.getFieldValue('r4')) + ']'
	var colour_r5 = '[' + HexToR(block.getFieldValue('r5')) + ',' + HexToG(block.getFieldValue('r5')) + ',' + HexToB(block.getFieldValue('r5')) + ']'
	var colour_r6 = '[' + HexToR(block.getFieldValue('r6')) + ',' + HexToG(block.getFieldValue('r6')) + ',' + HexToB(block.getFieldValue('r6')) + ']'
	var colour_r7 = '[' + HexToR(block.getFieldValue('r7')) + ',' + HexToG(block.getFieldValue('r7')) + ',' + HexToB(block.getFieldValue('r7')) + ']'
	var colour_r8 = '[' + HexToR(block.getFieldValue('r8')) + ',' + HexToG(block.getFieldValue('r8')) + ',' + HexToB(block.getFieldValue('r8')) + ']'
	var colour_r9 = '[' + HexToR(block.getFieldValue('r9')) + ',' + HexToG(block.getFieldValue('r9')) + ',' + HexToB(block.getFieldValue('r9')) + ']'
	var colour_r10 = '[' + HexToR(block.getFieldValue('r10')) + ',' + HexToG(block.getFieldValue('r10')) + ',' + HexToB(block.getFieldValue('r10')) + ']'
	var colour_r11 = '[' + HexToR(block.getFieldValue('r11')) + ',' + HexToG(block.getFieldValue('r11')) + ',' + HexToB(block.getFieldValue('r11')) + ']'
	var colour_r12 = '[' + HexToR(block.getFieldValue('r12')) + ',' + HexToG(block.getFieldValue('r12')) + ',' + HexToB(block.getFieldValue('r12')) + ']'
	var colour_r13 = '[' + HexToR(block.getFieldValue('r13')) + ',' + HexToG(block.getFieldValue('r13')) + ',' + HexToB(block.getFieldValue('r13')) + ']'
	var colour_r14 = '[' + HexToR(block.getFieldValue('r14')) + ',' + HexToG(block.getFieldValue('r14')) + ',' + HexToB(block.getFieldValue('r14')) + ']'
	var colour_r15 = '[' + HexToR(block.getFieldValue('r15')) + ',' + HexToG(block.getFieldValue('r15')) + ',' + HexToB(block.getFieldValue('r15')) + ']'
	var colour_r16 = '[' + HexToR(block.getFieldValue('r16')) + ',' + HexToG(block.getFieldValue('r16')) + ',' + HexToB(block.getFieldValue('r16')) + ']'
	var colour_r17 = '[' + HexToR(block.getFieldValue('r17')) + ',' + HexToG(block.getFieldValue('r17')) + ',' + HexToB(block.getFieldValue('r17')) + ']'
	var colour_r18 = '[' + HexToR(block.getFieldValue('r18')) + ',' + HexToG(block.getFieldValue('r18')) + ',' + HexToB(block.getFieldValue('r18')) + ']'
	var colour_r19 = '[' + HexToR(block.getFieldValue('r19')) + ',' + HexToG(block.getFieldValue('r19')) + ',' + HexToB(block.getFieldValue('r19')) + ']'
	var colour_r20 = '[' + HexToR(block.getFieldValue('r20')) + ',' + HexToG(block.getFieldValue('r20')) + ',' + HexToB(block.getFieldValue('r20')) + ']'
	var colour_r21 = '[' + HexToR(block.getFieldValue('r21')) + ',' + HexToG(block.getFieldValue('r21')) + ',' + HexToB(block.getFieldValue('r21')) + ']'
	var colour_r22 = '[' + HexToR(block.getFieldValue('r22')) + ',' + HexToG(block.getFieldValue('r22')) + ',' + HexToB(block.getFieldValue('r22')) + ']'
	var colour_r23 = '[' + HexToR(block.getFieldValue('r23')) + ',' + HexToG(block.getFieldValue('r23')) + ',' + HexToB(block.getFieldValue('r23')) + ']'
	var colour_r24 = '[' + HexToR(block.getFieldValue('r24')) + ',' + HexToG(block.getFieldValue('r24')) + ',' + HexToB(block.getFieldValue('r24')) + ']'
	var colour_r25 = '[' + HexToR(block.getFieldValue('r25')) + ',' + HexToG(block.getFieldValue('r25')) + ',' + HexToB(block.getFieldValue('r25')) + ']'
	var colour_r26 = '[' + HexToR(block.getFieldValue('r26')) + ',' + HexToG(block.getFieldValue('r26')) + ',' + HexToB(block.getFieldValue('r26')) + ']'
	var colour_r27 = '[' + HexToR(block.getFieldValue('r27')) + ',' + HexToG(block.getFieldValue('r27')) + ',' + HexToB(block.getFieldValue('r27')) + ']'
	var colour_r28 = '[' + HexToR(block.getFieldValue('r28')) + ',' + HexToG(block.getFieldValue('r28')) + ',' + HexToB(block.getFieldValue('r28')) + ']'
	var colour_r29 = '[' + HexToR(block.getFieldValue('r29')) + ',' + HexToG(block.getFieldValue('r29')) + ',' + HexToB(block.getFieldValue('r29')) + ']'
	var colour_r30 = '[' + HexToR(block.getFieldValue('r30')) + ',' + HexToG(block.getFieldValue('r30')) + ',' + HexToB(block.getFieldValue('r30')) + ']'
	var colour_r31 = '[' + HexToR(block.getFieldValue('r31')) + ',' + HexToG(block.getFieldValue('r31')) + ',' + HexToB(block.getFieldValue('r31')) + ']'
	var colour_r32 = '[' + HexToR(block.getFieldValue('r32')) + ',' + HexToG(block.getFieldValue('r32')) + ',' + HexToB(block.getFieldValue('r32')) + ']'
	var colour_r33 = '[' + HexToR(block.getFieldValue('r33')) + ',' + HexToG(block.getFieldValue('r33')) + ',' + HexToB(block.getFieldValue('r33')) + ']'
	var colour_r34 = '[' + HexToR(block.getFieldValue('r34')) + ',' + HexToG(block.getFieldValue('r34')) + ',' + HexToB(block.getFieldValue('r34')) + ']'
	var colour_r35 = '[' + HexToR(block.getFieldValue('r35')) + ',' + HexToG(block.getFieldValue('r35')) + ',' + HexToB(block.getFieldValue('r35')) + ']'
	var colour_r36 = '[' + HexToR(block.getFieldValue('r36')) + ',' + HexToG(block.getFieldValue('r36')) + ',' + HexToB(block.getFieldValue('r36')) + ']'
	var colour_r37 = '[' + HexToR(block.getFieldValue('r37')) + ',' + HexToG(block.getFieldValue('r37')) + ',' + HexToB(block.getFieldValue('r37')) + ']'
	var colour_r38 = '[' + HexToR(block.getFieldValue('r38')) + ',' + HexToG(block.getFieldValue('r38')) + ',' + HexToB(block.getFieldValue('r38')) + ']'
	var colour_r39 = '[' + HexToR(block.getFieldValue('r39')) + ',' + HexToG(block.getFieldValue('r39')) + ',' + HexToB(block.getFieldValue('r39')) + ']'
	var colour_r40 = '[' + HexToR(block.getFieldValue('r40')) + ',' + HexToG(block.getFieldValue('r40')) + ',' + HexToB(block.getFieldValue('r40')) + ']'
	var colour_r41 = '[' + HexToR(block.getFieldValue('r41')) + ',' + HexToG(block.getFieldValue('r41')) + ',' + HexToB(block.getFieldValue('r41')) + ']'
	var colour_r42 = '[' + HexToR(block.getFieldValue('r42')) + ',' + HexToG(block.getFieldValue('r42')) + ',' + HexToB(block.getFieldValue('r42')) + ']'
	var colour_r43 = '[' + HexToR(block.getFieldValue('r43')) + ',' + HexToG(block.getFieldValue('r43')) + ',' + HexToB(block.getFieldValue('r43')) + ']'
	var colour_r44 = '[' + HexToR(block.getFieldValue('r44')) + ',' + HexToG(block.getFieldValue('r44')) + ',' + HexToB(block.getFieldValue('r44')) + ']'
	var colour_r45 = '[' + HexToR(block.getFieldValue('r45')) + ',' + HexToG(block.getFieldValue('r45')) + ',' + HexToB(block.getFieldValue('r45')) + ']'
	var colour_r46 = '[' + HexToR(block.getFieldValue('r46')) + ',' + HexToG(block.getFieldValue('r46')) + ',' + HexToB(block.getFieldValue('r46')) + ']'
	var colour_r47 = '[' + HexToR(block.getFieldValue('r47')) + ',' + HexToG(block.getFieldValue('r47')) + ',' + HexToB(block.getFieldValue('r47')) + ']'
	var colour_r48 = '[' + HexToR(block.getFieldValue('r48')) + ',' + HexToG(block.getFieldValue('r48')) + ',' + HexToB(block.getFieldValue('r48')) + ']'
	var colour_r49 = '[' + HexToR(block.getFieldValue('r49')) + ',' + HexToG(block.getFieldValue('r49')) + ',' + HexToB(block.getFieldValue('r49')) + ']'
	var colour_r50 = '[' + HexToR(block.getFieldValue('r50')) + ',' + HexToG(block.getFieldValue('r50')) + ',' + HexToB(block.getFieldValue('r50')) + ']'
	var colour_r51 = '[' + HexToR(block.getFieldValue('r51')) + ',' + HexToG(block.getFieldValue('r51')) + ',' + HexToB(block.getFieldValue('r51')) + ']'
	var colour_r52 = '[' + HexToR(block.getFieldValue('r52')) + ',' + HexToG(block.getFieldValue('r52')) + ',' + HexToB(block.getFieldValue('r52')) + ']'
	var colour_r53 = '[' + HexToR(block.getFieldValue('r53')) + ',' + HexToG(block.getFieldValue('r53')) + ',' + HexToB(block.getFieldValue('r53')) + ']'
	var colour_r54 = '[' + HexToR(block.getFieldValue('r54')) + ',' + HexToG(block.getFieldValue('r54')) + ',' + HexToB(block.getFieldValue('r54')) + ']'
	var colour_r55 = '[' + HexToR(block.getFieldValue('r55')) + ',' + HexToG(block.getFieldValue('r55')) + ',' + HexToB(block.getFieldValue('r55')) + ']'
	var colour_r56 = '[' + HexToR(block.getFieldValue('r56')) + ',' + HexToG(block.getFieldValue('r56')) + ',' + HexToB(block.getFieldValue('r56')) + ']'
	var colour_r57 = '[' + HexToR(block.getFieldValue('r57')) + ',' + HexToG(block.getFieldValue('r57')) + ',' + HexToB(block.getFieldValue('r57')) + ']'
	var colour_r58 = '[' + HexToR(block.getFieldValue('r58')) + ',' + HexToG(block.getFieldValue('r58')) + ',' + HexToB(block.getFieldValue('r58')) + ']'
	var colour_r59 = '[' + HexToR(block.getFieldValue('r59')) + ',' + HexToG(block.getFieldValue('r59')) + ',' + HexToB(block.getFieldValue('r59')) + ']'
	var colour_r60 = '[' + HexToR(block.getFieldValue('r60')) + ',' + HexToG(block.getFieldValue('r60')) + ',' + HexToB(block.getFieldValue('r60')) + ']'
	var colour_r61 = '[' + HexToR(block.getFieldValue('r61')) + ',' + HexToG(block.getFieldValue('r61')) + ',' + HexToB(block.getFieldValue('r61')) + ']'
	var colour_r62 = '[' + HexToR(block.getFieldValue('r62')) + ',' + HexToG(block.getFieldValue('r62')) + ',' + HexToB(block.getFieldValue('r62')) + ']'
	var colour_r63 = '[' + HexToR(block.getFieldValue('r63')) + ',' + HexToG(block.getFieldValue('r63')) + ',' + HexToB(block.getFieldValue('r63')) + ']'
	var colour_r64 = '[' + HexToR(block.getFieldValue('r64')) + ',' + HexToG(block.getFieldValue('r64')) + ',' + HexToB(block.getFieldValue('r64')) + ']'
  
  var code =  '['  + colour_r1 + ', ' + colour_r2+ ', ' + colour_r3 + ', '
  + colour_r4+ ', ' + colour_r5 + ', ' + colour_r6+ ', ' + colour_r7+ ', ' + colour_r8+ ',\n ' 
  + colour_r9+ ', ' + colour_r10+ ', ' + colour_r11+ ', ' + colour_r12+ ', ' + colour_r13+ ', ' 
  + colour_r14+ ', ' + colour_r15+ ', ' + colour_r16+ ',\n ' + colour_r17+ ', ' + colour_r18+ ', ' 
  + colour_r19+ ', ' + colour_r20+ ', ' + colour_r21+ ', ' + colour_r22+ ', ' + colour_r23+ ', ' 
  + colour_r24+ ',\n ' + colour_r25+ ', ' + colour_r26+ ', ' + colour_r27+ ', ' + colour_r28+ ', ' 
  + colour_r29+ ', ' + colour_r30+ ', ' + colour_r31+ ', ' + colour_r32+ ',\n ' + colour_r33+ ', ' 
  + colour_r34+ ', ' + colour_r35+ ', ' + colour_r36+ ', ' + colour_r37+ ', ' + colour_r38+ ', ' 
  + colour_r39+ ', ' + colour_r40+ ',\n ' + colour_r41+ ', ' + colour_r42+ ', ' + colour_r43+ ', ' 
  + colour_r44+ ', ' + colour_r45+ ', ' + colour_r46+ ', ' + colour_r47+ ', ' + colour_r48+ ',\n ' 
  + colour_r49+ ', ' + colour_r50+ ', ' + colour_r51+ ', ' + colour_r52+ ', ' + colour_r53+ ', ' 
  + colour_r54+ ', ' + colour_r55+ ', ' + colour_r56+ ',\n ' + colour_r57+ ', ' + colour_r58+ ', ' 
  + colour_r59+ ', ' + colour_r60+ ', ' + colour_r61+ ', ' + colour_r62+ ', ' + colour_r63+ ', ' 
  + colour_r64+ ']\n';
  // returns an array in the form of [r,g,b]*64
  return [code, Blockly.Python.ORDER_ATOMIC];
  
};

///////////////////////////////////////////////////////////////////////////////////led_clear

////////////////////////////////
//clear the LED field////
////////////////////////////////
Blockly.Blocks['led_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("clear LED field");
	this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "colour");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('you can set the field with one colour, or leave empty for OFF');
    this.setHelpUrl('http://www.example.com/');
  }
};


// JavaScript test generator
Blockly.JavaScript['led_clear'] = function(block) {
  var colour_colour = block.getFieldValue('colour');
  var value_clear_field = HexToR(colour_colour) + ',' + HexToG(colour_colour) + ',' + HexToB(colour_colour);
  var code = String('// <---- led_clear(') + String(value_set_led_field)+ String(') ----->//\n');
  return code;
//  return window.alert(String('led_clear(') + String(value_clear_field)+ String(')'));
};
  
// python generator
Blockly.Python['led_clear'] = function(block) {
  var colour_colour = block.getFieldValue('colour');
  var value_clear_field = HexToR(colour_colour) + ',' + HexToG(colour_colour) + ',' + HexToB(colour_colour);
  // clears the field with (r,g,b)
  var code = 'sense.clear(' + value_clear_field + ')\n';
  
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return code;
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//set the LED field sensehat////
////////////////////////////////
Blockly.Blocks['set_pixels'] = {
  init: function() {
    this.appendValueInput("set_LED")
        .setCheck(["Array", ""])
        .appendField("set LED field");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('Set one LED or a field with: set_LED or LED_field');
    this.setHelpUrl('http://www.example.com/');
  }
};


// JavaScript test generator
Blockly.JavaScript['set_pixels'] = function(block) {
  var value_set_led_field = Blockly.JavaScript.valueToCode(block, 'set_LED', Blockly.JavaScript.ORDER_ATOMIC);
  // reads 
  var code = String('// <---- set_pixels(') + String(value_set_led_field)+ String(') ----->//\n');
  return code;
//  return window.alert(String('set_pixels(') + String(value_set_led_field)+ String(')')) ;
};
  
// python generator
Blockly.Python['set_pixels'] = function(block) {
  var value_set_led_field = Blockly.Python.valueToCode(block, 'set_LED', Blockly.Python.ORDER_ATOMIC);
  // reads 
  var code = 'sense.set_pixels(' + value_set_led_field + ')   # [[r,g,b], [r,g,b],...]\n';
  
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return code;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//set one LED  sensehat////
////////////////////////////////
Blockly.Blocks['set_pixel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set one LED");
    this.appendValueInput("_X")
        .setCheck(null)
        .appendField("X");
    this.appendValueInput("_Y")
        .setCheck(null)
        .appendField("Y");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "colour");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
 


// JavaScript test generator
Blockly.JavaScript['set_pixel'] = function(block) {
  var colour_colour = block.getFieldValue('colour');
  var value__x = Blockly.JavaScript.valueToCode(block, '_X', Blockly.JavaScript.ORDER_ATOMIC);
  var value__y = Blockly.JavaScript.valueToCode(block, '_Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_set_led_field =  value__x + ',' + value__y+ ',[' + HexToR(colour_colour) + ',' + HexToG(colour_colour) + ',' + HexToB(colour_colour) + ']';
  
  var code = String('//<----  set one LED(') + String(value_set_led_field)+ String(')----> //\n');
  return code;
//  return window.alert(String('set one LED(') + String(value_set_led_field) + String(')'));
}; 




// python generator
Blockly.Python['set_pixel'] = function(block) {
  var colour_colour = block.getFieldValue('colour');
  var value__x = Blockly.Python.valueToCode(block, '_X', Blockly.Python.ORDER_ATOMIC);
  var value__y = Blockly.Python.valueToCode(block, '_Y', Blockly.Python.ORDER_ATOMIC);
  var value_set_led_field =  value__x + ',' + value__y+ ',[' + HexToR(colour_colour) + ',' + HexToG(colour_colour) + ',' + HexToB(colour_colour) + ']';
  var code = 'sense.set_pixel(' + value_set_led_field + ')   # (x,y,r,g,b)\n';
  
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return code;
};




///////////////////////////////////////////////////////////////////////////////////



////////////////////////////////
//show message  sensehat///
////////////////////////////////
Blockly.Blocks['show_message'] = {
  init: function() {
    this.appendValueInput("text_string")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Show message")
        .appendField("text_string");
    this.appendValueInput("scroll_speed")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("speed");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("text")
        .appendField(new Blockly.FieldColour("#99ff99"), "text_colour")
        .appendField("colour");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("back")
        .appendField(new Blockly.FieldColour("#000000"), "back_colour")
        .appendField("colour");
        this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// JavaScript test generator
Blockly.JavaScript['show_message'] = function(block) {
  var value_text_string = Blockly.JavaScript.valueToCode(block, 'text_string', Blockly.JavaScript.ORDER_ATOMIC);
  var value_scroll_speed = Blockly.JavaScript.valueToCode(block, 'scroll_speed', Blockly.JavaScript.ORDER_ATOMIC);
  var colour_text_colour = block.getFieldValue('text_colour');
  var colour_back_colour = block.getFieldValue('back_colour');
  var code = '// <-----sense.show_message(' + value_text_string + ', scroll_speed=' + value_scroll_speed + ', text_colour=[' + HexToR(colour_text_colour) + ',' + HexToG(colour_text_colour) + ','  + HexToB(colour_text_colour) + '], back_colour=[' + HexToR(colour_text_colour) + ',' + HexToG(colour_back_colour) + ','  + HexToB(colour_back_colour) + '])----->';
  return code;
//  return window.alert(String('set_pixels(') + String(value_set_led_field)+ String(')')) ;
};


Blockly.Python['show_message'] = function(block) {
  var value_text_string = Blockly.Python.valueToCode(block, 'text_string', Blockly.Python.ORDER_ATOMIC);
  var value_scroll_speed = Blockly.Python.valueToCode(block, 'scroll_speed', Blockly.Python.ORDER_ATOMIC);
  var colour_text_colour = block.getFieldValue('text_colour');
  var colour_back_colour = block.getFieldValue('back_colour');
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  var code = 'sense.show_message(' + value_text_string + ', scroll_speed=' + value_scroll_speed + ', text_colour=[' + HexToR(colour_text_colour) + ',' + HexToG(colour_text_colour) + ','  + HexToB(colour_text_colour) + '], back_colour=[' + HexToR(colour_text_colour) + ',' + HexToG(colour_back_colour) + ','  + HexToB(colour_back_colour) + '])';
  return [code, Blockly.Python.ORDER_NONE];
};
///////////////////////////////////////////////////////////////////////////////////



////////////////////////////////
//get a LED  sensehat///
////////////////////////////////
Blockly.Blocks['get_a_pixel'] = {
  init: function() {
	this.appendDummyInput()
        .appendField("get LED");
    this.appendValueInput("_X")
        .setCheck(null)
        .appendField("x");
    this.appendValueInput("_Y")
        .setCheck(null)
        .appendField("y");
    this.setInputsInline(true);
	this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('get the RGB value of a pixel. (0,0) = left top');
    this.setHelpUrl('http://www.example.com/');
  }
};

// JavaScript test generator
Blockly.JavaScript['get_a_pixel'] = function(block) {
  var code = String('// <---- get_a_pixel ----->//\n');
  return code;
};

// python generator
Blockly.Python['get_a_pixel'] = function(block) {
  var colour_colour = block.getFieldValue('colour');
  var value__x = Blockly.Python.valueToCode(block, '_X', Blockly.Python.ORDER_ATOMIC);
  var value__y = Blockly.Python.valueToCode(block, '_Y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'sense.get_pixel(' + value__x + ',' + value__y+ ')\n';
  
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

////////////////////////////////
//low light sensehat///
////////////////////////////////
Blockly.Blocks['low_light'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("low light")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "low_light");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// JavaScript test generator
Blockly.JavaScript['low_light'] = function(block) {
  var code = String('// <---- low_light ----->//\n');
  return code;
};

Blockly.Python['low_light'] = function(block) {
  var checkbox_low_light = block.getFieldValue('low_light') == 'TRUE';
  var code = 'sense.low_light = ' + checkbox_low_light + '\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

////////////////////////////////
//read the humidity sensehat///
////////////////////////////////
Blockly.Blocks['get_humidity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("humidity");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(299);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
// JavaScript test generator
Blockly.JavaScript['get_humidity'] = function(block) {
  var code = String('2300\n// <---- get_humidity ----->//\n');
  return code;
};


// python generator
Blockly.Python['get_humidity'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  'sense.get_humidity()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////


////////////////////////////////
//read the temperature H sensehat///
////////////////////////////////
Blockly.Blocks['get_temperature_h'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("temperature (h s))");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(295);
    this.setTooltip('Gets the current temperature in degrees Celsius from the humidity sensor.');
    this.setHelpUrl('http://www.example.com/');
  }
};
// JavaScript test generator
Blockly.JavaScript['get_temperature_h'] = function(block) {
  var code = String('23\n// <---- get_temperature_h ----->//\n');
  return code;
};
// python generator
Blockly.Python['get_temperature_h'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  'sense.get_temperature_from_humidity()\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////
//read the temperature P field sensehat///
////////////////////////////////
Blockly.Blocks['get_temperature_p'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("temperature (p s)");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Gets the current temperature in degrees Celsius from the pressure sensor.');
    this.setHelpUrl('http://www.example.com/');
  }
};
// JavaScript test generator
Blockly.JavaScript['get_temperature_p'] = function(block) {
  var code = String('23\n// <---- get_temperature_p ----->//\n');
  return code;
};
// python generator
Blockly.Python['get_temperature_p'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  'sense.get_temperature_from_pressure()\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////
//read the temperature field sensehat///
////////////////////////////////
Blockly.Blocks['get_temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("temperature");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
// JavaScript test generator
Blockly.JavaScript['get_temperature'] = function(block) {
  var code = String('23\n// <---- get_temperature ----->//\n');
  return code;
};
// python generator
Blockly.Python['get_temperature'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  'sense.get_temperature()\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////
//read the pressure field sensehat///
////////////////////////////////
Blockly.Blocks['get_pressure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pressure");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// javascript generator
Blockly.JavaScript['get_pressure'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = String('2234\n// <---- get_temperature ----->//\n');
  return code;
};
///////////////////////////////////////////////////////////////////////////////////

// python generator
Blockly.Python['get_pressure'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code =  'sense.get_pressure()\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//Enable gyroscope, accelerometer and/or magnetometer ///
/////////////////////////////////////////////////////////
Blockly.Blocks['set_imu_config'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Enable:")
        .appendField("compass")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "compass")
        .appendField("gyro")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "gyro")
        .appendField("accel")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "accel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip('Enables and disables the gyroscope, accelerometer and/or magnetometer contribution to the get accelerometer functions');
    this.setHelpUrl('http://www.example.com/');
  }
};
// javascript generator
Blockly.JavaScript['set_imu_config'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = String('// <---- set_imu_config ----->//\n');
  return code;
};
 
Blockly.Python['set_imu_config'] = function(block) {
  var checkbox_compass = block.getFieldValue('compass') == 'TRUE';
  var checkbox_gyro = block.getFieldValue('gyro') == 'TRUE';
  var checkbox_accel = block.getFieldValue('accel') == 'TRUE';
  // TODO: Assemble Python into code variable.
  var code = 'sense.set_imu_config(' + checkbox_compass + ',' + checkbox_gyro + ',' + checkbox_accel + ') \n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return code;
};
///////////////////////////////////////////////////////////////////////////////////


////////////////////////////////
//get_orientation_pitch///
////////////////////////////////
Blockly.Blocks['get_orientation_pitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_orientation_pitch");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Gets the current orientation in degrees using the aircraft principal axes of pitch, roll and yaw.');
    this.setHelpUrl('http://www.example.com/');
  }
};
// javascript generator
Blockly.JavaScript['get_orientation_pitch'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = String('2234\n// <---- get_orientation_pitch ----->//\n');
  return code;
};
// python generator
Blockly.Python['get_orientation_pitch'] = function(block) {
  // TODO: Assemble Python into code variable.
  //pitch, roll, yaw = sense.get_orientation().values()
  var code =   ' sense.get_orientation()["pitch"]\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////


////////////////////////////////
//get_orientation_roll///
////////////////////////////////
Blockly.Blocks['get_orientation_roll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_orientation_roll");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Gets the current orientation in degrees using the aircraft principal axes of pitch, roll and yaw.');
    this.setHelpUrl('http://www.example.com/');
  }
};
// javascript generator
Blockly.JavaScript['get_orientation_roll'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = String('2234\n// <---- get_orientation_roll ----->//\n');
  return code;
};
// python generator
Blockly.Python['get_orientation_roll'] = function(block) {
  // TODO: Assemble Python into code variable.
  //pitch, roll, yaw = sense.get_orientation().values()
  var code =   ' sense.get_orientation()["roll"]\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////


////////////////////////////////
//get_orientation_yaw///
////////////////////////////////
Blockly.Blocks['get_orientation_yaw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_orientation_yaw");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Gets the current orientation in degrees using the aircraft principal axes of pitch, roll and yaw.');
    this.setHelpUrl('http://www.example.com/');
  }
};
// javascript generator
Blockly.JavaScript['get_orientation_yaw'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = String('2234\n// <---- get_orientation_yaw ----->//\n');
  return code;
};
// python generator
Blockly.Python['get_orientation_yaw'] = function(block) {
  // TODO: Assemble Python into code variable.
  //pitch, roll, yaw = sense.get_orientation().values()
  var code =   ' sense.get_orientation()["yaw"]\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////


////////////////////////////////
//get_gyroscope_pitch///
////////////////////////////////
Blockly.Blocks['get_gyroscope_pitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_gyroscope_pitch");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Gets the current orientation in degrees using the aircraft principal axes of pitch, roll and yaw.');
    this.setHelpUrl('http://www.example.com/');
  }
};
// javascript generator
Blockly.JavaScript['get_gyroscope_pitch'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = String('2234\n// <---- get_gyroscope_pitch ----->//\n');
  return code;
};
// python generator
Blockly.Python['get_gyroscope_pitch'] = function(block) {
  // TODO: Assemble Python into code variable.
  //pitch, roll, yaw = sense.get_orientation().values()
  var code =   ' sense.get_orientation()["pitch"]\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////


////////////////////////////////
//get_gyroscope_roll///
////////////////////////////////
Blockly.Blocks['get_gyroscope_roll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_gyroscope_roll");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Gets the current gyroscope in degrees using the aircraft principal axes of pitch, roll and yaw.');
    this.setHelpUrl('http://www.example.com/');
  }
};
// javascript generator
Blockly.JavaScript['get_gyroscope_roll'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = String('2234\n// <---- get_gyroscope_roll ----->//\n');
  return code;
};
// python generator
Blockly.Python['get_gyroscope_roll'] = function(block) {
  // TODO: Assemble Python into code variable.
  //pitch, roll, yaw = sense.get_gyroscope().values()
  var code =   ' sense.get_gyroscope()["roll"]\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////


////////////////////////////////
//get_gyroscope_yaw///
////////////////////////////////
Blockly.Blocks['get_gyroscope_yaw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_gyroscope_yaw");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Gets the current gyroscope in degrees using the aircraft principal axes of pitch, roll and yaw.');
    this.setHelpUrl('http://www.example.com/');
  }
};
// javascript generator
Blockly.JavaScript['get_gyroscope_yaw'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = String('2234\n// <---- get_gyroscope_yaw ----->//\n');
  return code;
};
// python generator
Blockly.Python['get_gyroscope_yaw'] = function(block) {
  // TODO: Assemble Python into code variable.
  //pitch, roll, yaw = sense.get_gyroscope().values()
  var code =   ' sense.get_gyroscope()["yaw"]\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////



////////////////////////////////
//get_accelerometer_pitch///
////////////////////////////////
Blockly.Blocks['get_accelerometer_pitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_accelerometer_pitch");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Gets the current accelerometer in degrees using the aircraft principal axes of pitch, roll and yaw.');
    this.setHelpUrl('http://www.example.com/');
  }
};
// javascript generator
Blockly.JavaScript['get_accelerometer_pitch'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = String('2234\n// <---- get_accelerometer_pitch ----->//\n');
  return code;
};
// python generator
Blockly.Python['get_accelerometer_pitch'] = function(block) {
  // TODO: Assemble Python into code variable.
  //pitch, roll, yaw = sense.get_accelerometer().values()
  var code =   ' sense.get_accelerometer()["pitch"]\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////


////////////////////////////////
//get_accelerometer_roll///
////////////////////////////////
Blockly.Blocks['get_accelerometer_roll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_accelerometer_roll");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Gets the current accelerometer in degrees using the aircraft principal axes of pitch, roll and yaw.');
    this.setHelpUrl('http://www.example.com/');
  }
};

// javascript generator
Blockly.JavaScript['get_accelerometer_roll'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = String('2234\n// <---- get_accelerometer_roll ----->//\n');
  return code;
};

// python generator
Blockly.Python['get_accelerometer_roll'] = function(block) {
  // TODO: Assemble Python into code variable.
  //pitch, roll, yaw = sense.get_accelerometer().values()
  var code =   'sense.get_accelerometer()["roll"]\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////


////////////////////////////////
//get_accelerometer_yaw///
////////////////////////////////
Blockly.Blocks['get_accelerometer_yaw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_accelerometer_yaw");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('Gets the current accelerometer in degrees using the aircraft principal axes of pitch, roll and yaw.');
    this.setHelpUrl('http://www.example.com/');
  }
};

// javascript generator
Blockly.JavaScript['get_accelerometer_yaw'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = String('2234\n// <---- get_accelerometer_yaw ----->//\n');
  return code;
};
///////////////////////////////////////////////////////////////////////////////////

// python generator
Blockly.Python['get_accelerometer_yaw'] = function(block) {
  // TODO: Assemble Python into code variable.
  //pitch, roll, yaw = sense.get_accelerometer().values()
  var code =   ' sense.get_accelerometer()["yaw"]\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////


////////////////////////////////
//get_compass///
////////////////////////////////
Blockly.Blocks['get_compass'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_compass");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('get_compass. The direction of North.');
    this.setHelpUrl('http://www.example.com/');
  }
};

// javascript generator
Blockly.JavaScript['get_compass'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = String('2234\n// <---- get_compass ----->//\n');
  return code;
};
///////////////////////////////////////////////////////////////////////////////////

// python generator
Blockly.Python['get_compass'] = function(block) {
  // TODO: Assemble Python into code variable.
  //pitch, roll, yaw = sense.get_accelerometer().values()
  var code = 'sense.get_compass() #The direction of North.\n';
  Blockly.Python.definitions_['sensehat'] = 'from sense_hat import SenseHat\nsense = SenseHat()\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////


////////////////////////////////
//curses up///
////////////////////////////////
Blockly.Blocks['curses_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("key up");
    this.setOutput(true, null);
    this.setColour(315);
    this.setTooltip('joystick up');
    this.setHelpUrl('http://www.example.com/');
  }
};
// javascript generator
Blockly.JavaScript['curses_up'] = function(block) {
  var code = '39';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////
// python generator
Blockly.Python['curses_up'] = function(block) {
  // TODO: Assemble Python into code variable.
  //pitch, roll, yaw = sense.get_accelerometer().values()
  var code = 'curses.KEY_UP';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////
//curses down///
////////////////////////////////
Blockly.Blocks['curses_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("key down");
    this.setOutput(true, null);
    this.setColour(315);
    this.setTooltip('joystick down');
    this.setHelpUrl('http://www.example.com/');
  }
};
// javascript generator
Blockly.JavaScript['curses_down'] = function(block) {
  var code = '40';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////
// python generator
Blockly.Python['curses_down'] = function(block) {
  // TODO: Assemble Python into code variable.
  //pitch, roll, yaw = sense.get_accelerometer().values()
  var code = 'curses.KEY_DOWN';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////
//curses left///
////////////////////////////////
Blockly.Blocks['curses_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("key left");
    this.setOutput(true, null);
    this.setColour(315);
    this.setTooltip('joystick left');
    this.setHelpUrl('http://www.example.com/');
  }
};
// javascript generator
Blockly.JavaScript['curses_left'] = function(block) {
  var code = '37';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
// python generator
Blockly.Python['curses_left'] = function(block) {
  // TODO: Assemble Python into code variable.
  //pitch, roll, yaw = sense.get_accelerometer().values()
  var code = 'curses.KEY_LEFT';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////
//curses right///
////////////////////////////////
Blockly.Blocks['curses_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("key right");
    this.setOutput(true, null);
    this.setColour(315);
    this.setTooltip('joystick right');
    this.setHelpUrl('http://www.example.com/');
  }
};
// javascript generator
Blockly.JavaScript['curses_right'] = function(block) {
  var code = '39';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
// python generator
Blockly.Python['curses_right'] = function(block) {
  // TODO: Assemble Python into code variable.
  //pitch, roll, yaw = sense.get_accelerometer().values()
  var code = 'curses.KEY_RIGHT';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////
//key = screen.getch()///
////////////////////////////////
Blockly.Blocks['key_getch'] = {
  init: function() {
    this.appendValueInput("key")
        .appendField("get input from")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip('get joystick input');
    this.setHelpUrl('http://www.example.com/');
  }
};
// javascript generator
Blockly.JavaScript['key_getch'] = function(block) {
//  var value_set_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
//  var code = 'document.onkeydown = checkKey;\nfunction checkKey(W3e45rW) {\n    W3e45rW = W3e45rW || window.event;\n' + value_set_key + ' = e.keyCode\n';
  var code = '// <---------key_getch-->\n';
  return code
};
// python generator
Blockly.Python['key_getch'] = function(block) {
  var value_set_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC);
  var code = value_set_key + ' = screen.getch()\n';
  Blockly.Python.definitions_['curses'] = 'import curses\nscreen = curses.initscr()\nscreen.keypad(True)\ncurses.cbreak()\ncurses.noecho()\n';
  return code
};
///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////
//end key = screen.getch()///
////////////////////////////////
Blockly.Blocks['key_end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("end key");
    this.setPreviousStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
// javascript generator
Blockly.JavaScript['key_end'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
var code = String('}// <---- key_end ----->//\n');
  return code;
};
// python generator
Blockly.Python['key_end'] = function(block) {
	var code = '\n\nscreen.keypad(0)\ncurses.nocbreak()\ncurses.echo()\ncurses.endwin()\n';
    return code;
};
///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////
//joystick2///
////////////////////////////////
Blockly.Blocks['def_joystick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("JoyStick");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("up")
        .appendField(new Blockly.FieldDropdown([["release", "ACTION_RELEASED"], ["held", "ACTION_HELD"], ["pressed", "ACTION_PRESSED"]]), "pushed_up");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("down")
        .appendField(new Blockly.FieldDropdown([["release", "ACTION_RELEASED"], ["held", "ACTION_HELD"], ["pressed", "ACTION_PRESSED"]]), "pushed_down");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("left")
        .appendField(new Blockly.FieldDropdown([["release", "ACTION_RELEASED"], ["held", "ACTION_HELD"], ["pressed", "ACTION_PRESSED"]]), "pushed_left");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("right")
        .appendField(new Blockly.FieldDropdown([["release", "ACTION_RELEASED"], ["held", "ACTION_HELD"], ["pressed", "ACTION_PRESSED"]]), "pushed_right");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("push")
        .appendField(new Blockly.FieldDropdown([["release", "ACTION_RELEASED"], ["held", "ACTION_HELD"], ["pressed", "ACTION_PRESSED"]]), "pushed");
    this.appendDummyInput()
        .appendField("joy_refresh()");
    this.appendDummyInput()
        .appendField("pause()");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('a joystick event.');
    this.setHelpUrl('https://pythonhosted.org/sense-hat/api/');
  }
};


Blockly.Blocks['joy_clamp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("joy_clamp 8x8");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// python generator



Blockly.Python['def_joystick'] = function(block) {
  var dropdown_pushed_up = block.getFieldValue('pushed_up');
  var dropdown_pushed_down = block.getFieldValue('pushed_down');
  var dropdown_pushed_left = block.getFieldValue('pushed_left');
  var dropdown_pushed_right = block.getFieldValue('pushed_right');
  var dropdown_pushed = block.getFieldValue('pushed');
  // TODO: Assemble Python into code variable.
  var code = 'def pushed_up(event):\n' +
'    global joy_y\n' +
'    if event.action != ' + dropdown_pushed_up + ':\n' +
'        joy_y = joy_clamp(joy_y - 1)\n\n' + 
'def pushed_down(event):\n' +
'    global joy_y\n' +
'    if event.action != ' + dropdown_pushed_down + ':\n' +
'        joy_y = joy_clamp(joy_y + 1)\n\n' +
'def pushed_left(event):\n' +
'    global joy_x\n' +
'    if event.action != ' + dropdown_pushed_left + ':\n' +
'        joy_x = joy_clamp(joy_x - 1)\n\n' +
'def pushed_right(event):\n' +
'    global joy_x\n' +
'    if event.action != ' + dropdown_pushed_right + ':\n' +
'        joy_x = joy_clamp(joy_x + 1)\n\n' +
'def pushed(event):\n' +
'    global joy_z\n' +
'    if event.action != ' + dropdown_pushed + ':\n' +
'        joy_z = (joy_z + 1)\n\n' +
'sense.stick.direction_up = pushed_up\n' +
'sense.stick.direction_down = pushed_down\n' +
'sense.stick.direction_left = pushed_left\n' +
'sense.stick.direction_right = pushed_right\n' +
'sense.stick.direction_any = joy_refresh\n' +
'joy_refresh()\n' +
'pause()';
Blockly.Python.definitions_['def_joystick'] = 'from sense_hat import SenseHat, ACTION_PRESSED, ACTION_HELD, ACTION_RELEASED\nsense = SenseHat()\nfrom signal import pause\n\n';
  return code;
};

///////////////////////////////////////////////////////////////////////////////////





////////////////////////////////
//Thread///
////////////////////////////////
Blockly.Blocks['thread'] = {
  init: function() {
    this.appendStatementInput("thread_target")
        .setCheck(null)
        .appendField("thread_target");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
// python generator
//Blockly.Python['thread'] = function(block) {
  //var value_set_key = Python.valueToCode(block, 'thread_target', Blockly.Python.ORDER_ATOMIC);
  //var code = 'thread = threading.Thread(target=' + value_set_key + ')\nthread.start()\n';
  //Blockly.Python.definitions_['threading'] = 'import threading\n';
  //return [code, Blockly.Python.ORDER_ATOMIC];
 // var statements_name = Blockly.Python.valueToCode(block, 'thread_target', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
 // var code = statements_name + '...;\n';
//return code;

// javascript generator
Blockly.JavaScript['thread'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = String('// <---- thread ----->//\n');
  return code;
};
Blockly.Python['thread'] = function(block) {
  var statements_thread_target = Blockly.Python.statementToCode(block,'thread_target').replace("(", "");
  // TODO: Assemble Python into code variable.
  var code = 'import threading\nthread = threading.Thread(target=' + statements_thread_target + 'thread.start()\n';
  return code;
};
///////////////////////////////////////////////////////////////////////////////////

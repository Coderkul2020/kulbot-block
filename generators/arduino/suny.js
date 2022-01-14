/**
 * Visual Blocks Language
 *
 * Copyright 2020 Arthur Zheng.
 * https://github.com/zhengyangliu/scratch-blocks
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

goog.provide('Blockly.Arduino.kulbot');

goog.require('Blockly.Arduino');

Blockly.Arduino['event_whenkulbotbegin'] = function() {
  Blockly.Arduino.includes_["arduino_1"] = "#include <Arduino.h>";
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();';
  var code = "";
  return code;
};

// LED on/off the all
Blockly.Arduino['arduino_pin_esp32ledOnOF'] = function(block) {
  var arg0 = Blockly.Arduino.valueToCode(block, 'LEVEL', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 'LOW';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();';
  switch (arg0) {
    case "HIGH":
        var code="Rob.SetAllLed(\"R\");\n";
        break;
    case "LOW":
        var code="Rob.TurnOFFALL();\n " ;
        break;
  }
  return code;
};
// Ultrasonic sensor.
Blockly.Arduino['arduino_pin_eps32SUltra'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '0';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'Rob.getSonarValue('+arg0+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Temperature sensor.
Blockly.Arduino['arduino_pin_eps32STemp'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '0';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'Rob.getTempertatureValue('+arg0+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// DHT11 sensor.
Blockly.Arduino['arduino_pin_eps32SDHT11'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '1';
  var arg1 = block.getFieldValue('FUN') || '0';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'Rob.getDHT11Value('+arg0+','+arg1+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// DHT12 sensor.
Blockly.Arduino['arduino_pin_eps32SDHT12'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '1';
  var arg1 = block.getFieldValue('FUN') || '0';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\nRob.kulbot_DHT12_Init();\n';
  var code = 'Rob.getDHT12('+arg0+','+arg1+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


// Touch sensor
Blockly.Arduino['arduino_pin_eps32STouch'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '0';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'Rob.getTouchLedPCF('+arg0+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Touch sensor LED
Blockly.Arduino['arduino_pin_eps32STouchLed'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '1';
  var arg1 = block.getFieldValue('CLINE') || 'R';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'Rob.SetTouchLedPCF('+arg0+','+arg1+');\n';
  return code;
};

// Line sensor
Blockly.Arduino['arduino_pin_eps32SLine'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '0';
  var arg1 = block.getFieldValue('VLE') || '0';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'Rob.getLinePCF('+arg0+','+arg1+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// IR sensor
Blockly.Arduino['arduino_pin_eps32SIR'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '0';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'Rob.getIRPCF('+arg0+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// IR sensor LED
Blockly.Arduino['arduino_pin_eps32SIRLed'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '1';
  var arg1 = block.getFieldValue('VLE') || '0';
  var arg2 = block.getFieldValue('CLINE') || 'R';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'Rob.setIRPCFLed('+arg0+','+arg1+','+arg2+');\n';
  return code;
};

// Traffic Line
Blockly.Arduino['arduino_pin_eps32traLED'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '1';
  var arg1 = block.getFieldValue('VLE') || 'R';
  var arg2 = block.getFieldValue('CLINE') || 'NONE';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = "Rob.SetTracficLigt("+arg0+",\""+arg1+"\",\""+arg2+"\");\n";
  return code;
};

// Motor 
Blockly.Arduino['arduino_pin_eps32SMotorM1'] = function(block) {
  var arg0 = block.getFieldValue('MO') || '1';
  var arg1 = block.getFieldValue('MoFB') || '0';
  var arg2 = Blockly.Arduino.valueToCode(block, 'OUT', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'Rob.Motor1('+arg0+','+  arg2 + ',' + arg1 + '); \n';
  return code;
};

// Servo
Blockly.Arduino['arduino_pin_eps32SServo'] = function(block) {
  var arg0 = block.getFieldValue('PIN') || '1';
  var arg1 = Blockly.Arduino.valueToCode(block, 'OUT', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;

  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';

  var code = 'Rob.Servo('+arg0 +','+arg1+');\n';

  return code;
};

Blockly.Arduino['arduino_serial_esp32serialBegin'] = function(block) {
  var arg0 = block.getFieldValue('VALUE') || '9600';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  
  var code = 'Serial.begin(' + arg0 + ');\n';
  return code;
};

Blockly.Arduino['arduino_serial_esp32serialPrint'] = function(block) {
  var arg0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
  var eol = block.getFieldValue('EOL') || 'warp';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = '';
  if (eol === 'warp') {
    code = 'Serial.println(' + arg0 + ');\n';
  } else {
    code = 'Serial.print(' + arg0 + ');\n';
  }
  return code;
};

Blockly.Arduino['arduino_serial_esp32serialAvailable'] = function() {
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'Serial.available()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['arduino_serial_esp32serialReadData'] = function() {
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'Serial.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_serial_esp32multiSerialBegin'] = function(block) {
  var arg0 = block.getFieldValue('NO') || '0';
  var arg1 = block.getFieldValue('VALUE') || '9600';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code;
  if(arg0 === '0')
  {
    arg0 = '';
  }
  code = 'Serial' + arg0 + '.begin(' + arg1 + ');\n';
  return code;
};

Blockly.Arduino['arduino_serial_esp32multiSerialPrint'] = function(block) {
  var arg0 = block.getFieldValue('NO') || '0';
  var arg1 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code;
  if(arg0 === '0')
  {
    arg0 = '';
  }
  code = 'Serial' + arg0 + '.println(' + arg1 + ');\n';
  return code;
};

Blockly.Arduino['arduino_serial_esp32multiSerialAvailable'] = function(block) {
  var arg0 = block.getFieldValue('NO') || '0';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code;
  if(arg0 === '0')
  {
    arg0 = '';
  }

  var code = 'Serial' + arg0 + '.available()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['arduino_serial_esp32multiSerialReadAByte'] = function(block) {
  var arg0 = block.getFieldValue('NO') || '0';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code;
  if(arg0 === '0')
  {
    arg0 = '';
  }

  var code = 'Serial' + arg0 + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_sensor_esp32runningTime'] = function() {
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = "millis()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_data_esp32dataMap'] = function(block) {
  var arg0 = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
  var arg1 = Blockly.Arduino.valueToCode(block, 'ARG0', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 1;
  var arg2 = Blockly.Arduino.valueToCode(block, 'ARG1', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 100;
  var arg3 = Blockly.Arduino.valueToCode(block, 'ARG2', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 1;
  var arg4 = Blockly.Arduino.valueToCode(block, 'ARG3', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 1000;
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'map(' + arg0 + ', ' + arg1 + ', ' + arg2 + ', ' + arg3 + ', ' + arg4 + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_data_esp32dataConstrain'] = function(block) {
  var arg0 = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
  var arg1 = Blockly.Arduino.valueToCode(block, 'ARG0', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 1;
  var arg2 = Blockly.Arduino.valueToCode(block, 'ARG1', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 100;
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'constrain(' + arg0 + ', ' + arg1 + ', ' + arg2 + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_data_esp32dataConvert'] = function(block) {
  var arg0 = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
  var arg1 = block.getFieldValue('TYPE') || 'WHOLE_NUMBER';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code;

  switch(arg1) {
    case 'WHOLE_NUMBER':
      code = 'String(' + arg0 + ').toInt()';
      break;
    case 'DECIMAL':
      code = 'String(' + arg0 + ').toFloat()';
      break;
    case 'STRING':
      code = 'String(' + arg0 + ')';
      break;
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_data_esp32dataConvertASCIICharacter'] = function(block) {
  var arg0 = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'String(char(' + arg0 + '))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_data_esp32dataConvertASCIINumber'] = function(block) {
  var arg0 = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'toascii(String(' + arg0 + ')[0])';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_pin_eps32SMotorM1H'] = function(block) {
  var arg0 = block.getFieldValue('MO') || '1';
  var arg1 = block.getFieldValue('MoFB') || '0';
  var arg2 = block.getFieldValue('OUT') || '0';
  Blockly.Arduino.includes_['include_kulbot'] = '#include <kulbot.h>\nkulbot Rob;\n';
  Blockly.Arduino.setups_['setups_int'] = 'Rob.Init();\n';
  var code = 'Rob.Motor1('+arg0+','+  arg2 + ',' + arg1 + '); \n';
  return code;
};


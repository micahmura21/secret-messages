function encodeMessage(message) {
  var output = "";

  for(var i = 0; i < message.length; i++) {
    if(message[i] === 'a') {
      output += 4;
    } else if(message[i] === 'e') {
      output += 3;
    } else if(message[i] === 'i') {
      output += 1;
    } else if(message[i] === 'o') {
      output += 0;
    } else {
      output += message[i];
    }
  }

}

encodeMessage("Javascript is Amazing");

function decodeMessage(message) {
  var output = "";

  for(var i = 0; i < message.length; i++) {
    if(message[i] === '4') {
      output += 'a';
    } else if(message[i] === '3') {
      output += 'e';
    } else if(message[i] === '1') {
      output += 'i';
    } else if(message[i] === '0') {
      output += 'o';
    } else {
      output += message[i];
    }
  }
}

decodeMessage("J4v4scr1pt 1s 4w3s0m3");
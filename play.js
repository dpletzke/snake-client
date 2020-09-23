const net = require('net');
const connect = require('./client');

/**
 * Establishes connection with the game server
 */


console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  
  stdin.on('data', handleUserInput);  
  stdin.resume();
  return stdin;
};

const handleUserInput = (data) => {
  if (data === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
  if (data === 'b') {
    console.log('beep!');
  }
}
setupInput();





const handleUserInput = (data) => {
  if (data === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
  if (data === 'b') {
    console.log('beep!');
  }
}

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);  
  stdin.resume();
  return stdin;
};


module.exports = { setupInput };
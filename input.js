let connection;
let moveDirection;

const handleUserInput = (data) => {
  if(data === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
  let direction = '';
  const directionStr = 'wasd';
  if(directionStr.includes(data)) {
    clearInterval(moveDirection);
    switch (data) {
      case 'w': direction = 'up'; break;
      case 'a': direction = 'left'; break;
      case 's': direction = 'down'; break;
      case 'd': direction = 'right'; break;        
      default: break;
    }
    moveDirection = setInterval(() => connection.write(`Move: ${direction}`), 50);
  }
  const messageStr = '123';
  if(messageStr.includes(data)) {
    switch(data) {
      case '1' : connection.write(`Say: I'm a snake!`); break;
      case '2' : connection.write(`Say: Get out of my way!`); break;
      case '3' : connection.write(`Say: whats up snake?`); break;
    }
  }
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);  
  stdin.resume();
  return stdin;
};


module.exports = { setupInput };
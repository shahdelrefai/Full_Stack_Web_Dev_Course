const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userName; // Variable to store the name

rl.question("What's your name? ", (name) => {
  userName = name; // Store the input
  rl.close(); // Close the readline interface
});

rl.on('close', () => {
  console.log(`Readline closed. Goodbye, ${userName}!`);
  process.exit(0);
});

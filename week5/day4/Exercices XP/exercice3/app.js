// app.js

const { readFile, writeFile } = require('./fileManager');

const inputFile = 'Hello World.txt';
const outputFile = 'Bye World.txt';

readFile(inputFile, (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log(`Content of "${inputFile}":`, data);

  const newContent = 'Writing to the file';

  writeFile(outputFile, newContent, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }

    console.log(`Successfully wrote to "${outputFile}"`);
  });
});

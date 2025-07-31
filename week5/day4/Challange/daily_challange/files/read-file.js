import fs from 'fs';
const path = './file-data.txt';

function readFiles() {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file: ', err);
            return;
        }
        console.log('File content: ', data);
    })
}

export default readFiles;
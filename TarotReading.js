var _ = require('lodash');
var fs = require('fs');
const tarotFolder = './Cards';
const tarotCards = [];
const tarotTextByLine = [];

// Array of tarot card file names
let tarotFiles = [];

fs.readdirSync(tarotFolder).forEach(file => {
    tarotFiles.push(file);
});

//console.log(tarotFiles);
let cardsDrawn = [];
while (cardsDrawn.length < 3){
    var r = Math.floor(Math.random() * tarotFiles.length);
    if(cardsDrawn.indexOf(r) === -1) cardsDrawn.push(r);
}

let pastPresentFuture = [];
// Read files
for (let j = 0; j < cardsDrawn.length; j++) {
    var text = fs.readFileSync(`${tarotFolder}/${tarotFiles[cardsDrawn[j]]}`, 'utf-8');
    var textByLine = text.split('\n');
    //tarotTextByLine.push(textByLine);
    let uprightOrReverse = Math.round(Math.random());
    let message;
    
    switch (j) {
        case 0:
            message = `The past: ${textByLine[0]}`;
            if (uprightOrReverse === 0) {
                message += `\n${textByLine[1]}`;
                break;
            }
            message += `\n${textByLine[2]}`;
            break;
        case 1:
            message = `The present: ${textByLine[0]}`;
            if (uprightOrReverse === 0) {
                message += `\n${textByLine[3]}`;
                break;
            }
            message += `\n${textByLine[4]}`;
            break;
        case 2:
            message = `The future: ${textByLine[0]}`;
            if (uprightOrReverse === 0) {
                message += `\n${textByLine[5]}`;
                break;
            }
            message += `\n${textByLine[6]}`;
            break;
    }
    console.log(message);
}
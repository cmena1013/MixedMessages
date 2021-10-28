var _ = require('lodash');

// Read file
var fs = require('fs');
var text = fs.readFileSync('./Tarot.txt', 'utf-8');
var textByLine = text.split('\n');

// Combine for loop into TarotCard func. Pass str array loop, then assign.
function TarotCard (name, pastUpright, pastReverse, presentUpright, presentReverse, futureUpright, futureReverse) {
    this.name = name;
    this.pastUpright = pastUpright;
    this.pastReverse = pastReverse;
    this.presentUpright = presentUpright;
    this.presentReverse = presentReverse;
    this.futureUpright = futureUpright;
    this.futureReverse = futureReverse;
}

//console.log(textByLine);
// Loop lines to separate key pairs
let fileArray = [];
let name;
let pastUpright;
let pastReverse;
let presentUpright;
let presentReverse;
let futureUpright;
let futureReverse;
for (let i = 0; i < textByLine.length; i++) {
    //console.log(textByLine[i].split(':'));
    fileArray.push(textByLine[i].split(':'));
    console.log(fileArray[0][0]);

    switch (textByLine[i][0]) {
        case 'name':
            name = textByLine[i][1];
            break;
        case 'pastUpright':
            pastUpright = textByLine[i][1];
            break;
        case 'pastReverse':
            pastReverse = textByLine[i][1];
            break;
        case 'presentUpright':
            presentUpright = textByLine[i][1];
            break;
        case 'presentReverse':
            presentReverse = textByLine[i][1];
            break;
        case 'futureUpright':
            futureUpright = textByLine[i][1];
             break;
        case 'futureReverse':
            futureReverse = textByLine[i][1];
            break;
    }
}
console.log(name);
//_.camelCase(name) = new TarotCard (name, pastUpright, pastReverse, presentUpright, presentReverse, futureUpright, futureReverse)
//console.log(theFool);
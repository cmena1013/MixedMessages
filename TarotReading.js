var _ = require('lodash');

// Read file
var fs = require('fs');
var text = fs.readFileSync('./Tarot.txt', 'utf-8');
var textByLine = text.split('\n');
var tarotCards = [];

// Combine for loop into TarotCard func. Pass str array loop, then assign.
function TarotCard (textArray) {
    this.name;
    this.pastUpright;
    this.pastReverse;
    this.presentUpright;
    this.presentReverse;
    this.futureUpright;
    this.futureReverse;
    let fileArray = [];

    for (let i = 0; i < textArray.length; i++ ) {
        fileArray.push(textArray[i].split(':'));
    }

    for (i = 0; i < fileArray.length; i++) {
        switch (fileArray[i][0]) {
            case 'name':
                this.name = fileArray[i][1];
                tarotCards.push(_.camelCase(fileArray[i][1]));
                break;
            case 'pastUpright':
                this.pastUpright = fileArray[i][1];
                break;
            case 'pastReverse':
                this.pastReverse = fileArray[i][1];
                break;
            case 'presentUpright':
                this.presentUpright = fileArray[i][1];
                break;
            case 'presentReverse':
                this.presentReverse = fileArray[i][1];
                break;
            case 'futureUpright':
                this.futureUpright = fileArray[i][1];
                break;
            case 'futureReverse':
                this.futureReverse = fileArray[i][1];
                break;
        }
    }
}

let theFool = new TarotCard(textByLine);
console.log(tarotCards);
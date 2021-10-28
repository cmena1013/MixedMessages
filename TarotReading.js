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

// Read files
for (let j = 0; j < tarotFiles.length; j++) {
    var text = fs.readFileSync(`${tarotFolder}/${tarotFiles[j]}`, 'utf-8');
    var textByLine = text.split('\n');
    tarotTextByLine.push(textByLine);
}

// Read file
//var fs = require('fs');
//var text = fs.readFileSync('./Cards/theFool.txt', 'utf-8');
//var textByLine = text.split('\n');
//var tarotCards = [];

// Tarot card factory
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
                //tarotCards.push(_.camelCase(fileArray[i][1]));
                console.log(`Brewing ${this.name}`);
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

// Why is it brewing but not existing?
for (j = 0; j < tarotTextByLine.length; j++) {
    let card = tarotTextByLine[j][0].split(':');
    let cardName = _.camelCase(card[1]);
    //console.log(`Sending ${cardName} to brew`);
    cardName = new TarotCard(tarotTextByLine[j]);
    //console.log(tarotTextByLine[j]);
    //tarotCards.push(cardName);
    console.log(death.name);
}
//console.log(tarotCards);
//let theFool = new TarotCard(textByLine);
//console.log(tarotCards);
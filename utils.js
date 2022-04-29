var emoji = require('./node-emoji')
var numberToSpanishWords = require('./number-to-words')

exports.addEmojis = function(text) {
    return emoji.replace(text, (emoji) => `${emoji.key}:`)
}

exports.numbersToSpanish = function(text) {

    let numbers = text.match(/\d+/g);
    
    if(numbers){    
        numbers.forEach(number=> {
            text = text.replace(number, numberToSpanishWords(parseInt(number)))            
        })
    }
    return text
}

exports.sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

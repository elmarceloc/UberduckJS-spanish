var emoji = require('./node-emoji')
var numberToSpanishWords = require('./number-to-words')
var utils = require('./utils')



module.exports = function(text) {
    text = utils.replaceAll(text, 'x', 'cs')

    // replace emojis with its name in spanish
    text = emoji.replace(text, (emoji) => `${emoji.key}:`)

    // replace cap letters with its corresponding pronunciation in spanish
    text = utils.lettersToWords(text)

    console.log(text)
    // replace numbers with its name in spanish
    let numbers = text.match(/\d+/g);
    
    if(numbers){    
        numbers.forEach(number=> {
            text = text.replace(number, numberToSpanishWords(parseInt(number)))            
        })
    }
    return text
}
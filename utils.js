var emoji = require('./node-emoji')
var numberToSpanishWords = require('./number-to-words')

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
  
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

exports.parseText = function(text) {
    text = replaceAll(text, 'x', 'cs')

    // replace emojis with its name in spanish
    text = emoji.replace(text, (emoji) => `${emoji.key}:`)

    // replace numbers with its name in spanish
    let numbers = text.match(/\d+/g);
    
    if(numbers){    
        numbers.forEach(number=> {
            text = text.replace(number, numberToSpanishWords(parseInt(number)))            
        })
    }
    return text
}

exports.sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

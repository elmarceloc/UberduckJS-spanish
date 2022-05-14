const escapeRegExp = function (string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
  
const replaceAll = function (str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

exports.sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

exports.lettersToWords = function(text){    
    // A


    return text

}

exports.replaceAll = replaceAll
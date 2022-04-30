
async function lettersToWords(text){    
    // A
    text.replaceAll(' B ','BE')
    text.replaceAll(' C ','CE')
    text.replaceAll(' D ','DE')
    text.replaceAll(' F ','EFE')
    text.replaceAll(' G ','GE')

    return text

}

module.exports = lettersToWords
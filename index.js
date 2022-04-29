const axios = require('axios');
const utils = require('./utils');

const { getAudioUrl } = require('uberduck-api');

async function getAudioUrlEs(public, private, voice, text){
    text = utils.numbersToSpanish(text)
    text = utils.addEmojis(text)

    const url = await getAudioUrl(
        public, 
        private, 
        voice, 
        text)

    console.log(url)

}

//getAudioUrlEs('pub_inqajoxwegyxvysxkx','pk_a45d0106-f7e0-47dc-bc7b-fc6b9fe49f20','homero', '🤓🤓🤓🤓🤓🤓🤓🤓');

module.exports = getAudioUrlEs
const axios = require('axios');
const parse = require('./parse');

const { getAudioUrl } = require('uberduck-api');

async function getAudioUrlEs(public, private, voice, text){
    text = parse(text)

    const url = await getAudioUrl(
        public, 
        private, 
        voice, 
        text)

    return url

}
(async ()=>{
    var audio = await getAudioUrlEs('pub_inqajoxwegyxvysxkx','pk_a45d0106-f7e0-47dc-bc7b-fc6b9fe49f20','homero', `S D L G sdlg`);
    console.log(audio)
  })();

module.exports = getAudioUrlEs
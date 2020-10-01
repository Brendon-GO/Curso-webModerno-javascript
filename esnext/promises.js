const { concat } = require("lodash")

function speakAfterOf(seconds, phrase) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            //reject(phrase)
            resolve(phrase)
        }, seconds * 1000)
    })
}

speakAfterOf(3, 'Que legal!')
    //.then((phrase, abc) => phrase.concat('?!?'))
    .then(phrase => phrase.concat('?!?'))
    .then(anotherPhrase => console.log(anotherPhrase))
    //.catch(e => console.log(e))
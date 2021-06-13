const axious = require('axious')
function getLyrics(a, t){
    return axious(`https://api.lyrics.ovh/v1/${a}/${t}`)
    .then(data=> data.lyrics)
    .catch(e=>{
        //console.log(e.error)
        return Promise.reject(e)
    })
}

getLyrics('Queen', 'Under Pressure')
.then(results=> console.log(results))
.catch(e=> redirect='/login')



function test(){
    const promise  = new Promise((res, rej)=>{
        setTimeout(()=>{
            rej('My error')
        }, 1000)
    })

    return promise
    .catch(e=>{
        console.log('INER', e.error)
        return Promise.reject(e)
    })
}

test().catch(e=> console.log('OUTER CATCH'))


https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search
https://developers.themoviedb.org/3
https://www.openbrewerydb.org/documentation/01-listbreweries







json     stringuy       string   -> parse       json
BROWSER  ->      INTERNET        SERVER
    json <- parse    <-    string <-          strinugy <- json


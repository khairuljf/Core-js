function getPuzzle(wordCount,callback){
        

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e)=>{
        if(e.target.readyState ===4 && e.target.status ===200){
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        }else if(e.target.readyState===4){
            callback('Something woring', undefined)
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}


function getCountryDetails(counteryCode,callbck){

    const request  = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e)=>{
        if(e.target.readyState===4 && e.target.status===200){
            const data = JSON.parse(e.target.responseText)
            const result = data.find(singleCountry=>singleCountry.callingCodes ==`${counteryCode}` )
            callbck(undefined, result.name)
        }
    })


    request.open('GET', 'http://restcountries.eu/rest/v2/all')

    request.send()

}
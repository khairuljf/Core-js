
// Return value by promise
const getPuzzle = (wordCount)=>{
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=>{
        if(response.status ===200){
            return response.json()
        }else{
            throw new Error(' Unabale to fetch Data') 
        }
    }).then((data)=>{
        return data.puzzle
    })
}


const getCountryDetails = (counteryCode) =>{
     return fetch(`http://restcountries.eu/rest/v2/all`).then((respnse)=>{
        if(respnse.status===200){
           return respnse.json()
        }else{
            throw new Error('Undabe to load country')
        }
    }).then((data)=>{
        const result = data.find(singleCountry=>singleCountry.alpha2Code ===`${counteryCode}` )
        return result.name
    })
} 


// Return value by promise
// const getPuzzle = (wordCount)=> new Promise((resolve, reject)=>{
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e)=>{
//         if(e.target.readyState ===4 && e.target.status ===200){
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//         }else if(e.target.readyState===4){
//             reject('An error has taken')
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })



// Return value by function
// const  getCountryDetails = (counteryCode,callbck)=>{

//     const request  = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e)=>{
//         if(e.target.readyState===4 && e.target.status===200){
//             const data = JSON.parse(e.target.responseText)

//             const result = data.find(singleCountry=>singleCountry.alpha2Code ===`${counteryCode}` )
//             callbck(undefined, result.name)
//         }else if(e.target.readyState===4){
//             callbck('Unable to fetch Data')
//         }
//     })


//     request.open('GET', 'http://restcountries.eu/rest/v2/all')

//     request.send()

// }
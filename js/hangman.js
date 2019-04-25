
class Hangman{

    constructor(word, remainingGuesses){
    this.word =  word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'Playing'}

    calculateStatus(){
        let finished = true
    this.word.forEach((letter)=>{
        if(this.guessedLetters.includes(letter)){
           
        }else{
            finished = false  
        }
    })

    if(this.remainingGuesses === 0){
            this.status = 'Failed'
        }else if(finished){
            this.status = 'Finished'
        }else{
            this.status = 'Playing' }
        }

    getStatusMessage(){

        if(this.status ==='Playing'){
            return ` Guesses left ${this.remainingGuesses}`
        }else if(this.status ==='Failed'){
            return ` Nice try! The word was "${this.word.join('')}".`
        }else{
            return ' Success : Great work'}

    }

    getPuzzle(){
        let puzzle = ''
    this.word.forEach( (single_letter) =>{
        if(this.guessedLetters.includes(single_letter) || single_letter == ' '){
            puzzle += single_letter
        }else{
            puzzle +='*'
        }
    })
    return puzzle

    }

    makeGuess(guess){

        guess = guess.toLowerCase()

        const isUnique =  !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if(isUnique){
            this.guessedLetters.push(guess)
            //console.log('success')
           
        }
        if(isUnique && isBadGuess ){
            this.remainingGuesses --
        }
    
        this.calculateStatus()

    }
}


let game1

// View query
const getPluzzle =  document.querySelector('#getPluzzle')
const guessremaining =  document.querySelector('#remaining')
let gameStatus = document.querySelector('#gstatus')



    window.addEventListener('keypress', (e)=>{
        game1.makeGuess(e.key)
        render()
     })

     const render = ()=>{
        getPluzzle.textContent =  game1.getPuzzle()
        gameStatus.textContent = game1.getStatusMessage()
     }

     // Start game 
     const startGame =  async ()=>{
         const puzzle =  await getPuzzle()
         game1 = new Hangman(puzzle, 5)
         render()
     }

     document.querySelector('#reset').addEventListener('click', startGame)

     startGame()
   

    // Get pluzzle word by promise 
    //  getPuzzle("3").then((puzzle)=>{
    //         console.log(puzzle)
    //  }).catch((error)=>{
    //      console.log(`Error ${error}`)
    //  })


    // Getcountry details by function
     getCountryDetails('BD').then((data)=>{
        //console.log(data) // All data 
        console.log(data.name)
     }).catch((error)=>{
         console.log(`Error ${error}`)
     })


  

  

// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', (e)=>{
//     if(e.target.readyState ===4 && e.target.status ===200){
//         const data = JSON.parse(e.target.responseText)
//         //console.log(data)
//     }else if(e.target.readyState===4){
//       //  console.log('Something wrong')
//     }
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=1')
// request.send()


// const newRequest = new XMLHttpRequest()

// newRequest.addEventListener('readystatechange', (e)=>{
//     if(e.target.readyState ===4 && e.target.status ===200){
//         //console.info(e)
//         let data  = JSON.parse(e.target.responseText)
//          data = data.find((country)=>{return country.alpha2Code ==='BD'})
//          console.log(data.name)
//     }else if(e.target.readyState===4){
//         console.log('Something wrong')
//     }
    
// })

// newRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// newRequest.send()
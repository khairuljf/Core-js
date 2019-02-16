
class Hangman{

    constructor(word, remainingGuesses){
    this.word =  word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'Playing'

    }

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
            this.status = 'Playing'
        }

    }

    getStatusMessage(){

        if(this.status ==='Playing'){
            return ` Guesses left ${this.remainingGuesses}`
        }else if(this.status ==='Failed'){
            return ` Nice try! The word was "${this.word.join('')}".`
        }else{
            return ' Success : Great work'
        }

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




const game1 = new Hangman('cat', 2)

// View query
const getPluzzle =  document.querySelector('#getPluzzle')
const guessremaining =  document.querySelector('#remaining')
let gameStatus = document.querySelector('#gstatus')

getPluzzle.textContent =  game1.getPuzzle()
//guessremaining.textContent = game1.remainingGuesses
gameStatus.textContent = game1.getStatusMessage()


    window.addEventListener('keypress', (e)=>{
       
        game1.makeGuess(e.key)
        getPluzzle.textContent =  game1.getPuzzle()
    
         //guessremaining.textContent = game1.remainingGuesses
         gameStatus.textContent = game1.getStatusMessage()

     })


const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e)=>{
    if(e.target.readyState ===4 && e.target.status ===200){
        const data = JSON.parse(e.target.responseText)
        //console.log(data)
    }else if(e.target.readyState===4){
      //  console.log('Something wrong')
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=1')
request.send()


const newRequest = new XMLHttpRequest()

newRequest.addEventListener('readystatechange', (e)=>{
    if(e.target.readyState ===4 && e.target.status ===200){

        let data  = JSON.parse(e.target.responseText)
        data.forEach((single_data)=>{
           if(single_data.alpha2Code==='BD'){
               console.log(single_data.name)
           }
        })
    }else if(e.target.readyState===4){
        console.log('Something wrong')
    }
})

newRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
newRequest.send()
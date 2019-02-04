const Hangman = function(word, remainingGuesses){
    this.word =  word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'Playing'
}

Hangman.prototype.calculateStatus = function(){

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


Hangman.prototype.getStatusMessage= function(){
        if(this.status ==='Playing'){
            return ` Guesses left ${this.remainingGuesses}`
        }else if(this.status ==='Failed'){
            return ` Nice try! The word was "${this.word.join('')}".`
        }else{
            return ' Success : Great work'
        }
}

Hangman.prototype.getPuzzle = function(){
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



Hangman.prototype.makeGuess = function(guess){
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



const game1 = new Hangman('cat', 2)

// View query
const getPluzzle =  document.querySelector('#getPluzzle')
const guessremaining =  document.querySelector('#remaining')
let gameStatus = document.querySelector('#gstatus')

getPluzzle.textContent =  game1.getPuzzle()
//guessremaining.textContent = game1.remainingGuesses
gameStatus.textContent = game1.getStatusMessage()


    window.addEventListener('keypress', function(e){
       
        game1.makeGuess(e.key)
        getPluzzle.textContent =  game1.getPuzzle()
    
         //guessremaining.textContent = game1.remainingGuesses
         gameStatus.textContent = game1.getStatusMessage()

     })




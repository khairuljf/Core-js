const Hangman = function(word, remainingGuesses){
    this.word =  word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
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
    }
    if(isUnique && isBadGuess ){
        this.remainingGuesses --
    }
}

const game1 = new Hangman('cat', 2)

game1.makeGuess('c')
game1.makeGuess('t')
game1.makeGuess('z')
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

const game2 = new Hangman('New Jersey', 3)
game2.makeGuess('w')
game2.makeGuess('n')
console.log(game2.getPuzzle())
console.log(game2.remainingGuesses)




let min  = 10
let max = 20

let random  = Math.floor(Math.random() * (max - min +1)) + min

console.log(random);


// Array object 

const notes = [{},
    {
     title : 'Code',
     body: 'I love coading'
    },
    { 
    title : 'html',
    body: 'I love html'

    }, 
    {
    title : 'wordpress',
    body: 'I love wordpress'

    }, 
    {
    title : 'php',
    body: 'I love php'

    }
    , 
    {
    title : 'js',
    body: 'I love js'

    }
]

// Find targeted array. 
const index = notes.findIndex(function(node, index){
   // console.log(node)
    return node.title === 'html'
})

console.log(index)

// Find data by findIndex
function findNote(nodes, nodeTitle){
    const index = nodes.findIndex(function(node, index){
        return node.title === nodeTitle
    })
    return nodes[index]
}

const indexTitle = findNote(notes, 'html');

console.log(indexTitle)


// Find data by find
const findNotes = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title === noteTitle
    })
}

const note = findNotes(notes, 'js')
console.log(note)


const persons ={
    name : 'khairul islam',
    expences : [],
    addExpences : function(details, taka){
        this.expences.push({
            desc:details,
            ammount:taka
        })
    },
    accountSummary : function(){
        let totalkhoroch = 0;

        this.expences.forEach(function(single){
            totalkhoroch =  totalkhoroch + single.ammount;
        })

        return `${name} total spend $${totalkhoroch}`

    }
}


persons.addExpences('Tea', 250 );
persons.addExpences('Cofee', 550 );

console.log(persons.accountSummary());






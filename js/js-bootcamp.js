
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

    }
]

//console.log(notes)


// Find targeted array. 
const index = notes.findIndex(function(node, index){
   // console.log(node)
    return node.title === 'html'
})

console.log(index)


function findNote(nodes, nodeTitle){
    const index = nodes.findIndex(function(node, index){
        return node.title === nodeTitle
    })
    return nodes[index]
}

const indexTitle = findNote(notes, 'html');

console.log(indexTitle)




let min  = 10
let max = 20

let random  = Math.floor(Math.random() * (max - min +1)) + min

console.log(random);


// Array object 

const notes = [
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
    income:[],
    addIncome: function(incomeSource, income_ar_poriman){
        this.income.push({
            source: incomeSource,
            mainAccount: income_ar_poriman
        })
    },
    addExpences : function(details, taka){
        this.expences.push({
            desc:details,
            ammount:taka
        })
    },
    accountSummary : function(){

        // Total income
        let totalJoma = 0

        this.income.forEach(function(single){
            totalJoma = totalJoma + single.mainAccount
        })

        //Total khoroch ar hisab
        let totalKhoroch = 0;
        this.expences.forEach(function(single){
            totalKhoroch =  totalKhoroch + single.ammount;
        })

        return `${name} total spend $${totalKhoroch} from $${totalJoma}`

    }
}


persons.addIncome('f', 500 );
persons.addIncome('office', 1000 );


persons.addExpences('Tea', 250 );
persons.addExpences('Cofee', 550 );
console.log(persons.accountSummary());



// Button name change & add clas or remove
var mybdt = document.querySelector('#ebtn');
mybdt.addEventListener('click', function(e){

    if(mybdt.classList.contains("readmore")){

        mybdt.classList.remove("readmore");
        e.target.textContent ="Close"
    }else{
        mybdt.classList.add("readmore");
        e.target.textContent ="Read more"
    }
    
   
})


// Remove all item by class
document.querySelector('#hidetxt').addEventListener('click', function(){
    document.querySelectorAll('.noted').forEach(function(single_note){
        single_note.remove()
    })

})


// start Search function 
const renderNotes = function (notes, filters) {
    
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    console.log(filteredNotes)

    document.querySelector("#nodeList").innerHTML = ''

    if(filteredNotes.length>0){
        filteredNotes.forEach(function(singe_item){
            let el  =document.createElement('p')
            el.textContent = singe_item.title
    
           document.querySelector("#nodeList").appendChild(el)
    
        })
    }else{
        let el  =document.createElement('p')
        el.textContent = 'No data found'

       document.querySelector("#nodeList").appendChild(el)

    }

}



const filters = {
    searchText: ''
}


document.querySelector('#search').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})


// End search funcionality

document.querySelector('#cform').addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e.target.elements.pname.value)
    console.log(e.target.elements.checkBox.checked)
})




// Toto array 
const todoList = getSaveNotes()



const addtoDo ={
    title:'',
    hidecomple:false
}

// Onload search list call function


 serchfunc(todoList , addtoDo)

// Add todo in list
document.querySelector('#additem').addEventListener('submit', function(e){
    e.preventDefault()
    let ele = e.target.elements.addtodo;

      todoList.push({
        id:uuidv4(),
        title:ele.value,
        complete:false
    })

    localStorage.setItem('todos', JSON.stringify(todoList))
    serchfunc(todoList , addtoDo)
    ele.value = ''
})




// Input search
document.querySelector('.searchfromtoto').addEventListener('input', function(e){
    addtoDo.title =  e.target.value
    serchfunc(todoList , addtoDo)
    document.querySelector('#result').textContent = 'Search result'
})

// Check box search
document.querySelector('#completeor').addEventListener('input', function(e){
    addtoDo.hidecomple =  e.target.checked
    serchfunc(todoList , addtoDo)
})









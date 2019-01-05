// Get save note

const getSaveNotes = function(){
        // Get data from localstorage
    let todojson = localStorage.getItem('todos')

    // Check localstorage is ready or not
    if(todojson !== null){
        return JSON.parse(todojson)
    }else{
        return []
    }
}


const removeTheNode = function(id){
    
}


// Create dom element 

const createNewElement = function(after_filter_single_item){
        // Create div
        let creatBlock = document.createElement('div')

         // Create span tag for text
        let crateParagraph = document.createElement('span')

        // Create box create
        let creatCheckbox = document.createElement('input')
        creatCheckbox.setAttribute('type', 'checkbox')
        creatCheckbox.setAttribute('id','completeTask')

        //Create label for check box

        let createLabel =  document.createElement('label')
       
        createLabel.setAttribute('for','completeTask')
        createLabel.appendChild(creatCheckbox)


        // Create close button
        let creatButton = document.createElement('button')
        creatButton.textContent = 'X'

        //serchfunc(todoList , addtoDo)
        creatButton.addEventListener('click',function(){

            removeTheNode(after_filter_single_item.id)
            serchfunc(todoList, addtoDo)
        })

        crateParagraph.style.backgroundColor ='orange'
        crateParagraph.style.marginRight ='20px'

    if(after_filter_single_item.title.length>0){
        crateParagraph.textContent =  after_filter_single_item.title
    }else{
        crateParagraph.textContent =  'Unamed note'
    }

    creatBlock.appendChild(crateParagraph)
    creatBlock.appendChild(createLabel)
    creatBlock.appendChild(creatButton)

    return creatBlock
}


// Filter data from array
const serchfunc = function(todo, targetval){
    let todofilt = todo.filter(function(single_todo){
        return single_todo.title.toLowerCase().includes(targetval.title.toLowerCase())
    })

 
   todofilt = todofilt.filter(function(todo){
       if(targetval.hidecomple){
           return !todo.complete
       }else{
           return true
       }
   })
 
   document.querySelector('#totList').innerHTML = ''
 
    todofilt.forEach(function(after_filter_single_item){
     const el = createNewElement(after_filter_single_item)
         document.querySelector('#totList').append(el)    
    })
 
 }
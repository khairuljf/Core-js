const nodeId = location.hash.substring(1)
let nodes = getSaveNotes()

let node = nodes.find(function(single_node){
return single_node.id === nodeId
})

if(node==undefined){
   location.assign('/practice.html')
}

// Show previous data in input field
 document.querySelector('#input-title').value = node.title
 document.querySelector('#input-require').value = node.desk

// Update data function
const updateData = function(currentId){

   const selectItem = nodes.findIndex(function(single_todo){
         return single_todo.id === currentId
   })

    nodes[selectItem].title =  document.querySelector('#input-title').value
    nodes[selectItem].desk = document.querySelector('#input-require').value
}

// Update Title
document.querySelector('#input-title').addEventListener('input', function(e){
   updateData(node.id)
  saveNotes(nodes)
 })

 // Update description
 document.querySelector('#input-require').addEventListener('input', function(e){
   updateData(node.id)
   saveNotes(nodes)
 })

window.addEventListener('storage', function(e){
   if(e.key === 'todos'){
      nodes = JSON.parse(e.newValue)

      let node = nodes.find(function(single_node){
         return single_node.id === nodeId
         })
         
         if(node==undefined){
            location.assign('/practice.html')
         }
         
         // Show previous data in input field
          document.querySelector('#input-title').value = node.title
          document.querySelector('#input-require').value = node.desk
 
    
    }
  
})
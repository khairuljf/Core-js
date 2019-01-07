const nodeId = location.hash.substring(1)
const nodes = getSaveNotes()

const node = nodes.find(function(single_node){
return single_node.id === nodeId
})

if(node==undefined){
   location.assign('/practice.html')
}
const Person = function(fName, age, likes=[]){
    this.firstName = fName  
    this.lastName = fName  
    this.age = age 
    console.log(likes)
}

Person.prototype.getBio = function(){
    return `${this.firstName} is ${this.age}`
}

const me = new Person('khairul', 25, 'Coding, Playing')

Person.prototype.setName = function(fullName){
    const names =  fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[0]

}
me.setName('Khairul islam', )

console.log(me)

const Person = function(fName, age){
    this.firstName = fName 
    this.age = age 
}

Person.prototype.getBio = function(){
    return `${this.firstName} is ${this.age}`
}

const me = new Person('khairul', 25)

console.log(me.getBio())



class PersonClass {

    constructor(fName, age, likes=[]){
        this.firstName = fName  
        this.lastName = fName  
        this.age = age 
        this.likes = likes
    }

    getBio(){
        bio = `${this.fName} is ${this.age}`
        this
    }

}




const myPerson = new PersonClass('Rubel Ali', '24' , ['coding', 'watching movie'])

console.log(myPerson)

Person.prototype.getBio = function(){
    
}



Person.prototype.setName = function(fullName){
    const names =  fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[0]

}


const me = new Person('khairul', 25, 'Coding, Playing')
me.setName('Khairul islam', )

console.log(me.getBio())

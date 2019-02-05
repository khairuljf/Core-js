

class Person {

    constructor(fName, age, likes=[]){
        this.firstName = fName  
        this.lastName = fName  
        this.age = age 
        this.likes = likes
    }

    getBio(){
        let bio = `${this.firstName} is ${this.age} `

        this.likes.forEach((like)=>{
            bio += `${this.firstName} likes ${like}`
        })

        return bio
    }

}

class student extends Person{
    constructor(fName, age, readIn, likes){
        super(fName, age, likes)
        this.readingClass = readIn
    }
    getBio(){
        return `${fName} is a student & he read in class ${this.readingClass}`
    }
}


const studentInfo =  new student('Manik Riahn', '24', '4th', ['reading', 'visiting new place'])

console.log(studentInfo)



const myPerson = new Person('Rubel Ali', '24' , ['coding', 'watching movie'])

console.log(myPerson.getBio())



const me = new Person('khairul', 25, ['Coding, Playing'])


console.log(me.getBio())

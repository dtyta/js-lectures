class Parent{

    constructor(name, age){
        this.firstName = name
        this.lastName = "Sanitarskyi"
        this.age = age
    }

    greeting(){
        console.log('Hey')
    }

    tellName(){
        console.log(`My name is ${this.firstName} ${this.lastName}`)
    }

    tellAge(){
        console.log(`My age is ${this.age}`)
    }

    tellJobTitle(){
        if(this instanceof Child){
            console.log(`I don't have job title!`)
        }else{
            this.job = "QA"
            console.log(`My job title is ${this.job}`)
        }
    }
}

class Child extends Parent{
    greeting(){
        console.log(`Hey! It's a new greeting`)
    }

    goToSchool(){
        console.log('I like to go to school!')
    }
}

const dmytro = new Parent('Dmytro', 28);
const sofia = new Child('Sofia', 6)

dmytro.greeting();
dmytro.tellName();
dmytro.tellAge();
dmytro.tellJobTitle();
console.log(dmytro)

console.log('_____________________')

sofia.greeting();
sofia.tellName();
sofia.tellAge();
sofia.tellJobTitle();
sofia.goToSchool();
console.log(sofia)

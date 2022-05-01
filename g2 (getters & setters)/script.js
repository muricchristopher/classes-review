//Getters and Setters

// The basic idea is that it adds syntax to define accessor properties as methods, instead of simple data properties.

class Person{

    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
        // this.completeName
    }

    //getters and setters work like a property

    get completeName(){
        return `${this.name} ${this.lastName}`
    }

    set completeName(value){
        value = value.split(' ')
        this.name = value.shift();
        this.lastName = value.join(' ')
    }

}

class Company{
    constructor(brand){
        this.compName = brand
    }

    get name(){
        return this.compName
    }

    set name(name){
        this.compName = name
    }
}

const p1 = new Person('Jonathan', 'Aguiar');

p1.completeName = 'Joao Fernando da Silva'
console.log(p1.completeName);


const c1 = new Company('Apple');

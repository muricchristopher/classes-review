//Classes

// Classes are a function template for creating objects and using them more efficiently

class Car{

    constructor(name){
        // create and initializes the objects.
        this.name = name;
        this.currentSpeed = 1;
    }


    // the methods we declare inside the class are added to its PROTOTYPE and it assigns the methods to the this.__proto__ property.

    accelerate(value){
        if(this.currentSpeed > 100 || value + this.currentSpeed > 100) return `Cannot accelerate`;
        this.currentSpeed += value
        console.log(this)
    }

    brake(value){
        if(value <= this.currentSpeed){
            this.currentSpeed -= value;
            console.log(this)
            return
        }

        return `Cannot brake`;
    }
}




const c1 = new Car('Corolla')
//Inheritance

class Dispositive{
	constructor(name, model){
		this.name = name;
		this.model = model
		this.isON = false;
	}

	turnOn(){
		if(this.isON) throw `${this.name} alredy turned on`;

		this.isON = true
		return `${this.name} turned on`
	}

	turnOff(){
		if(!this.isON) throw `${this.name} alredy turned off`;

		this.isON = false
		return `${this.name} turned off`
	}
}

class Smartphone extends Dispositive{
//Smartphone inherits all methods Dispositive contains
	constructor(name, model, color){
		super(name, model);
		//Smartphone inherits all properties that Dispositive contains

		this.color = color;
		this.positionVertical = true;
		//creating specific properties only to Smartphone

	}

	//creating custom methods 

	rotateSmartphone(){
		if(this.positionVertical){
			this.positionVertical = false
			return `${this.name} rotated to horizontal`
		}

		this.positionVertical = true
		return `${this.name} rotated to vertical`

	}
}



d1 = new Dispositive('TV');

s1 = new Smartphone('Iphone', 'X', 'Black');
s1.turnOn()


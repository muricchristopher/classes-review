// instance and static methods

class Password{
	constructor(length){
		this.length = length
		this.actualPassword = false
	}

	generatePassword(){
		//instance method
		//created instances can acesses this method

		if(!this.actualPassword){
			// do not allow creating more than one password
			this.actualPassword = Password.generateRandomNumbers(this.length)
								//creating password by a static method within the class Password
		}
		return this.actualPassword

		//
	}

	static generateRandomNumbers(length){
		//static method

		//created instances cannot acess this method

		let randomArray = []

		for (var i = length - 1; i >= 0; i--) {

			randomArray.push(parseInt(Math.random()*100))			
		}

		return randomArray

	}
}

pasWith8 = new Password(8)

pasWith8.generatePassword()
// Array(8) [ 48, 52, 38, 20, 26, 99, 26, 37 ]

pasWith8.generateRandomNumbers()
//instance pasWith8 cannot acesses static methods
// pasWith8.generateRandomNumbers is not a function

Password.generateRandomNumbers(8)
// Array(8) [ 48, 52, 38, 20, 26, 99, 26, 37 ]
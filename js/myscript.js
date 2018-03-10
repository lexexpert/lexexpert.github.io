var list = ['cat','lion','bear'];

var user = {
	user: "John",
	age: 34,
	hobby: "Soccer",
	spells: ["hello","bue","nice"],
	shout: function (){
		console.log("AHHHH");
	}
};

class Animal{
	constructor(name, type, color){
		this.name = name;
		this.type = type;
		this.color = color;
	}
}

class Mamal extends Animal{
	constructor(name, type, color){
		super(name, type, color)
	}
	sound(){
		console.log(`I'm ${this.name} and I'm a ${this.color}`);
	}
}

const cow = new Mamal('Shelly','cow','blue');

const square = (x) => x**2;
// for theory follow this tutorial : https://www.youtube.com/watch?v=lo7o91qLzxc

// object  = A collection of related properties and/or methods.
// methods are nothing but functions stored as object properties. 
// object = {key:value, key2:value2, function(), function2()} - this case function1, function2 are called methods...  etc..


const human = {
firstName: "SpongeBob",
lastName : "squarepants",
age : 24,
isEmployed : true,
}

console.log(human.firstName);
console.log(human.lastName);
console.log(human.age);
console.log(human.isEmployed);


const user = {
name: "Ava",
greet(){
    console.log(`Hi ${this.name}`);
}
}

user.greet();



const calculator = {

add (a,b) {return a+b;},
subtract (a,b) { return a-b;},
multiply(a,b) {return a*b;},
};

console.log(calculator.add(5,3));
console.log(calculator.divide(10,2));


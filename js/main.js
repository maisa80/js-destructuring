// Destructering array
console.log("######## Destructering array ########");
const colors = ['red', 'orange', 'blue'];

// May assign the array elements to variables, WITHOUT destructering
// let variable1 = colors[0];
// let variable2 = colors[1];
// let variable3 = colors[2];
// console.log(variable1, variable2, variable3);

// Rewriting above code with destructering
let [variable1, variable2, variable3] = colors;
console.log(variable1, variable2, variable3);

console.log("######## Destructering object ########");
// Destructering object
let props = {
    firstname: 'John',
    lastname: 'doe',
    age: 33,
}

// May assign the object properties to variables, WITHOUT destructering
variable1 = props.firstname;
variable2 = props.lastname;
variable3 = props.age;
console.log(variable1, variable2, variable3);

// Rewriting above code with destructering
let {firstname, lastname, age} = props
console.log(firstname, lastname, age);
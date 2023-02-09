//Practica 2

function greet(){
    console.log("Hello");
}
greet();
console.log(greet);
//arrow function
//let greet=()=>console.log('Hello')


function logGreeting(fn) {
    fn();
}
logGreeting(greet);
//arrow function
//let logGreeting=(fn)=> fn();


let greetMe= ()=> {
    console.log('Hello from the function expression');
}
greetMe();
//arrow function
//let greetMe= ()=>console.log('Hello from the function expression');


let saludo= (nombre, tratamiento)=> {
    console.log('Hola ' + tratamiento +' ' + nombre);
}
saludo('Miguel', 'Sr');
//arrow function
//let saludo= (nombre, tratamiento)=> console.log('Hola ' + tratamiento +' ' + nombre);


let cuadrado=numero=> numero*numero;
console.log(cuadrado(4));



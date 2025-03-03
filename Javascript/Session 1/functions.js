//-------------- Function --------------
function greet(name) {
    console.log("Hello, " + name);
}
greet("Mohamed"); // Hello, Mohamed


//-------------- Default Parameters --------------
function greet(name = "Guest") {
    console.log("Hello, " + name);
}
greet(); // Hello, Guest


//------------- With Return -------------
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(sum); // 8

//-------------- Arrow Function --------------
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // 15

//-------------- Function Expression --------------
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(5, 3)); // 2

//-------------- Callback Function --------------
function callback(name) {
    console.log("Hello, " + name);
}
function hello(name, callback) {
    callback(name);
}
hello("Mohamed", callback); // Hello, Mohamed
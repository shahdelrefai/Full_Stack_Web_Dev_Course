//----------------------var----------------------
// var is function scoped
// var can be re-declared
// var can be updated
// var is hoisted
// var is accessible outside the block
console.log(name); // Undefined (Hoisting)
var name = "Mohamed";
console.log(name); // Mohamed
var x = 10;
var age = 25;

if (true) {
    var age = 30;
    x = 55;
}

console.log(age); // 30 (Accessible outside the block)
console.log(x); // 55 (Change is accessible outside the block)
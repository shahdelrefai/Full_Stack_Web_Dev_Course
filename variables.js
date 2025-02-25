console.log(name); // Undefined (Hoisting)
var name = "Mohamed";
console.log(name); // Mohamed
var x = 10;

if (true) {
    var age = 30;
    x = 55;
}

console.log(age); // 30 (Accessible outside the block)
console.log(x); // 55 (Change is accessible outside the block)


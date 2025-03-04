//----------------- For Loop -----------------
// for (initialization; condition; increment/decrement)
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

//---------------- While Loop ----------------
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

//--------------- Do-While Loop ---------------
let num = 0;
do {
    console.log("HIiiiiii");
    num++;
} while (num < 0);

//--------------- For-in Loop ---------------
let fruits = ["Apple", "Banana", "Orange"];
for (let index in fruits) {
    console.log(fruits[index]);
}

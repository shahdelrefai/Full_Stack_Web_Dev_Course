//----------------- For Loop -----------------
// for (initialization; condition; increment/decrement)
for (let i = 0; i < 5; i++) {
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
    console.log(num);
    num++;
} while (num < 5);

//--------------- For-in Loop ---------------
let person = {
    name: "John",
    age: 30
};
for (let key in person) {
    console.log(key, person[key]);
}

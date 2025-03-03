let arr = [6, 3, 37, 88, 14];
arr = arr.sort();
console.log(arr);  //output [14, 3, 37, 6, 88]

arr.sort((a, b) => a - b);
console.log(arr);  //output [3, 6, 14, 37, 88]
//------------------ If Else ------------------
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//------------------ Ternary Operator ------------------
let isAdult = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(isAdult);

//------------------ Switch Case ------------------
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Another day.");
}
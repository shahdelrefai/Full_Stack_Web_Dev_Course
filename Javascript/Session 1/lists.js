let places = ["Dubai", "Riyadh", "Cairo"]; // Array of strings
places[0] = "Jerusalem"; // Update an element
console.log(places[0]); // Dubai

//----------------- List Methods -----------------
places.push("Beirut"); // Add to end
console.log(places);

const city = places.pop(); // Remove last item
console.log(city);
console.log(places);

places.unshift("Amman"); // Add to start
console.log(places);

const city2 = places.shift(); // Remove first item
console.log(city2);
console.log(places);

places.splice(1, 1, "Doha"); // (start index, number of objects to delete, elements to add/remove)
console.log(places);

places.length; // Length of the array
places.sort(); // Sort the array
places.reverse(); // Reverse the array
console.log(places.indexOf("Cairo")); // Find index of an item

console.log(places.includes("x")); // Check item existence
console.log(places.join(", ")); // Convert to string
console.log(places.slice(1, 3)); // Extract elements from (start, end) indexes
let x = places.concat(["Muscat", "Manama"]); // Merge arrays
console.log(x);

//----------------- Mixed Array -----------------
let mixedArray = ["Cairo", 5, true, null];


//-------------Spread Operator-------------
let continents = ["Asia", "Africa", "Europe"];
let blad = ["China", "Egypt", "Turkey"];
let world = [...continents, ...blad];
console.log(world); // ["Asia", "Africa", "Europe", "China", "Egypt", "Turkey"]
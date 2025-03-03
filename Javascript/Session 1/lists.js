let places = ["Dubai", "Riyadh", "Cairo"]; // Array of strings
console.log(places[0]); // Dubai

//----------------- List Methods -----------------
places.push("Beirut"); // Add to end
places.pop(); // Remove last item
places.unshift("Amman"); // Add to start
places.shift(); // Remove first item
places.splice(1, 1, "Doha"); // (start index, number of objects to delete, elements to add/remove)
places[0] = "Jerusalem"; // Update an element
places.length; // Length of the array
places.sort(); // Sort the array
places.reverse(); // Reverse the array
places.indexOf("Riyadh"); // Find index of an item
places.includes("Cairo"); // Check item existence
places.join(", "); // Convert to string
places.slice(1, 3); // Extract elements from (start, end) indexes
places.concat(["Muscat", "Manama"]); // Merge arrays

//----------------- Mixed Array -----------------
let mixedArray = ["Cairo", 5, true, null];


//-------------Spread Operator-------------
let continents = ["Asia", "Africa", "Europe"];
let world = [...continents, "China", "Egypt", "Turkey"];
console.log(world); // ["Asia", "Africa", "Europe", "China", "Egypt", "Turkey"]
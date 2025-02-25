let fruits = ["Apple", "Banana", "Mango"]; // Array of strings
console.log(fruits[0]); // Apple

fruits.push("Orange"); // Add to end
fruits.pop(); // Remove last item
fruits.unshift("Grapes"); // Add to start
fruits.shift(); // Remove first item
fruits.splice(1, 1, "Kiwi"); // Add/Remove at index
fruits[0] = "Pineapple"; // Update an element
fruits.length; // Length of the array
fruits.sort(); // Sort the array
fruits.reverse(); // Reverse the array
fruits.indexOf("Banana"); // Find index of an item
fruits.includes("Mango"); // Check item existence
fruits.join(", "); // Convert to string
fruits.slice(1, 3); // Extract elements
fruits.concat(["Papaya", "Guava"]); // Merge arrays

let mixedArray = ["Apple", 5, true, null];
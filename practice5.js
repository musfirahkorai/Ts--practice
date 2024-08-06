// TypeScript Array Practice
// 1. Declare and initialize arrays
var numbers = [1, 2, 3, 4, 5];
var fruits = ['Apple', 'Banana', 'Cherry'];
var mixed = [1, 'Orange', 2, 'Mango'];
// 2. Accessing elements
console.log('First number:', numbers[0]);
console.log('Second fruit:', fruits[1]);
console.log('Thrid mixed element:', mixed[2]);
// 3. Adding elements
numbers.push(6);
fruits.unshift('Strawberry');
// 4. Removing elements
numbers.pop();
fruits.shift();
// 5. Finding elements
var index = numbers.indexOf(3); // Find the index of 3
var fruitFound = fruits.find(function (fruit) { return fruit === 'Cherry'; }); // Find Cherry
// 6. Iterating through arrays
console.log('Numbers:');
numbers.forEach(function (num) { return console.log(num); });
console.log('Fruits:');
fruits.forEach(function (fruit) { return console.log(fruit); });
// 7. Mapping arrays
var squaredNumbers = numbers.map(function (num) { return num * num; }); // Square each number
console.log('Squared Numbers:', squaredNumbers);
// 8. Filtering arrays
var evenNumbers = numbers.filter(function (num) { return num % 2 === 0; }); // Filter even numbers
console.log('Even Numbers:', evenNumbers);
// 9. Reducing arrays
var sum = numbers.reduce(function (total, num) { return total + num; }, 0); // Sum of all numbers
console.log('Sum of Numbers:', sum);
// 10. Sorting arrays
var sortedFruits = fruits.sort(); // Sort fruits alphabetically
console.log('Sorted Fruits:', sortedFruits);
// 11. Splicing arrays
numbers.splice(2, 1, 10); // Remove 1 element at index 2 and insert 10
console.log('Numbers after Splice:', numbers);
// 12. Converting arrays to strings
var numbersString = numbers.join(', '); // Convert numbers array to string
console.log('Numbers as String:', numbersString);
// 13. Multi-dimensional arrays
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Accessing multi-dimensional arrays
console.log('Matrix Element [1][2]:', matrix[1][2]); // 6
// 14. Array Destructuring
var first = numbers[0], second = numbers[1], rest = numbers.slice(2);
console.log('Destructured Numbers:', first, second, rest);
// 15. Checking array length
console.log('Length of Numbers:', numbers.length);
// 16. Array from a string
var str = 'Hello World';
var charArray = Array.from(str); // Convert string to array of characters
console.log('Character Array:', charArray);
// 17. Flat Arrays
var nestedArray = [[1, 2], [3, 4], [5, 6]];
var flatArray = nestedArray.flat(); // Flatten the nested array
console.log('Flat Array:', flatArray);
// 18. Finding unique values
var duplicatedArray = [1, 2, 2, 3, 4, 4, 5];
var uniqueArray = Array.from(new Set(duplicatedArray)); // Remove duplicates
console.log('Unique Array:', uniqueArray);
// 19. Using some() and every()
var hasEven = numbers.some(function (num) { return num % 2 === 0; }); // Check if any number is even
var allPositive = numbers.every(function (num) { return num > 0; }); // Check if all numbers are positive
console.log('Has Even Number:', hasEven);
console.log('All Numbers Positive:', allPositive);
// 20. Flattening and mapping
var arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
var doubledArray = arrayOfArrays.flat().map(function (num) { return num * 2; });
console.log('Doubled Flattened Array:', doubledArray);

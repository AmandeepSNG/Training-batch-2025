// const sampleArray = [1,2,3]
// console.log("sampleArray after modification: ", sampleArray)


const users = [
  { id: 1, name: 'Alice', age: 25, status: true },
  { id: 2, name: 'Bob', age: 30, status: false },
  { id: 3, name: 'Charlie', age: 35, status: true }
];

console.log("Users array: ", checkEven(32));


function checkEven(number) {
  return number % 2 === 0;
}


/**
 * 
 * Function which takes filename as argument and returns the extension of  file
 */
example.png.txt.js
function getFileExtension(filename) {
  splittedArr = filename.split(".");     //[example, js, txt, png]
  // return splittedArr[splittedArr.length - 1];

}



/**
Topics covered

1. Array
2. Array Methods
  1. constructor()
  2. length()
  3. isArray()
  4. find()
  5. findIndex()
  6. filter()
  7. forEach()
  8. map()
  9. reduce()
  10. some()
  11. every()
  12. includes()
  13. concat()
  14. slice()
  15. splice()
  16. reverse()
  17. sort()
  18. fill()
  19. from()
  20. push()
  21. pop()
  22. shift()
  23. unshift()
  24. toString()
  25. join()
  26. flat()

1. Simple example of callback function
2. Simple example to get the file extension

Examples questions

1. How do you create a new array with a specified length and fill it with a static value?
2. How can you check if a given variable is an array?
3. Which array method would you use to find the first element that satisfies a provided testing function?
4. How do you create a new array with all elements that pass the test implemented by the provided function?
5. What method would you use to execute a provided function once for each array element?

Additional questions for each function:

1. constructor()
   - How do you create an array using the Array constructor?
   - How can you create an array with a single element using the Array constructor?
   - What happens if you pass a single number to the Array constructor?
   - How can you create an array with multiple elements using the Array constructor?
   - How do you create an empty array using the Array constructor?

2. length()
   - How do you find the length of an array?
   - How can you change the length of an array?
   - What happens if you set the length of an array to a value less than its current length?
   - How can you use the length property to add elements to an array?
   - How do you use the length property to remove elements from an array?

3. isArray()
   - How do you check if a variable is an array?
   - What is the syntax for the Array.isArray() method?
   - Can you use Array.isArray() to check if a variable is not an array?
   - How does Array.isArray() differ from the typeof operator?
   - How can you use Array.isArray() in a conditional statement?

4. find()
   - How do you find the first element in an array that satisfies a provided testing function?
   - What is the syntax for the find() method?
   - What does the find() method return if no elements satisfy the testing function?
   - How can you use the find() method with arrow functions?
   - How do you use the find() method to search for an object in an array?

5. findIndex()
   - How do you find the index of the first element in an array that satisfies a provided testing function?
   - What is the syntax for the findIndex() method?
   - What does the findIndex() method return if no elements satisfy the testing function?
   - How can you use the findIndex() method with arrow functions?
   - How do you use the findIndex() method to search for an object in an array?

6. filter()
   - How do you create a new array with all elements that pass the test implemented by the provided function?
   - What is the syntax for the filter() method?
   - How can you use the filter() method with arrow functions?
   - How do you use the filter() method to remove elements from an array?
   - How can you use the filter() method to find all objects in an array that match a certain condition?

7. forEach()
   - How do you execute a provided function once for each array element?
   - What is the syntax for the forEach() method?
   - How can you use the forEach() method with arrow functions?
   - How do you use the forEach() method to modify each element in an array?
   - How can you use the forEach() method to iterate over an array of objects?

8. map()
   - How do you create a new array with the results of calling a provided function on every element in the calling array?
   - What is the syntax for the map() method?
   - How can you use the map() method with arrow functions?
   - How do you use the map() method to transform each element in an array?
   - How can you use the map() method to create a new array of objects?

9. reduce()
   - How do you apply a function against an accumulator and each element in the array to reduce it to a single value?
   - What is the syntax for the reduce() method?
   - How can you use the reduce() method with arrow functions?
   - How do you use the reduce() method to sum all elements in an array?
   - How can you use the reduce() method to flatten a nested array?

10. some()
    - How do you test whether at least one element in the array passes the test implemented by the provided function?
    - What is the syntax for the some() method?
    - How can you use the some() method with arrow functions?
    - How do you use the some() method to check if an array contains a certain value?
    - How can you use the some() method to check if any objects in an array match a certain condition?

11. every()
    - How do you test whether all elements in the array pass the test implemented by the provided function?
    - What is the syntax for the every() method?
    - How can you use the every() method with arrow functions?
    - How do you use the every() method to check if all elements in an array are of a certain type?
    - How can you use the every() method to check if all objects in an array match a certain condition?

12. includes()
    - How do you determine whether an array includes a certain value among its entries?
    - What is the syntax for the includes() method?
    - How can you use the includes() method with strings?
    - How do you use the includes() method to check if an array contains a certain object?
    - How can you use the includes() method with a starting index?

13. concat()
    - How do you merge two or more arrays?
    - What is the syntax for the concat() method?
    - How can you use the concat() method to add elements to an array?
    - How do you use the concat() method to combine arrays of different types?
    - How can you use the concat() method to flatten a nested array?

14. slice()
    - How do you return a shallow copy of a portion of an array into a new array object?
    - What is the syntax for the slice() method?
    - How can you use the slice() method with a start and end index?
    - How do you use the slice() method to copy an entire array?
    - How can you use the slice() method to create a new array from a portion of an existing array?

15. splice()
    - How do you change the contents of an array by removing or replacing existing elements and/or adding new elements?
    - What is the syntax for the splice() method?
    - How can you use the splice() method to remove elements from an array?
    - How do you use the splice() method to add elements to an array?
    - How can you use the splice() method to replace elements in an array?

16. reverse()
    - How do you reverse the order of the elements in an array?
    - What is the syntax for the reverse() method?
    - How can you use the reverse() method to reverse a string?
    - How do you use the reverse() method to reverse an array of objects?
    - How can you use the reverse() method to reverse a portion of an array?

17. sort()
    - How do you sort the elements of an array in place and return the sorted array?
    - What is the syntax for the sort() method?
    - How can you use the sort() method with a compare function?
    - How do you use the sort() method to sort an array of numbers?
    - How can you use the sort() method to sort an array of objects?

18. fill()
    - How do you fill all the elements of an array from a start index to an end index with a static value?
    - What is the syntax for the fill() method?
    - How can you use the fill() method to initialize an array with a static value?
    - How do you use the fill() method to replace elements in an array?
    - How can you use the fill() method with a start and end index?

19. from()
    - How do you create a new array instance from an array-like or iterable object?
    - What is the syntax for the from() method?
    - How can you use the from() method with a mapping function?
    - How do you use the from() method to convert a string to an array?
    - How can you use the from() method to create an array from a set?

20. push()
    - How do you add one or more elements to the end of an array and return the new length of the array?
    - What is the syntax for the push() method?
    - How can you use the push() method to add multiple elements to an array?
    - How do you use the push() method to add elements to an empty array?
    - How can you use the push() method to add elements to an array conditionally?

21. pop()
    - How do you remove the last element from an array and return that element?
    - What is the syntax for the pop() method?
    - How can you use the pop() method to remove elements from an array?
    - How do you use the pop() method to remove elements from an array conditionally?
    - How can you use the pop() method to empty an array?

22. shift()
    - How do you remove the first element from an array and return that element?
    - What is the syntax for the shift() method?
    - How can you use the shift() method to remove elements from an array?
    - How do you use the shift() method to remove elements from an array conditionally?
    - How can you use the shift() method to empty an array?

23. unshift()
    - How do you add one or more elements to the beginning of an array and return the new length of the array?
    - What is the syntax for the unshift() method?
    - How can you use the unshift() method to add multiple elements to an array?
    - How do you use the unshift() method to add elements to an empty array?
    - How can you use the unshift() method to add elements to an array conditionally?

24. toString()
    - How do you convert an array to a string?
    - What is the syntax for the toString() method?
    - How can you use the toString() method to join array elements with a comma?
    - How do you use the toString() method to convert an array of numbers to a string?
    - How can you use the toString() method to convert an array of objects to a string?

25. join()
    - How do you join all elements of an array into a string and return this string?
    - What is the syntax for the join() method?
    - How can you use the join() method with a separator?
    - How do you use the join() method to join array elements with a custom separator?
    - How can you use the join() method to convert an array of objects to a string?

26. flat()
    - How do you create a new array with all sub-array elements concatenated into it recursively up to the specified depth?
    - What is the syntax for the flat() method?
    - How can you use the flat() method with a depth argument?
    - How do you use the flat() method to flatten a nested array?
    - How can you use the flat() method to remove empty slots from an array?
 */

    
// 1. constructor()
// 2. length()
// 3. isArray()
// 4. find()
// 5. findIndex()
// 6. filter()
// 7. forEach()
// 8. map()
// 9. reduce()
// 10. some()
// 11. every()
// 12. includes()
// 13. )concat(
// 14. slice()
// 15. splice()
// 16. reverse()
// 17. sort()
// 18. fill()
// 19. from()
// 20. push()
// 21. pop()
// 22. shift()
// 23. unshift()
// 24. toString()
// 25. join()
// 26. flat()

const sampleArray = "hello";
const users = [
  {
    id: 1,
    name: "Charlie Davis",
    age: 28,
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
    phone: "555-1234",
    isActive: true,
    role: "admin",
    createdAt: "2023-01-01",
    updatedAt: "2023-01-10"
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    email: "jane.smith@example.com",
    address: "456 Elm St, Othertown, USA",
    phone: "555-5678",
    isActive: false,
    role: "user",
    createdAt: "2023-02-01",
    updatedAt: "2023-02-10"
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 25,
    email: "alice.johnson@example.com",
    address: "789 Oak St, Sometown, USA",
    phone: "555-8765",
    isActive: true,
    role: "user",
    createdAt: "2023-03-01",
    updatedAt: "2023-03-10"
  },
  {
    id: 4,
    name: "Bob Brown",
    age: 45,
    email: "bob.brown@example.com",
    address: "101 Pine St, Anycity, USA",
    phone: "555-4321",
    isActive: false,
    role: "moderator",
    createdAt: "2023-04-01",
    updatedAt: "2023-04-10"
  },
  {
    id: 5,
    name: "Charlie Davis",
    age: 30,
    email: "charlie.davis@example.com",
    address: "202 Maple St, Anyville, USA",
    phone: "555-6789",
    isActive: true,
    role: "user",
    createdAt: "2023-05-01",
    updatedAt: "2023-05-10"
  }
];


// Length function example

// const sampleArray = [1, 2, 34, 56, 6, 7, "hello", "world", "javascript", "array", "practice", "example", "for", "beginners"];
// const lengthOfSampleArray = sampleArray.length;
// console.log("lengthOfSampleArray: ", lengthOfSampleArray);



/**
 2. isArray()
 example payload =  it can  a single or multiple
 
 const isArray = Array.isArray(sampleArray)
 console.log(isArray)
 */

/**
  3. find()  returns first element that satisfies the condition otherwise undefined
  const userDetails = users.find(function (user) {
  if (user.name === "Charlie Davis") {
    return user;
  }
  const userDetails = users.find(user => user.name === "Charlie Davis");
})
const userDetails = users.find(function (user) {
  if (user.name === "example") {
    return user;
  }
})
console.log("userDetails: ", userDetails);
 */


/**
  Filter function => returns all the elements that satisfies the condition
  const userWithGreaterAge = users.filter(function (user) {
    if (user.age > 30) {
      return user
    }
  })
  console.log("userWithGreaterAge: ", userWithGreaterAge);
 */


/**
 
Array.some
*/

// users.some(function (user) {
//   if (user.age > 20) {
//     return true
//   }
// })
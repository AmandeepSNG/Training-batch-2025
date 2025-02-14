const car = {
  brand: 'Ford',
  model: 'Mustang',
  year: 1964,
  color: 'red',
  price: 3000,
  available: true,
  features: ['automatic', 'v8', 'leather'],
  start: function () {
    console.log('Car started');
  }
}


const user = {
  id: 1,
  name: "Charlie Davis",
  age: 28,
  email: "john.doe@example.com",
  address: "123 Main St, Anytown, USA",
  phone: "555-1234",
  isActive: true,
  role: "admin"
}


// In Array we use indexes


// In Object we use keys

// // example

// console.log(car.brand, car.year)
// console.log(car['brand'], car['year'])

// // Add new key to object

// //syntax object[key]= value


// car.owner = 'John Doe'  // first method

// car['owner'] = 'John Doe' // second method


// // remove key fromm object


// delete car.hello

// car.name = 'John Doe'

// safe copy
// const safeCopyOfUser = {... user}

// safeCopyOfUser.name = 'John'

// console.log("User", user)

// console.log("SafeCopy", safeCopyOfUser)

// deep copy




// Object.keys
// Object.values
const newObj = Object.assign({}, user)

// override concepts

// const changedCopy = Object.assign({}, user, {name: 'Changed name', age: 30})
const changedCopy = {...user, name: "Changed name"}


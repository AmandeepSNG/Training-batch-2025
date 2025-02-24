// JSON  => Just another javascript object Notation
const sampleObj = {
  key: 1,
  key_2: 2
}

const sampleJsonObj = `{
  "key": 2,
  "key_2": 2
}`
const newSampleJsonObj = {
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
}
// const stringifyJsonValue = JSON.stringify(sampleObj)  // it will convert a javscript object to JSON object

// console.log( sampleObj)

// 2methods

// 1. JSON.stringify({})
// const validObjectFromJSON = JSON.parse(sampleJsonObj)

const validObjectFromJSON = JSON.parse(JSON.stringify(newSampleJsonObj))  // deep copy

console.log(validObjectFromJSON)
//  2. JSON.parse("{}")


// in typescript

const listOfItems = [] || '[]'

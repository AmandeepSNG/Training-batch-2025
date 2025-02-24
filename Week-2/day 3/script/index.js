// ways to intergrate API in js


// 1. XHR

// const API_URL = 'https://dummyjson.com/users'

// const xhrObject = new XMLHttpRequest()
// xhrObject.open("GET", API_URL)
// xhrObject.onload = function () {
//   // if (xhrObject.status == )
//   console.log("xhr response =>", xhrObject.response)
// }

// xhrObject.send()

// async await  promise
// return new Promise((resolve, reject) => {
//   // api hit

//   // success 
// })
//2. way FETCH API
// window.addEventListener('load',  async () => {
//   const API_URL = 'https://dummyjson.com/users'
//   // fetch(API_URL).then((response)=>{
//   //   console.log(response.json().then((responseDAta => {
//   //     console.log("responseData =>", responseDAta)
//   //   })) )
//   // }).catch((error) => {

//   // }).finally(() => {
//   //   console.log('inside finally')
//   // })
//   try {
//     //loading screen
//     const response = await fetch(API_URL)
//     const jsonResponse = await response.json()
//     throw Error("Error occurred while fetchign api")
//   } catch (error) {
//     console.log(error)
//   } finally {
//     // hide loading screen

//   }


//   console.log(jsonResponse)
// })


// 3. Query params and path params


const API_URL = 'https://dummyjson.com/users?limit=10'

// path parametr

const API_URL_PATH_PARAM = 'https://dummyjson.com/users/1234' //  {DOMAIN/ENDPOINT/{DYAMIC THING}}


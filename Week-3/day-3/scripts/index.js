const API_DOMAIN = "http://192.168.0.50:3000"
// const API_ENDPOINTS = {
//   USER: {
//     USERS_LIST: `${API_DOMAIN}/users`,
//     USER_DETAILS: (userId) => {
//       return `${API_DOMAIN}/users/${userId}`
//     },
//     UPDATE_USER: `${API_DOMAIN}/users/${userId}`,
//     DELETE_USER: `${API_DOMAIN}/users/${userId}`
//   }
// }

const API_DOMAIN_PREFIX = {
  USER: '/users',
  todoList: '/list'
}

const callAPI = async (endpoint, method= 'GET', insertToken= false) => {
  // loading screen enabled
  return  fetch(endpoint, {
    method,
    ...(insertToken && {
      headers: {
      }
    })
  }).finally {
    // hide the loading screen
  }
}

callAPI(`${API_DOMAIN}${API_DOMAIN_PREFIX.USER}`)

const validateField = (field, regularExpression) => {
  switch (field) {
    case 'first_name':
      const isValid =false // validate field here
      break;
  
    default:
      break;
  }
}

const toggleLoadingScreen = (show=false) => {
  if (show) 

}


console.log("Lets Learn DOM")



// const h1Tag = document.querySelector('h1')
// const sampleObj = {
//   key:'example',
//   a: 'b'
// }
// let userDetails = {
//   id: null,
//   name: null,
//   age: null,
//   email: null
// }


// api hit here
// userDetails = Object.assign(userDetails,{data from API})
// console.log(sampleObj?.['c'])


// const h1Tag = document.querySelector()
// const h1Tag = document.getElementsByTagName('h1')
// const h1Tag = document.querySelector('.class-name')
// const h1Tag = document.querySelector('#div-id')
// const h1Tag = document.querySelectorAll('.class-name')
// const h1Tag = document.getElementById('div-id')
// // const h1Tag = document.getElementsByClassName('#div-id')


// // h1Tag.innerText="Hello I have changed it from JAVASCRIPT"
// // h1Tag.style.display = 'none'

// const btn = document.getElementById('btn')
// // btn.setAttribute('class','btn btn-primary')
// btn.setAttribute('disabled','disabled')
// btn.removeAttribute('disabled')


// console.log(h1Tag)


// Add element dynamically

const divElement = document.getElementById('div-id')
const buttons = [
  {
    id: 1,
    name: 'Menu 1',
    click : () => {
      console.log(this.id + "button clicked")
    },
    submenus: [
      {
        id: 1,
        name: 'Sub Menu 1',
        click : () => {
          // console.log(this.id + "button clicked")
        }
      },
      {
        id: 2,
        name: 'Sub Menu 2',
        click : () => {
          // console.log(this.id + "button clicked")
        }
      },
      {
        id: 3,
        name: 'Sub Menu 3',
        click : () => {
          // console.log(this.id + "button clicked")
        } 
      }
    ]
  },
  {
    id: 2,
    name: 'Menu 1',
  },
  {
    id: 3,
    name: 'Menu 1',
  },
  {
    id: 4,
    name: 'Menu 1',
  },
  {
    id: 5,
    name: 'Menu 1',
  },
  {
    id: 6,
    name: 'Menu 1',
  },
  {
    id: 7,
    name: 'Menu 1',
  },
  {
    id: 8,
    name: 'Menu 1',
  },
  {
    id: 9,
    name: 'Menu 1',
  },
  {
    id: 10,
    name: 'Menu 1',
  },
]

buttons.forEach (button => {
 const buttonDetails = createButton(button)
  addElement(buttonDetails, divElement)
  // divElement.appendChild(btn)
  // divElement.innerHTML += `<button id=${button.id}>${button.name} ${button.id}</button>`
})


function addElement(parentElement, childElement) {
  parentElement.appendChild(childElement)
}

function createButton(buttonDetails) {
  const btn = createElement('button')
  btn.id = buttonDetails.id
  btn.innerText = buttonDetails.name
  // if (buttonDetails.click) {
  //   btn.addEventListener('click', buttonDetails.click)
  // }
  buttonDetails.click ? btn.addEventListener('click', buttonDetails.click) : null
  return btn
}

function createElement(elementName){
  return document.createElement(elementName)
}
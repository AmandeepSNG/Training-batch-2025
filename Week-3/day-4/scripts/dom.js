class DomDealer {
  constructor(params) {

  }
  getElementById(elementId) {
    return document.getElementById(elementId.toString())
  }
  createElement(elementName){
    return document.createElement(elementName.toString())
  }

  setAttribute(element, attribute) {
    element.setAttribute(attribute)
  }
  appendHTML (element, htmlToAppend){
    element.innerHTML +=htmlToAppend
  }
}
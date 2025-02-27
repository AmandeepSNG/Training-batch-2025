// class Test {
//   initialVariable;
//   constructor(params) {
//     console.log(params)
//     this.initialVariable = params.initialVariable
//   }

//   #exampleVariable = 20; // By default public variable
//   testingVar = 20
//   _test = 39 

//   exampleFuntion =  () => {
//     return this.initialVariable
//   }

//   accessPrivateVarible = () => {
//     return this.#exampleVariable
//   }
// }

// const instance = new Test({initialVariable: "example initial value"})
// console.log("privateVariable =>", instance.exampleFuntion())

// const DOMClassIntance = new DomDealer()
// console.log("Dom clas Intance =>", DOMClassIntance)

class MainDealer extends DomDealer {
  constructor(params) {
    super(params)
  }
  printHeadingDetails() {
    return this.getElementById("heading")
  }
}

const mainDealerIntance = new MainDealer()
console.log("headingelement =>", mainDealerIntance.printHeadingDetails())

class Sum {
  num1
  num2
  constructor(params) {
    this.num1 = params.num1;
    this.num2 = params.num2;
  }

  getSum() {
    return this.num1 + this.num2
  }
  getSum(num1, num2, num3) {
    const pribvateVarile = 49
    return num1 + num2 + num3
  }

  // overLoading
}

class OverRiding extends Sum {
  getSum(number1) {
    return number1 
  }
}
const classInstance = new Sum({num1: 1, num2: 3})
// console.log("sum =>", classInstance.getSum())

const overridingInstance = new OverRiding()
console.log("sum =>", overridingInstance.getSum())

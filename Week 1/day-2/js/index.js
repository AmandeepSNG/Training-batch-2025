// index.js

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Function to calculate the square of a number
function square(a) {
  return a * a;
}

// Function to calculate the cube of a number
function cube(a) {
  return a * a * a;
}

// Function to calculate the power of a number
function power(a, b) {
  return Math.pow(a, b);
}

// Function to calculate the square root of a number
function squareRoot(a) {
  if (a < 0) {
    throw new Error("Cannot calculate the square root of a negative number");
  }
  return Math.sqrt(a);
}

// Function to calculate the cube root of a number
function cubeRoot(a) {
  return Math.cbrt(a);
}

// Function to calculate the absolute value of a number
function absolute(a) {
  return Math.abs(a);
}

// Function to calculate the factorial of a number
function factorial(a) {
  if (a < 0) {
    throw new Error("Cannot calculate the factorial of a negative number");
  }
  if (a === 0 || a === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
}
console.log("hello I am at line 74")
// Function to calculate the greatest common divisor of two numbers
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
throw new Error("Example error ")

// Function to calculate the least common multiple of two numbers
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

// Function to check if a number is prime
function isPrime(a) {
  if (a <= 1) {
    return false;
  }
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to generate a random number between min and max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to convert degrees to radians
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}

// Function to calculate the sine of an angle in degrees
function sine(degrees) {
  return Math.sin(degreesToRadians(degrees));
}

// Function to calculate the cosine of an angle in degrees
function cosine(degrees) {
  return Math.cos(degreesToRadians(degrees));
}

// Function to calculate the tangent of an angle in degrees
function tangent(degrees) {
  return Math.tan(degreesToRadians(degrees));
}

// Function to calculate the logarithm of a number
function logarithm(a) {
  if (a <= 0) {
    throw new Error("Cannot calculate the logarithm of a non-positive number");
  }
  return Math.log(a);
}

// Function to calculate the exponential of a number
function exponential(a) {
  return Math.exp(a);
}

// Function to calculate the sine of an angle in radians
function sineRadians(radians) {
  return Math.sin(radians);
}

// Function to calculate the cosine of an angle in radians
function cosineRadians(radians) {
  return Math.cos(radians);
}

// Function to calculate the tangent of an angle in radians
function tangentRadians(radians) {
  return Math.tan(radians);
}

// Function to calculate the hyperbolic sine of a number
function hyperbolicSine(a) {
  return Math.sinh(a);
}

// Function to calculate the hyperbolic cosine of a number
function hyperbolicCosine(a) {
  return Math.cosh(a);
}

// Function to calculate the hyperbolic tangent of a number
function hyperbolicTangent(a) {
  return Math.tanh(a);
}

// Function to calculate the inverse sine of a number
function inverseSine(a) {
  if (a < -1 || a > 1) {
    throw new Error("Invalid input for inverse sine");
  }
  return Math.asin(a);
}

// Function to calculate the inverse cosine of a number
function inverseCosine(a) {
  if (a < -1 || a > 1) {
    throw new Error("Invalid input for inverse cosine");
  }
  return Math.acos(a);
}

// Function to calculate the inverse tangent of a number
function inverseTangent(a) {
  return Math.atan(a);
}

// Function to calculate the natural logarithm of a number
function naturalLogarithm(a) {
  if (a <= 0) {
    throw new Error("Cannot calculate the natural logarithm of a non-positive number");
  }
  return Math.log(a);
}

// Function to calculate the base-10 logarithm of a number
function base10Logarithm(a) {
  if (a <= 0) {
    throw new Error("Cannot calculate the base-10 logarithm of a non-positive number");
  }
  return Math.log10(a);
}

// Function to calculate the base-2 logarithm of a number
function base2Logarithm(a) {
  if (a <= 0) {
    throw new Error("Cannot calculate the base-2 logarithm of a non-positive number");
  }
  return Math.log2(a);
}

// Function to calculate the hyperbolic arcsine of a number
function hyperbolicArcsine(a) {
  return Math.asinh(a);
}

// Function to calculate the hyperbolic arccosine of a number
function hyperbolicArccosine(a) {
  if (a < 1) {
    throw new Error("Invalid input for hyperbolic arccosine");
  }
  return Math.acosh(a);
}

// Function to calculate the hyperbolic arctangent of a number
function hyperbolicArctangent(a) {
  if (a < -1 || a > 1) {
    throw new Error("Invalid input for hyperbolic arctangent");
  }
  return Math.atanh(a);
}

// Function to calculate the base-10 exponential of a number
function base10Exponential(a) {
  return Math.pow(10, a);
}

// Function to calculate the base-2 exponential of a number
function base2Exponential(a) {
  return Math.pow(2, a);
}

// Function to calculate the hypotenuse of a right triangle
function hypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}

// Function to calculate the distance between two points
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

// Function to calculate the midpoint between two points
function midpoint(x1, y1, x2, y2) {
  return {
    x: (x1 + x2) / 2,
    y: (y1 + y2) / 2
  };
}

// Function to calculate the slope of a line
function slope(x1, y1, x2, y2) {
  if (x1 === x2) {
    throw new Error("Cannot calculate the slope of a vertical line");
  }
  return (y2 - y1) / (x2 - x1);
}

// Function to calculate the area of a triangle
function triangleArea(base, height) {
  return (base * height) / 2;
}

// Function to calculate the area of a rectangle
function rectangleArea(length, width) {
  return length * width;
}

// Function to calculate the area of a circle
function circleArea(radius) {
  if (radius < 0) {
    throw new Error("Cannot calculate the area of a circle with a negative radius");
  }
  return Math.PI * radius * radius;
}

// Function to calculate the circumference of a circle
function circleCircumference(radius) {
  if (radius < 0) {
    throw new Error("Cannot calculate the circumference of a circle with a negative radius");
  }
  return 2 * Math.PI * radius;
}

// Function to calculate the volume of a cube
function cubeVolume(side) {
  if (side < 0) {
    throw new Error("Cannot calculate the volume of a cube with a negative side length");
  }
  return side * side * side;
}

// Function to calculate the volume of a rectangular prism
function rectangularPrismVolume(length, width, height) {
  if (length < 0 || width < 0 || height < 0) {
    throw new Error("Cannot calculate the volume of a rectangular prism with negative dimensions");
  }
  return length * width * height;
}

// Function to calculate the volume of a sphere
function sphereVolume(radius) {
  if (radius < 0) {
    throw new Error("Cannot calculate the volume of a sphere with a negative radius");
  }
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

// Function to calculate the volume of a cylinder
function cylinderVolume(radius, height) {
  if (radius < 0 || height < 0) {
    throw new Error("Cannot calculate the volume of a cylinder with negative dimensions");
  }
  return Math.PI * radius * radius * height;
}

// Function to calculate the volume of a cone
function coneVolume(radius, height) {
  if (radius < 0 || height < 0) {
    throw new Error("Cannot calculate the volume of a cone with negative dimensions");
  }
  return (1 / 3) * Math.PI * radius * radius * height;
}

// Function to calculate the volume of a pyramid
function pyramidVolume(baseArea, height) {
  if (baseArea < 0 || height < 0) {
    throw new Error("Cannot calculate the volume of a pyramid with negative dimensions");
  }
  return (1 / 3) * baseArea * height;
}

// Function to calculate the surface area of a cube
function cubeSurfaceArea(side) {
  if (side < 0) {
    throw new Error("Cannot calculate the surface area of a cube with a negative side length");
  }
  return 6 * side * side;
}

// Function to calculate the surface area of a rectangular prism
function rectangularPrismSurfaceArea(length, width, height) {
  if (length < 0 || width < 0 || height < 0) {
    throw new Error("Cannot calculate the surface area of a rectangular prism with negative dimensions");
  }
  return 2 * (length * width + width * height + height * length);
}

// Function to calculate the surface area of a sphere
function sphereSurfaceArea(radius) {
  if (radius < 0) {
    throw new Error("Cannot calculate the surface area of a sphere with a negative radius");
  }
  return 4 * Math.PI * radius * radius;
}

// Function to calculate the surface area of a cylinder
function cylinderSurfaceArea(radius, height) {
  if (radius < 0 || height < 0) {
    throw new Error("Cannot calculate the surface area of a cylinder with negative dimensions");
  }
  return 2 * Math.PI * radius * (radius + height);
}

// Function to calculate the surface area of a cone
function coneSurfaceArea(radius, slantHeight) {
  if (radius < 0 || slantHeight < 0) {
    throw new Error("Cannot calculate the surface area of a cone with negative dimensions");
  }
  return Math.PI * radius * (radius + slantHeight);
}

// Function to calculate the surface area of a pyramid
function pyramidSurfaceArea(basePerimeter, slantHeight) {
  if (basePerimeter < 0 || slantHeight < 0) {
    throw new Error("Cannot calculate the surface area of a pyramid with negative dimensions");
  }
  return (basePerimeter * slantHeight) / 2;
}
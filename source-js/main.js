// sum
function sum (a, b) {
  var result = a + b
  console.log(result)
  return result
}

// subtract
function subtraction (a, b) {
  var result = a - b
  console.log(result)
  return result
}

//multiplication
function multiplication (a, b) {
  var result = a * b
  console.log(result)
  return result
}

//division
function division (a, b) {
  var result = (b === 0) ? 'Error' : a / b
  console.log(result)
  return result
}

//pow
function pow (number, degree) {
  var result = number
  if (degree >= 1) {
    for (var i = 1; i < degree; i++) {
      result *= number
    }
    console.log(result)
    return result
  } else {
    console.log(1)
    return 1
  }
}

pow(3, 2)

//sqrt
function sqrt (number) {
  var result = Math.sqrt(number)
  console.log(result)
  return result
}

//cos
function cos (number) {
  var result = Math.cos(number)
  console.log(result)
  return result
}

//sin
function sin (number) {
  var result = Math.sin(number)
  console.log(result)
  return result
}

//factorial
function factorial (number) {
  //!5 = 5*4*3*2*1
  var result = number
  if (number >= 1) {
    for (var i = number; i > 1; i--) {
      result *= i - 1
    }
  } else if (number === 0) {
    result = 1
  }
  else {
    result = 'number must be positive'
  }
  console.log(result)
  return result
}




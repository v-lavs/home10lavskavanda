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

division(4, 2)

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

//sqrt
function sqrt (x) {
  var result = Math.sqrt(x)
  console.log(result)
  return result
}

sqrt(16)

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




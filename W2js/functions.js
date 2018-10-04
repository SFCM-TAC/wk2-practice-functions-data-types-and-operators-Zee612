
function sayHello(name) {
  // TODO: return a greeting string that greets
  // the person by name, e.g. "Hello, Emily!"

return "Hello," + name；

}

function sayHelloEverybody(threeNames) {
  // TODO: return a greeting string that greets
  // all three people in the threeNames array
  // e.g. "Hello, Emily, MaryClare, and Taurin!"
  // NOTE: inputs should be an array with exactly three items

  return "Hello," + threeNames[0]；+ threeNames[1]；+ threeNames[2]；
}

function getClasses() {
  // TODO: return an array with a list of strings
  // naming the classes you are taking this semester
  return ['Sound design',' Composition Workshop',' Intro to Computer Sience',' History']
}

function labelOrder(list) {
  // TODO: Given an array with five numbers, return a new array
  // of strings that have labels for the ordering.
  // e.g. if fiveNumbers is [1,2,3,4,5] your function should return:
  // ["first: 1", "second: 2", "third: 3", "fourth: 4", "fifth: 5"]
  // NOTE: inputs should be an array with exactly five items

  return ["first:" + list[0],"second:" + list[1],"third:" + list[2], "fourth:"+list[3],"fifth:"+list[4]]
//new answer
var = resultArray = Array(5)
resultArray[0]= "first: " + list[0]
return resultArray
}

function calculateVolume(w, l, h) {
  // TODO: given a room's width, length, and height
  // write a function that returns the volume

  return w * l * h
}

function isOdd(n) {
  // TODO: given a number, return true if it is odd, false if it is even
  // HINT: the expression "Boolean(0)" is false, "Boolean(1)"" is true
  // DOUBLE HINT: Try using the modulus operator (%)


  return Boolean(n%2)
}

// ** CART PRICES ** //

const saleAmount = .25 // 25% off!
function getSalePrice(originalPrice) {
  // TODO: given a dollar price (e.g. 5.99), return
  // a price with the saleAmount discount applied
  // e.g. if originalPrice is 4.00, your function should return 3.00.
  // (Don't worry about rounding to the correct number of decimal places)

  return originalPrice * (1 - saleAmount)
}

function getSalePrices(cart) {
  // TODO: given an array of prices for three items in a cart,
  // return a new array with the saleAmount discount applied to each.
  // TIP: see if you can reuse the getSalePrice function that you just wrote!
  // NOTE: inputs should be an array with exactly three items
  return [(1 - saleAmount)* cart[0],(1 - saleAmount)*cart[1],(1 - saleAmount)*cart[2]]
// new answer
  var newPrice = new Array（3）
  newprice = getSalePrices（new Array（3））
}

 // ** COUNTING ** //

var counter = 0;
function incrementCounter() {
  // TODO: implement a function that increments (adds 1) to the counter variable
  // and then calls showCounter to update the interface with the new value.
  // Test your code by opening the developer console and calling incrementCounter.
  // The displayed answer for this question should increase by 1!
counter += 1;
showCounter();
}


function showCounter() {
  // updates the counter element with the latest value

  document.getElementById('counter').textContent = counter;
}

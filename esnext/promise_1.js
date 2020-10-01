// const firstElement = array => array[0];
const firstElement = arrayOrString => arrayOrString[0];
// const firstLetter = string => string[0];
const lowerCase = letter => letter.toLowerCase();

new Promise(function (resolve) {
  // resolve(3)
  // resolve({ //I can use object, to do a promise with more than one value
  //   x: 3,
  //   y: 4
  // })
  resolve(["Ana", "Carlos", "José"]); // Also i can use array...
})
  .then(firstElement)
  .then(firstElement)
  .then(lowerCase)
  .then(console.log);
// .then(value => console.log(value))
// console.log(value.x)
// console.log(value[0])

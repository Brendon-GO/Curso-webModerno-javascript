// The famous callback hell
// setTimeout(function () {
//   console.log('Executando callback...');
  
//   setTimeout(function () {
//     console.log('Executando callback...');
    
//     setTimeout(function () {
//       console.log('Executando callback...');
      
//     }, 2000)
//   }, 2000)
// }, 2000)

function waitFor(time = 2000) {
  return new Promise(function(resolve) {
    setTimeout(function () {
      console.log('Executando promise...')
      resolve()
    }, time)
  })
}

waitFor()
  .then(() => waitFor())
  .then(waitFor())

// for (let i = 0; i <= 10; i++) {
//  waitFor().then(i)
// }  // Example with the structure for
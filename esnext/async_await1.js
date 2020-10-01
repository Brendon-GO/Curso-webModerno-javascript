function waitFor(time = 2000) {
  return new Promise(function(resolve) {
    setTimeout(() => resolve(), time)
  })
}

waitFor(2000)
  // .then(() => console.log('Executando promise 1...'))
  // .then(waitFor)
  // .then(() => console.log('Executando promise 2...'))
  // .then(waitFor)
  // .then(() => console.log('Executando promise 3...'))

function returnValue() {
    return new Promise(resolve => {
      setTimeout(() => resolve(10), 5000)
    })
}

async function returnFastValue() {
  return 20
}

  async function execute() {
    let value = await returnFastValue()

    await waitFor(1500)
    console.log(`Async/Await ${value}...`)
    await waitFor(1500)
    console.log(`Async/Await ${value + 1}...`)
    await waitFor(1500)
    console.log(`Async/Await ${value + 2}...`)
  
    return value + 3
  }

async function executeOfTrue() {
  const value = await execute()
  console.log(value)
}

  executeOfTrue()
function generateNumbersBetween(min, max, prohibitedNumbers) {
  if(min > max) [max, min] = [min, max]
  return new Promise((resolve, reject) => {
    const factor = max - min + 1
    const random = parseInt(Math.random() * factor) + min
    if(prohibitedNumbers.includes(random)) {
      reject('Repeated numbers!')
    } else {
      resolve(random)
    }
    resolve(random)
  })
}

async function generateMegaSena(qttyNumbers, tries = 1){
  try{
    const numbers = []
    for(let _ of Array(qttyNumbers).fill()){
      numbers.push(await generateNumbersBetween(1, 60, numbers))
    }
    return numbers
  } catch(e) {
    if( tries > 10) {
      throw "Did not work!"
    } else {
      return generateMegaSena(qttyNumbers, tries + 1)
    }
  }
}


generateMegaSena(15)
  .then(console.log)
  .catch(console.log)
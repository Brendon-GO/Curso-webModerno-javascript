Array.prototype.map2 = function(callback){  // This is a implementation of my own Map
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))  
    }
    return newArray
}

const cart = [
    '{ "name": "Eraser",        "price": 3.45  }',
    '{ "name": "Notebook",      "price": 13.90 }',
    '{ "name": "Kit of pencil", "price": 41.22 }',
    '{ "name": "Pen",           "price": 7.50  }'
]

// Return a array with just the prices

const toObject  = json => JSON.parse(json)
const justPrice = product => product.price

const result = cart.map2(toObject).map2(justPrice)
console.log(result)
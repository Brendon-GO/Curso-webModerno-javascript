Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const products = [
    { name: 'Notebook',    price: 2499,  fragile: true},
    { name: 'iPad Pro',    price: 4199,  fragile: true},
    { name: 'Glass cup',   price: 12.49, fragile: true},
    { name: 'Plastic cup', price: 18.99, fragile: true},
]

const expensive = product => product.price >= 500
const fragile   = product => product.fragile

console.log(products.filter2(expensive).filter2(fragile))
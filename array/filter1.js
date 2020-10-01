const products = [
    { name: 'Notebook',    price: 2499,  fragile: true},
    { name: 'iPad Pro',    price: 4199,  fragile: true},
    { name: 'Glass cup',   price: 12.49, fragile: true},
    { name: 'Plastic cup', price: 18.99, fragile: true},
]

console.log(products.filter(function(p){
   // return p.price > 2500
   // return p.price > 2400
   // return p.price > 10
   // return false
   return true
}))

const expensive = product => product.price >= 500
const fragile   = product => product.fragile

console.log(products.filter(expensive).filter(fragile))
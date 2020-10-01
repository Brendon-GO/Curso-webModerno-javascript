// console.log(global)
global.myApp = Object.freeze( {
    greeting() {
        return 'I am in all places!'
    },
    name: 'Nice system'
})
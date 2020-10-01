// Tagged templates - Processes the template inside in a function
function tag(parts, ...values) {
    console.log(parts)
    console.log(values)
    return 'Another string'
}

const student = 'Gui'
const situation = 'approved'
console.log(tag `${student} is ${situation}.`)
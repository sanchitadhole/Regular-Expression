///^javascript.d$/gim
//^ multi-line string only
// $ multi-line ends with only
// [abc][a-z][A-Z][0-9]

// prog1
// let regres = /pune/
// let names = ['sanchu-pune', 'pillu-sanganer', 'panu-loni']

// console.log(regres.test(names[0]))
// console.log(regres.test(names[1]))

// let regres1 = /^s/
// let a = names.filter(function(el, index, arr) {
//     return regres1.test(el)
// })
// console.log(a)

// let names = ['sanchu', 'pillu', 'panu', 'anu', 'ladu']
// let regres2 = /^....$/
// cc = names.filter(function(el) {
//     return regres2.test(el)
// })
// console.log(cc)

// let names = ['asanchu', 'aillu', 'panu', 'anu', 'mrladu']
// let regres3 = /^[a][si]/
// let vv = names.filter(function(el) {
//     return regres3.test(el)

// })
// console.log(vv)


// let num = [9925786525, 995454584545, 656484521, 995545452123565, 9958746358]
// let bb = /^[9][9].{8}$/
// let cc = num.filter(function(el) {
//     return bb.test(el)
// })
// console.log(cc)


// let num = [9925786525, 99544584545, 656484521, 995545452123565, 9958746358]
// let aa = /^[0-9]/

// let bb = num.filter(function(el) {
//     return aa.test(el)
// })
// console.log(bb)

// let num = [9925786525, 995454584545, 656484521, 995545452123565, 9958746358]
// let aa = /^[\d][\d].{8}$/

// let bb = num.filter(function(el) {
//     return aa.test(el)
// })
// console.log(bb)



// let num = [9925786525, 995454584545, 656484521, 995545452123565, 9958746358]
// let aa = /^[\D][\D].{8}$/

// let bb = num.filter(function(el) {
//     return aa.test(el)
// })
// console.log(bb)


// let num = [9925786525, 995454584545, 656484521, 995545452123565, 9958746358]
// let aa = /^[^0-9][^0-9].{8}$/

// let bb = num.filter(function(el) {
//     return aa.test(el)
// })
// console.log(bb)

// let num = ['asanchu', 'aillu', 'panu', 'anu', 'mrladu']
// let aa = /^[a-zA-Z0-9_][mr]/

// let bb = num.filter(function(el) {
//     return aa.test(el)
// })
// console.log(bb)


// let num = ['asanchu', 'aillu', 'panu', 'anu', 'mrladu']
// let aa = /^[a-zA-Z0-9_][mr]/

// let bb = num.filter(function(el) {
//     return aa.test(el)
// })
// console.log(bb)




// let num = ['asanchu', 'aillu', 'panu', 'anu', 'mrladu']
// let aa = /^[\w][mr]/

// let bb = num.filter(function(el) {
//     return aa.test(el)
// })
// console.log(bb)

// let namesStudents = ["amol", "Archit", "amit", "amey", "abhisha", 'arman']
// let ba = /^[\W][mr]/
// let fchar = namesStudents.filter(function(el) {
//     return ba.test(el)
// })
// console.log(fchar)


// let namesStudents = ["amol", "Archit", "amit", "amey", "abhisha", 'arman']
// let ba = /^[a-zA-Z0-9_][mr]/
// let fchar = namesStudents.filter(function(el) {
//     return ba.test(el)
// })
// console.log(fchar)

// //same as this [a-zA-Z0-9_]

// let namesStudents = ["amol", "Archit", "amit", "amey", "abhisha", 'arman']
// let ba = /^[\w][mr]/
// let fchar = namesStudents.filter(function(el) {
//     return ba.test(el)
// })
// console.log(fchar)
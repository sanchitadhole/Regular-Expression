let k = 'I am learning javascriptjavascriptjavascript'
console.log(typeof k)

let regOne = /Javascript/gi
let a = regOne.exec(k)
console.log(a)

let b = regOne.exec(k)
console.log(b)

let c = regOne.exec(k)
console.log(c)

let d = regOne.exec(k)
console.log(d)            //null


// test()                   //return true or false

if(regOne.test(k)){
    console.log('pass')
}else{
    console.log('fail')
}


// String

let h = 'I am am am new to javascript I am good with logic'
let regTwo = /am/gi

let e = h.search(regTwo)
console.log(e)

let f = h.match(regTwo)
console.log(f.length)

let n = h.replace(regTwo,'pm')
console.log(n)


// Metacharacter

let kat = 'apple a day keeps doctor away'
regOne = /^Apple/gi
regTwo = /ay$/gi

if(regOne.test(kat)){
    console.log('pass')
}else{
    console.log('fail')
}


if(regTwo.test(kat)){
    console.log('pass')
}else{
    console.log('fail')
}

let fruits = 'banana'
let regFour = /na/gi
if(regFour.test(fruits)){
    console.log('pass')
}else{
    console.log('fail')
}


let vegetables = 'Tomato'
let regFive = /to*/          ///zero or any number of character
if(regFive.test(vegetables)){
    console.log('pass')
}else{
    console.log('fail')
}

let vegetables1 = 'apple'
let regSix = /ap?p?le/
if(regSix.test(vegetables1)){
    console.log('pass')
}else{
    console.log('fail')
}


// Groups


let jj = 'mabt'
let regSeven = /m[ab][ab]t/
console.log(regSeven.test(jj))

let na = 'mr5t'
let regEight = /m[a-z][0-9]t/
console.log(regEight.test(na))

let nat = 'mrbt'
let regNine = /m[a-z][0-9abc]t/
console.log(regNine.test(nat))


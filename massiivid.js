const numbers1 = [43, 74, 97, 23, 67, 46, 69]
const numbers2 = new Array(22, 34,34, 56,74, 73,12,4)

let val

val = numbers1.length
val = numbers1[3]
val = numbers1.indexOf(97)
val = Array.isArray(numbers1)

numbers1.push("250")
numbers1.unshift(120)
numbers1.shift()
numbers1.pop()

val = numbers1.concat(numbers2)

const fruits = ["banana", "apple", "orange"]
val = fruits.sort()

val = numbers2.sort(function (x,y){return y - x})



console.log(numbers1)
console.log(numbers2)
console.log(val)

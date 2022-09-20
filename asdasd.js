let val

//number -> String
console.log(9999)
val = String(9999)
val = String(4+4)
val = String(5,8)

//boolean -> String
val = String(true)
val = String(false)

//Object -> String
val = String(new Date())

// Null -> String
val = String(null)

// Array -> String
val = String([1,2,3,4,5])

//undefined -> String
val = String(undefined)

//String -> Number
val = Number("5")

//String -> Boolean
val = Boolean("True")
val = Boolean("False")

//Null -> Number
val = Number(null)

//String -> Number
val = Number("five")

//Array -> Number
val = Number([1,2,3,4])

//tostring()
val = (true).toString()

//String -> Integer
val = parseInt("100.3")

//String -> Float
val = parseFloat("100.3")

console.log(val)
console.log(typeof val)

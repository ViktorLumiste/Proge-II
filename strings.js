const firstname = "Viktor"
const surename = "Lumiste"

let val = firstname + " " + surename

val = "viktor"
val += " lumiste"

val = firstname.toUpperCase()
val = firstname.toLowerCase()

val = surename[0]
val = surename.indexOf("t")
val = surename.lastIndexOf("t")

val = surename.charAt(4)
val = surename.charAt(surename.length - 1 )

val = surename.substring(0, 4)
val = surename.slice(-4)

const tags = "25, HTML, CSS"
cal = tags.split(",")

console.log(val[1].trim())
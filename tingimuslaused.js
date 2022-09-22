/*
 if(condition) {
      //if statements
 } else {
     //else statements
}


== equal -> ===
!= not equal -> !==


 */

let personID ;

if(typeof personID == "undefined"){
    console.log("id is not correct")
} else {
    console.log(`id is $personID`)
}
//const color = "yellow"
//
// if(color === "red") {
//     console.log(`Stop`)
// } else if(color === "yellow") {
//     console.log(`Attention`)
// } else if(color === "green") {
//     console.log("Go")
// } else {
//     console.log(`Error!`)
// }

const name = "Kadi"
const age = 40
if(age > 0 && age <= 12){
    console.log(`$(name) on laps`)
} else if(age > 12 && age <= 18){
    console.log(`$(name) on nooruk`)
} else{
    console.log(`$(name) on taiskasvanu`)
}

let id = 5
if(id == 100){
    console.log("ok")
} else {
     console.log("Not")
}

console.log(id === 100 ? "ok": "not")

const color = "blue"
switch (color) {
    case "red":
        console.log("Stop")
        break;
    case "yellow":
        console.log("Attention")
        break;
    case "red":
        console.log("Go")
        break;
    default:
        console.log("Error!")
}
console.log(personID)

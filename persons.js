const person = {
    firstname: "Kadi",
    lastname : "Tamm",
    age: 40,
    email: "kadi.tamm@gmail.com",
    hobbies:["Tennis", "Korvpall"],
    address:{
        city: "võru",
        county:"võrumaa"
    },
    getBirthYear:function (){
        return 1982 - this.age
    }
}

let val
val = person
val = person.firstname
val = person["surename"]
val = person["hobbies"]
val = person.address.city
val = person.address.county
val = person.getBirthYear()
console.log(val)

for(let i = 0; i < person.hobbies.length; i++){
    console.log(person.hobbies[i])
}
person.hobbies.forEach((hobbie, index)  => {
    console.log(hobbie + " on element indexiga " + index)
})
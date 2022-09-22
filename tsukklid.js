console.log('For loop')
for (let number = 0; number < 10; number++) {
    if(number ==5) {
        //break
        continue
    }
    console.log(number)
}
console.log("while")
let number1 = 0;
while (number1 < 10){
    console.log(number1)
     number1++
}
console.log("DoWhile")
let number2 = 0;
do{
    console.log(number1)
    number2++
}while(number2 < 10)

const cars = ["audi", "Tesla", "BMW"]
cars.forEach((car) => {
    console.log(car)
})

const person = {
    firstname: "Kadi",
    surename: "Tamm",
    age :40
}

for (let personkey in person) {
    console.log(person.personkey)
}



const firstname= "Viktor"
const surename = "lumiste"
const email = "viktor.lumiste@voco.ee"
const department = "ITA"

let result = "<ul>" +
    "<li><b>Name:</b>"+ firstname+"</li>" +
    "<li><b>Surename: </b>"+surename+"</li>" +
    "<li><b>Email: </b>"+email+"</li>" +
    "<li><b>Department: </b>"+department+"</li>" +
    "</ul>"

result = `
    <ul>
        <li><b>Name:</b> ${firstname}</li>
        <li><b>Surename:</b> ${surename}</li>
        <li><b>Email:</b> ${email}</li>
        <li><b>Department:</b> ${department}</li>
    </ul>`

console.log(result)
document.body.innerHTML = result

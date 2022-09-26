// function greeting(name){
//     //console.log(´Hello, $name´)
//     return `Hello, $(name)`
//
// }
//
// //greeting("anna")
// //let greet = greeting("Anna")
// //console.log(greet)
//
// const square = function(number){
//     return number * number
// }
//
//
// //let result = square(3)
// //console.log(result)

(function(){
    console.log('Function is running')
})();

(function(name){
    console.log(`Hello, $(name)`)
})("viktor")

const todo = {
    add:function (){
        console.log('add todo...')
    },
    edit:function(){
        console.log('edit todo...')
    },
    delete:function (){
        console.log('delete todo')
    },

}
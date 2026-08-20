// TODO work 1
// const func1 = text => {
//     let one = text.charAt().toUpperCase()
//     let two = text.slice(1, -1).toLowerCase()
//     return one + two
// }
// console.log(func1("heLLO WorlD!"))

// TODO work 2

// let text = " Hello World! "
// console.log(text.trim());

// TODO work 3

// let text1 = "JavaScript"
// let text2 = "javascript"
// console.log(text1.toLowerCase() == text2.toLowerCase());

//TODO work 4

// let text = "ab"
// let num = 3
// console.log(text.repeat(num));


//TODO work 5

// let text = "Hello. World."
// console.log(text.split(".").join("!"))

//TODO work 6

// let text = "Hello"

// if(text.length >= 4) {
//     let one = text.slice(0, 2)
//     let two = text.slice(-2)
//     text = one + two
// }else {
//     text = ""
// }
// console.log(text);

//TODO work 7

// let text = "level"

// let text2 = text.split("").reverse().join("")

// console.log(text == text2);

//TODO work 8 

// let email = "user@gmail.com"
// let email2 = email.split("@")
// console.log(email2[1])

//TODO work 9

// let str = "привет"
// str = str.split("а").join("*")
// str = str.split("е").join("*")
// str = str.split("ё").join("*")
// str = str.split("и").join("*")
// str = str.split("о").join("*")
// str = str.split("у").join("*")
// str = str.split("ы").join("*")
// str = str.split("э").join("*")
// str = str.split("ю").join("*")
// str = str.split("я").join("*")

// console.log(str);

// TODO work 10

// let name = "Иван Петров"
// let result = name.split(" ").map(e => e.at(0)).join(".")
// console.log(result + ".");



let day = document.querySelector(".day")
let month = document.querySelector(".month")
let year = document.querySelector(".year")
let hour = document.querySelector(".hour")
let minut = document.querySelector(".minut")
let secunt = document.querySelector(".secunt")


// day.textContent
const timeFuck = () =>{
    return setInterval(()=>{
        let date = new Date()
        day.textContent = `${date.getDate()}.`
        month.textContent = `${date.getMonth()+1}.`
        year.textContent = `${date.getFullYear()}`
        hour.textContent = `${date.getHours()}:`
        minut.textContent = `${date.getMinutes()}:`
        secunt.textContent = `${date.getSeconds()}`
    }, 1000)
}
timeFuck()
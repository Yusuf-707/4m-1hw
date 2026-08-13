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
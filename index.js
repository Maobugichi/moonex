const sideNav = document.querySelector(".nav-side");
const cancel = document.querySelector(".cancel");
const menu = document.querySelector(".menu")
const cell = document.querySelectorAll(".cell")
const grow = document.querySelectorAll(".grow")

menu.addEventListener("click", () => {
    sideNav.classList.remove("animate-fade2")
    sideNav.classList.add("animate-fade")
})

cancel.addEventListener("click", () => {
   sideNav.classList.remove("translate-x-full")
   sideNav.classList.add("animate-fade2")
    setTimeout(() => {
     sideNav.classList.remove("animate-fade")
     sideNav.classList.add("translate-x-full")
    }, 1000)
})


cell.forEach((item,index) => {
    item.addEventListener("click", () => {
        item.childNodes[1].setAttribute("src","./assests/Chevron_Down_M.svg")
        grow[index].classList.add("animate-grow")
        grow[index].classList.remove("hidden")
        
    })
    
})
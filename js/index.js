const menu = document.querySelector(".menu")
const sidebar = document.querySelector("#sidebar")
const close = document.querySelector(".close")

clear()
menu.addEventListener("click", () => {

        sidebar.classList.toggle("active")
})


close.addEventListener("click", function() {

            clear()
})


function clear() {
    sidebar.classList.remove("active")
}
function menuController() {

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
}


function animationController() {

    console.log(window.location.pathname)

        // check page
        if(window.location.pathname === "/" || window.location.pathname === "/index.html") {

            setTimeout(() => {
                
                const title = document.querySelector("#landing #content h1")
                const slug = document.querySelector(".slug")
                const cta = document.querySelector("#content a")
                const loader = document.querySelector(".loader")

            title.classList.add("active")
            slug.classList.add("active")
            cta.classList.add("active")
            loader.classList.add("active")

            }, 3000)
        }
}


menuController()
animationController()
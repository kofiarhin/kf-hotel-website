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

        // check page
        if(window.location.pathname === "/") {

            setTimeout(() => {
                
                const title = document.querySelector("#landing #content h1")
                const slug = document.querySelector(".slug")
                const cta = document.querySelector("#content a")

                
            title.classList.add("active")
            slug.classList.add("active")
            cta.classList.add("active")

            }, 3000)
        }
}

menuController()
animationController()
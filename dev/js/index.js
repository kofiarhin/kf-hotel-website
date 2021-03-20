const state = {
    visited: false
}

console.log(state)
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
        if(window.location.pathname === "/" || window.location.pathname === "/index.html") {

            setTimeout(() => {
                
                const title = document.querySelector("#landing #content h1")
                const slug = document.querySelector(".slug")
                const cta = document.querySelector("#content a")
                const loader = document.querySelector(".loader")

            title.classList.add("active")
            slug.classList.add("active")
            cta.classList.add("active")

            // remove loader

            sessionStorage.setItem("visited", true)
            loader.classList.add("active")

          

            }, 2000)
        }
}


function renderRooms() {

   
    const container = document.querySelector("#rooms .container")

    data.forEach( (item, index)  => {
        
    
        const fade =  index%2 ? "fade-left" : "fade-right";
         let markup = `
            <div class="room-unit" data-aos="${fade}">
                <div class="cover" style="background-image: url(../img/rooms/room-${item.id}.jpeg)"></div>
                <div class="content">
                    <h2>${item.name}</h2>
                    <p class="price ">From <span>$${item.price}</span> Per Night</p>
                    <a href="room.html?id=${item.id}">View More Details</a>
                </div>

            </div>
    `; 

        container.insertAdjacentHTML("beforeend", markup)
    })
    
}

 function renderRoom() {

    const query = new URLSearchParams(window.location.search);

    const domId = parseInt(query.get("id"))
    const domContent = document.querySelector("#room .container")
    console.log(domContent)

    if(!domId) return location.assign("/")

    const room = data.find( item => item.id === domId);

    

    const { id, name, price, description } = room;

    
    let markup = `
            <div class="cover" style="background-image: url(./img/rooms/room-${id}.jpeg)"></div>

            <div class="content">
                <h1> ${name}</h1>
                <p class="description">${description}</p>
                <h2 class="price">$${price}</h2>
                <a href="book.html?id=${id}">Book Now</a>
            </div>
    `;

    domContent.innerHTML = markup
    
}


// main controller
function mainController() {

    
    animationController()
    menuController()

    // check page
    const page = window.location.pathname;
    
    console.log(page)
    if(page === "/rooms.html" || page === "/") {

        renderRooms()
    }

    else if(page === "/index.html") {
        renderRooms()
    }

    else if(page === "/room.html") {

        renderRoom()
    }

}

window.onload = function() {
    mainController()
}
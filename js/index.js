dokument.addEventListener("DOMContentLaoded", function() {

    // slå dig løs her... 

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

    let heroSection = document.querySelector(".hero");

    hero.forEach((hero) => {

        let topNav = document.createElement("section")
        topNav.setAttribute("class", "top_nav")
        let cube = document.createElement("img")
        let menu = document.createElement("section")
        menu.setAttribute("class", "profile")
        let arrow = document.createElement("img")
        let profileIcon = document.createElement("img")

        let heroImg = document.createElement("img")

    })


}) // DOMContentLoaded slut
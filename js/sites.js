let sites = {
    headline: "Join the community campervan sites managers.",
    text: "Discover all the equibbed areas in Italy. Find the shop with all the services for you and your camper.",
    btnicon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/arrow-icon.png",
    places: [
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/lucciano.png",
            name: "Lucciano",
            city: "Rome"
        },
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/cremonesi.png",
            name: "Cremonesi",
            city: "Florence"
        },
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/beneventi.png",
            name: "Beneventi",
            city: "Venice"
        },
    ]
}

// let sitesSection = document.querySelector(".sites");

// let siteHeadline = document.createElement("h3");
// siteHeadline.classList.add("sites-h")
// siteHeadline.innerHTML = sites.headline
// sitesSection.append(siteHeadline)

// let siteText = document.createElement("p")
// siteText.classList.add("sites-p")
// siteText.innerHTML = sites.text
// sitesSection.append(siteText)

document.querySelector(".sites").innerHTML += `

    <section class="site-aside">
    <h3 class="sites-h">${sites.headline}</h3>
    <p class="sites-p">${sites.text}</p>
    <button class="sites-btn"><img src="${sites.btnicon}">Start</button>
    </section>

`

sites.forEach((site) => {

    document.querySelector(".sites").innerHTML += `
    
    <section class="site-cards">
    // IMG
    </section>
    
    `


})

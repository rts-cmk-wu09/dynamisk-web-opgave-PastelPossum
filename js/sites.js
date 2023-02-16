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


let siteAside = document.querySelector(".sites")

let siteHead = document.createElement("h3")
siteHead.classList.add("side-head")
siteHead.textContent = sites.headline

let siteText = document.createElement("p")
siteText.classList.add("site-text")
siteText.textContent = sites.text

let siteImg = document.createElement("img")
siteImg.src = sites.btnicon

let siteBtn = document.createElement("button")
siteBtn.classList.add("site-btn")
siteBtn.textContent = "Start"

let siteCards = document.createElement("div")
siteCards.classList.add("site-cards")



siteAside.append(siteBtn)
siteBtn.append(siteImg)
siteAside.append(siteHead)
siteAside.append(siteText)
siteAside.append(siteCards)


sites.places.forEach((site) => {

document.querySelector(".site-cards").innerHTML += `

<img src="${site.img}">
<h3 class="site-name">${site.name}</h3>
<p class="site-city">${site.city}</p>
<p class="site-card-link"><a href="#">View the site</a></p>

`

})


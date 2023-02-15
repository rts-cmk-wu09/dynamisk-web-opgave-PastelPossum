let advantages = [
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/compare.png",
        headline: "Convenience and Transparency",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/library_books.png",
        headline: "Digital marketing and editorial support",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Compare-HSV.png",
        headline: "Community of services dedicated to campers",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
]

let adSection = document.querySelector(".advantages");
let adHeadline = document.createElement("h4")
adHeadline.classList.add("ad-headline")
adHeadline.innerHTML = "Our Advantages"
adSection.append(adHeadline)

advantages.forEach((advantage) => {

    document.querySelector(".advantages").innerHTML += `
    
    <section class="ad-cards"> 
    <img src="${advantage.icon}">
    <h4 class="ad-h-card">${advantage.headline}</h4>
    <p class="ad-text">${advantage.text}</p>
    </section>

    `

}) 
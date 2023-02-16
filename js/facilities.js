let facilities = {
    headline: "Making your facility known is our priority",
    options : [
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/list-check.png",
            headline: "Choose the type of stop",
            text: "Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/spellcheck.png",
            headline: "Describe your structure",
            text: "Describe thee property, location and nearby attractions"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Text-Frame-Add.png",
            headline: "Build your showcase",
            text: "Add photos, videos and descriptions Define the price of each type of that make your propety truly"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Calendar-Today.png",
            headline: "Prices and Availability",
            text: "pitch and configure the availablity calendar."
        },
    ]
}

let facSection = document.querySelector(".facilities");

let facHeadline = document.createElement("h3")
facHeadline.classList.add("fac-headline")
facHeadline.textContent = facilities.headline
facSection.append(facHeadline)

let facWrapper = document.createElement("div")
facWrapper.classList.add("fac-wrapper")
facSection.append(facWrapper)

facilities.options.forEach((facility) => {

    document.querySelector(".fac-wrapper").innerHTML += `
    
    <section class="fac-card">
    <img src="${facility.icon}">
    <h3 class="fac-header">${facility.headline}</h3>
    <p class="fac-text">${facility.text}</p>
    <p class="fac-link"><a href="#">Show me more</a></p>
    </section>
    
    `

})
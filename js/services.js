let services = [
    {
        illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/exploring.png",
        headline: "Promoting your territory towards foreign tourists",
        text: "EasyCamper wants to promote the excellence of Italian food and wine, art, culture and the economy.",
        linktext: "Discover the places linked to your area that you can link to your structure"
    },
    {
        illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/tourist_map.png",
        headline: "Additional services designed for the needs of campers",
        text: "Travelling often means that you dont have time to organise excursions along your route. EasyCamper takes care of that!",
        linktext: "Discover the Guided Tours and additional services that you can link to your structure"
    },
    {
        illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/destination.png",
        headline: "Free online showcase with promotion in Italy and abroad",
        text: "Forget about the time and money spent on creating your own website or e-commerce system for bookings.",
        linktext: "Easycamper creates your showcase. Discover the terms and conditions for joining the Network"
    },
]

// let serviesSection = document.querySelector(".services")
services.forEach((service) => {

    document.querySelector(".services").innerHTML += `

<section class="service-cards">
<img src="${service.illustration}">
<h2 class="service-headline">${service.headline}</h2>
<p class="service-text">${service.text}</p>
<p class="service-link"><a href="#">${service.linktext}</a></p>
</section>
`

})

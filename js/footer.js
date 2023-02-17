let footer = {

    upperHead: "Easy Camper",
    bottomText: "When Passion Meets Comfort.",
    links: [

        {
            headline: "Discover the Network",
            linkOne: "Where to shop",
            linkTwo: "Tour Guided",
            linkThree: "Our Tours",
            linkFour: "About Us"
        },

        {
             headline: "Become a Manager",
             linkOne: "Join your Pairing" ,
             linkTwo: "Offer your Service" ,
             linkThree: "Are you a guide?",
             linkFour: " "
        },

        {
            headline: "Assistance",
            linkOne: "Support Center" ,
            linkTwo: "FAQs" ,
            linkThree: "Cancallation Options" ,
            linkFour: "Reliability and Sequrity"
        }
    ],

    copyright: "EazyCamper. All rights reserved.",
    footLinks: ["About", "Site Map", "Terms", "Privacy Policy", "Teams"],
    footLinkOne: "About",
    footLinkTwo: "Site Map",
    footLinkThree: "Terms",
    footlinkFour: "Privacy Policy",
    footLinkFive: "Teams"
}

let body = document.body

let footerSection = document.createElement("section")
footerSection.classList.add("footer")

let footerAside = document.createElement("section")
footerAside.classList.add("footer-aside")

let footerHead = document.createElement("h4")
footerHead.classList.add("footer-headline")
footerHead.textContent = footer.upperHead

let footerText = document.createElement("p")
footerText.classList.add("footer-text")
footerText.textContent = footer.bottomText

let footerCards = document.createElement("section")
footerCards.classList.add("footer-cards-wrapper")

body.append(footerSection)
footerSection.append(footerAside)
footerAside.append(footerHead)
footerAside.append(footerText)
footerSection.append(footerCards)

footer.links.forEach((foot) => {

    document.querySelector(".footer-cards-wrapper").innerHTML += `
    
    <div class="footer-cards">
    <h5 class="footer-c-h">${foot.headline}</h5>
    <ul class="footer-links">
    <li><a href="#">${foot.linkOne}</a></li>
    <li><a href="#">${foot.linkTwo}</a></li>
    <li><a href="#">${foot.linkThree}</a></li>
    <li><a href="#">${foot.linkFour}</a></li>
    </ul>
    </div>

    `
})

let copyWrap = document.createElement("section")
copyWrap.classList.add("copy-wrapper")

let copyright = document.createElement("p")
copyright.classList.add("copyright")
copyright.textContent = footer.copyright

let footNav = document.createElement("ul")
copyWrap.classList.add("foot-nav")

footer.footLinks.forEach((link) => {
    const item = document.createElement("li")
    footNav.append(item)
    const a = document.createElement("a")
    item.append(a)
    a.innerText = link
    a.href = "#"
})

footerSection.append(copyWrap)
copyWrap.append(copyright)
copyWrap.append(footNav)

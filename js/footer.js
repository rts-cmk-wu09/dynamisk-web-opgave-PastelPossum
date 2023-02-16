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
    footLinkOne: "About",
    footLinkTwo: "Site Map",
    footLinkThree: "Terms",
    footlinkFour: "Privacy Policy",
    footLinkFive: "Teams"
}

let body = document.body

let footerSection = document.createElement("section")
footerSection.classList.add(".footer")

let footerAside = document.createElement("section")
footerAside.classList.add("footer-aside")

let footerHead = document.createElement("h4")
footerHead.classList.add("footer-headline")
footerHead.textContent = footer.upperHead

let footerText = document.createElement("p")
footerText.classList.add("footer-text")
footerText.textContent = footer.bottomText

body.append(footerSection)
footerSection.append(footerAside)
footerAside.append(footerHead)
footerAside.append(footerText)

footer.links.forEach((foot) => {

    

})
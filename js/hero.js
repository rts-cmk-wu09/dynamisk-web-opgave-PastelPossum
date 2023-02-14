let hero = {
    image: "https://dazzling-squirrel-77a63d.netlify.app/imgs/hero.png",
    headline: "Find out how we can save your time in Backpacking in Europe",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur.",
    icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Globe.png"
}

let heroSection = document.querySelector(".hero");
let heroImg = document.createElement("img");
heroImg.src = hero.image;
heroSection.append(heroImg)

document.querySelector(".hero").innerHTML += `


`
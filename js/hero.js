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
<section class="navigation">
<i class="fa-light fa-cube"></i>
<div class="menu">
<i class="fa-solid fa-chevron-down fa-lg"></i>
<div class="circle">
<i class="fa-solid fa-user fa-xl"></i>
</div>
</div>
</section>

<section class="box-over">
<h1 class="hero-headline">${hero.headline}</h1>
<p class="hero-text">${hero.copy}</p>
<button class="hero-btn"> <i class="fa-thin fa-globe"></i> Explore </button>
</section>
`
import alertMessage from "./components/alert.js";

const url = "https://strapi-sp2-ow.herokuapp.com/home";

const heroImage = document.querySelector(".hero-image");

async function getHome() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    heroImage.innerHTML = `
<img src="${result.hero_banner.url}" alt="${result.hero_banner_alt_text}">
`;
  } catch (error) {
    console.log(error);
    alertMessage("error", error, ".hero-image");
  }
}

getHome();

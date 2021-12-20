import alertMessage from "./components/alert.js";
import { baseUrl, homeUrl } from "./settings/api.js";

const url = baseUrl + homeUrl;

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

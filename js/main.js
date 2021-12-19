import { mobileNav } from "./components/nav.js";
import renderProducts from "./ui/renderProducts.js";
import alertMessage from "./components/alert.js";

mobileNav();

/* GET PRODUCTS */
const url = "https://strapi-sp2-ow.herokuapp.com/products";

const featured = document.querySelector(".products").getAttribute("featured");

async function getProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    let featuredProducts = [];

    if (featured === "true") {
      for (let i = 0; i < results.length; i++) {
        if (results[i].featured) {
          featuredProducts.push(results[i]);
        } else {
          continue;
        }
      }
      renderProducts(featuredProducts);
    } else {
      renderProducts(results);
    }
  } catch (error) {
    console.log(error);
    //alertMessage("error", error, ".products-grid");
  }
}

getProducts();

import renderProducts from "./ui/renderProducts.js";
import alertMessage from "./components/alert.js";
import { searchFilter } from "./utilities/searchFilter.js";
import { baseUrl, productsUrl } from "./settings/api.js";

/* GET ALL AND FEATURED PRODUCTS */
const url = baseUrl + productsUrl;

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
      searchFilter(results);
    }
  } catch (error) {
    console.log(error);
    alertMessage("error", error, ".products");
  }
}

getProducts();

import renderSingleProduct from "./ui/renderSingleProduct.js";
import alertMessage from "./components/alert.js";
import { baseUrl, productsUrl } from "./settings/api.js";

/* GET SINGLE PRODUCT */
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const slug = urlParams.get("slug");
const url = baseUrl + productsUrl + slug;

const htmlTitle = document.querySelector("title");

async function getProduct() {
  try {
    const response = await fetch(url);
    const product = await response.json();

    renderSingleProduct(product);
    htmlTitle.innerHTML = product.title + " | Music Port";
  } catch (error) {
    console.log(error);
    alertMessage("error", error, ".single-product");
  }
}

getProduct();

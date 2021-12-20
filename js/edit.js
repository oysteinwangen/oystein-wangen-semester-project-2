import alertMessage from "./components/alert.js";
import { getToken } from "./utilities/storage.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
const slug = urlParams.get("slug");
const productUrl = "https://strapi-sp2-ow.herokuapp.com/products" + "/" + slug;

if (!id) {
  document.location.href = "/";
}

const htmlTitle = document.querySelector("title");
const form = document.querySelector(".product-form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const featured = document.querySelector("#featured");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const image = document.querySelector("#image");
const message = document.querySelector(".message-container");
const loader = document.querySelector(".loader");

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    title.value = details.title;
    price.value = details.price;
    featured.checked = details.featured;
    description.value = details.description;
    idInput.value = details.id;
  } catch (error) {
    console.log(error);
  } finally {
    loader.style.display = "none";
    form.style.display = "flex";
  }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const featuredValue = featured.checked;
  const descriptionValue = description.value.trim();
  const idValue = idInput.value;

  if (
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    descriptionValue.length === 0 ||
    isNaN(priceValue)
  ) {
    return alertMessage("error", "Invalid values", ".message-container");
  }

  updateProduct(
    titleValue,
    priceValue,
    descriptionValue,
    idValue,
    featuredValue
  );
}

async function updateProduct(title, price, description, id, featured) {
  const url = "https://strapi-sp2-ow.herokuapp.com/products" + "/" + id;

  const data = JSON.stringify({
    title: title,
    price: price,
    featured: featured,
    description: description,
  });

  const token = getToken();

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);

    if (json.updatedAt) {
      alertMessage(
        "success",
        "Your product has successfully been updated",
        ".message-container"
      );
    }

    if (json.error) {
      alertMessage("error", json.message, ".message-container");
    }
  } catch (error) {
    return alertMessage("error", error, ".message-container");
  }
}

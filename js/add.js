import alertMessage from "./components/alert.js";
import { getToken } from "./utilities/storage.js";

const token = getToken();
if (!token) {
  location.href = "./";
}

const baseUrl = "https://strapi-sp2-ow.herokuapp.com/";

const form = document.querySelector(".product-form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const featured = document.querySelector("#featured");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  message.innerHTML = "";

  const titleValue = title.value.trim();
  const slugValue =
    titleValue.replace(/[^a-zA-Z0-9]/g, "-") +
    "-" +
    Math.floor(Math.random() * 100);
  const priceValue = parseFloat(price.value);
  const imageValue = image.value.trim();
  const featuredValue = featured.checked;
  const descriptionValue = description.value.trim();

  if (
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    descriptionValue.length === 0 ||
    isNaN(priceValue) ||
    imageValue.length === 0
  ) {
    return alertMessage("error", "Invalid values", ".message-container");
  }

  addProduct(
    titleValue,
    slugValue,
    priceValue,
    descriptionValue,
    featuredValue,
    imageValue
  );
}

async function addProduct(
  title,
  slug,
  price,
  description,
  featured,
  image_url
) {
  const url = baseUrl + "products";

  const data = JSON.stringify({
    title: title,
    slug: slug,
    price: price,
    featured: featured,
    description: description,
    image_url: image_url,
  });

  const token = getToken();

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.createdAt) {
      alertMessage(
        "success",
        "Your product has successfully been created",
        ".message-container"
      );
      //form.reset();
    }

    if (json.error) {
      alertMessage("error", json.message, ".message-container");
    }
  } catch (error) {
    return alertMessage("error", error, ".message-container");
  }
}

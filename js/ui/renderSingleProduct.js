import { getExistingCartItems } from "../utilities/cartFunctions.js";
import { getUsername } from "../utilities/storage.js";

const cartItems = getExistingCartItems();
const username = getUsername();

function renderSingleProduct(product) {
  const productWrapper = document.querySelector(".single-product");
  productWrapper.innerHTML = "";

  const cartButtonInCart = `
            <div class="single-product__cart in-cart">
                <i class="fas fa-check fs-300"></i>
                <p class="fs-300 fw-300">Added to cart</p>
            </div>
            `;
  const cartButtonNotInCart = `
            <div class="single-product__cart not-in-cart">
                <i class="fas fa-shopping-cart fs-300"></i>
                <p class="fs-300 fw-300">Add to cart</p>
            </div>
            `;

  let cartButton = cartButtonNotInCart;
  let cartToggle = false;

  const doesObjectExist = cartItems.find(function (cartItem) {
    return cartItem.slug === product.slug;
  });

  if (doesObjectExist) {
    cartToggle = true;
    cartButton = cartButtonInCart;
  }

  let authEdit = "";
  if (username) {
    authEdit = `
    <a href="./edit.html?id=${product.id}&slug=${product.slug}" class="button fs-300 edit-button">
    <p>Edit product</p><i class="fas fa-pencil-alt fs-200"></i>
    </a>
    `;
  }

  productWrapper.innerHTML += `
    <div class="product-row">
            <div class="product-row__left">
              <img
                class="shadow"
                src="${product.image.url}"
                alt="Product image"
              />
            </div>
            <div class="product-row__right">
            ${authEdit}
              <h1>${product.title}</h1>
              <p class="mt-s">Price: $${product.price}</p>
                <div id="cart-button" in-cart="${cartToggle}" data-slug="${product.slug}" data-title="${product.title}" data-image="${product.image.formats.small.url}" data-price="${product.price}">
                    ${cartButton}
                </div>
              <div class="product-description">
                <h2 class="product-description__title">Description</h2>
                <p>
                ${product.description}
                </p>
              </div>
            </div>
          </div>
    `;

  const cartButtonCont = document.querySelectorAll("#cart-button");

  cartButtonCont.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  function handleClick() {
    if (this.getAttribute("in-cart") === "false") {
      this.innerHTML = cartButtonInCart;
      this.setAttribute("in-cart", true);
    } else {
      this.innerHTML = cartButtonNotInCart;
      this.setAttribute("in-cart", false);
    }

    const slug = this.dataset.slug;
    const title = this.dataset.title;
    const image = this.dataset.image;
    const price = this.dataset.price;

    const currentCartItems = getExistingCartItems();

    const productExists = currentCartItems.find(function (cartItem) {
      return cartItem.slug === slug;
    });

    if (productExists === undefined) {
      const product = { slug: slug, title: title, image: image, price: price };
      currentCartItems.push(product);
      saveCartItems(currentCartItems);
    } else {
      const newCartItems = currentCartItems.filter(
        (cartItem) => cartItem.slug !== slug
      );
      saveCartItems(newCartItems);
    }
  }

  function saveCartItems(cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
}

export default renderSingleProduct;

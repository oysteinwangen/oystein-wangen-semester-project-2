import { getExistingCartItems } from "../utilities/cartFunctions.js";
import cartCounter from "../utilities/cartCounter.js";

const cartItems = getExistingCartItems();

function renderProducts(results) {
  const productGrid = document.querySelector(".products");
  productGrid.innerHTML = "";

  if (results.length < 1) {
    productGrid.innerHTML += `
    <div class="product-card">
    <div class="product-card__no-results">
        <p>No products found. Try another search.</p>
    </div>
</div>
    `;
  }

  const cartButtonInCart = `
  <div class="product-card__cart in-cart">
            <i class="fas fa-check fs-300"></i>
            <p class="fs-300 fw-300">Added to cart</p>
      </div>
  `;
  const cartButtonNotInCart = `
    <div class="product-card__cart not-in-cart">
      <i class="fas fa-shopping-cart fs-300"></i>
      <p class="fs-300 fw-300">Add to cart</p>
    </div>
  `;

  results.forEach(function (product) {
    let cartButton = cartButtonNotInCart;
    let cartToggle = false;

    const doesObjectExist = cartItems.find(function (cartItem) {
      return cartItem.slug === product.slug;
    });

    if (doesObjectExist) {
      cartToggle = true;
      cartButton = cartButtonInCart;
    }

    productGrid.innerHTML += `
    <div class="product-card">
        <a href="./product.html?slug=${product.slug}" class="product-card__inner">
              <i class="fas fa-search product-card__read"></i>
              <img
                src="${product.image_url}"
                alt="Product image"
                class="product-card__image"
              />
              <div class="product-card__info">
                <p class="product-card__info-title fs-400 fw-500">
                ${product.title}
                </p>
                <p class="product-card__info-price fs-300">$${product.price}</p>
              </div>
        </a>
        <div id="cart-button" in-cart="${cartToggle}" data-slug="${product.slug}" data-title="${product.title}" data-image="${product.image_url}" data-price="${product.price}">
        ${cartButton}
      </div>
    </div>
    `;
  });

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
    cartCounter();
  }

  function saveCartItems(cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
}

export default renderProducts;

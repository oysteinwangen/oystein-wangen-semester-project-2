import { getExistingCartItems } from "./utilities/cartFunctions.js";
import alertMessage from "./components/alert.js";
import cartCounter from "./utilities/cartCounter.js";

function saveCartItems(cartItems) {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  renderCart();
}

function renderCart() {
  const cartItems = getExistingCartItems();

  const cartList = document.querySelector(".cart-list");
  cartList.innerHTML = "";
  const totalsContainer = document.querySelector(".totals-container");
  let totals = 0;

  if (cartItems.length < 1) {
    alertMessage("normal", "You currently have no items in cart", ".cart-list");
    totalsContainer.innerHTML = "";
  } else {
    cartItems.forEach((product) => {
      cartList.innerHTML += `
              <div class="cart-item">
                      <img src="${product.image}" alt="Product thumbnail" />
                      <div class="cart-item__info">
                        <p class="cart-item__info-title fw-600">
                          ${product.title}
                        </p>
                        <div class="cart-item__info-sub">
                          <p class="cart-item__info-price">$${product.price}</p>
                          <a href="./product.html?slug=${product.slug}" class="cart-item__info-link">
                            <p>View product</p>
                            <i class="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                      <a class="cart-item__remove" data-slug="${product.slug}" id="remove-button">
                        <div class="cart-item__remove-inner">
                          <p>Remove from cart</p>
                          <i class="fas fa-times"></i>
                        </div>
                      </a>
                    </div>
                    
              `;
      totals = totals + parseFloat(product.price);

      totalsContainer.innerHTML = `
      <p class="sub-total container mini-container">Total in cart: $${totals}</p>
      `;
    });
  }

  const removeButton = document.querySelectorAll("#remove-button");

  removeButton.forEach((button) => {
    button.addEventListener("click", removeClick);
  });
  function removeClick() {
    const slug = this.dataset.slug;
    const newCartItems = cartItems.filter((cartItem) => cartItem.slug !== slug);
    saveCartItems(newCartItems);
    cartCounter();
  }
}
renderCart();

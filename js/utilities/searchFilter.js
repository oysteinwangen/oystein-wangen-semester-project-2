import renderProducts from "../ui/renderProducts.js";

const searchBar = document.querySelector("#search-input");

export function searchFilter(products) {
  searchBar.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (product) {
      if (
        product.title.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
      ) {
        return true;
      }
    });

    renderProducts(filteredProducts);
  };
}

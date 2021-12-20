import { getToken } from "./storage.js";

const baseUrl = "https://strapi-sp2-ow.herokuapp.com/";

export default function deleteButton(id) {
  const container = document.querySelector(".delete-container");

  container.innerHTML = `
    <button type="button"
    class="button fs-300 delete-button">
    <p>Delete product</p>
    <i class="fas fa-times fs-200"></i>
  </button>
    `;

  const button = document.querySelector(".delete-button");

  button.onclick = async function () {
    const doDelete = confirm("Are you sure you want to delete this product?");

    if (doDelete) {
      const url = baseUrl + "products/" + id;

      const token = getToken();

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        location.href = "./";
      } catch (error) {
        console.log(error);
      }
    }
  };
}

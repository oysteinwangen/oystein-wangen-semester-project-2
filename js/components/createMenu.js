import { getUsername } from "../utilities/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
  const { pathname } = document.location;

  const username = getUsername();

  let authLink = `<a href="/login.html" class="${
    pathname === "/login.html" ? "admin-active" : "admin-inactive"
  }">Log in</a>`;

  if (username) {
    authLink = `
    <a href="/add.html" class="${
      pathname === "/add.html" ? "admin-active" : "admin-inactive"
    }">Add product</a>
    <a style="cursor: pointer;" class="admin-inactive" id="logout">Log out</a>
    `;
  }

  const container = document.querySelector(".admin-menu");

  container.innerHTML = `
    <div class="menu">
    ${authLink}
    </div>
    `;

  logoutButton();
}

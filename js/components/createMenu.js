import { getUsername } from "../utilities/storage.js";

export default function createMenu() {
  const { pathname } = document.location;

  const username = getUsername();

  let authLink = `<a href="/login.html" class="${
    pathname === "/login.html" ? "admin-active" : "admin-inactive"
  }">Login</a>`;

  if (username) {
    authLink = `<span>Hi, ${username}</span>
    <a href="/add.html" class="${
      pathname === "/add.html" ? "admin-active" : "admin-inactive"
    }">Add</a>`;
  }

  const container = document.querySelector(".admin-menu");

  container.innerHTML = `
    <div class="menu">
    ${authLink}
    </div>
    `;
}

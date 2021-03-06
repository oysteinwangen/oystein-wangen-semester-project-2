<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <img src="./logo/MusicPortLogo.svg" alt="Logo" style="height: 80px; max-width: 100%;">

  <h3 align="center">Music Port // Semester Project 2</h3>

  <p align="center">
    An ecommerce website with product grids, search, detail pages, cart functionality, login and editing capabilities.
    <br />
    <br />
    <a href="https://wangen-sp2.netlify.app/">View live website</a>
    ·
    <a href="https://github.com/oysteinwangen/oystein-wangen-semester-project-2/issues">Report Bug</a>
    ·
    <a href="https://github.com/oysteinwangen/oystein-wangen-semester-project-2/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#description">Description</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a>
      <ul>
        <li><a href="#typography">Typography</a></li>
        <li><a href="#layout">Layout</a></li>
        <li><a href="#colors">Colors</a></li>
        <li><a href="#custom-api">Custom API</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- DESCRIPTION -->
## Description

<img src="./MusicPortScreenshot.png" alt="Screenshot of the homepage" width="800">

Music Port is a website with ecommerce functionalities for selling musical instruments and gear. The framework can be connected to any REST API/Headless CMS, giving you the possibility to use it for any kind of ecommerce business.

**The website has the following features for the end user:**
* Home page with a header image and a products grid containing only featured products
* Products page containing all products
* Details page for single products
* "Add to cart"-buttons on product grids and details pages
* A cart page pulling in all products added to cart from localStorage

**Features for the admin user:**
* Login
* Edit products
* Add products

### Built With
* Vanilla javascript
* [SASS](https://sass-lang.com/)
* HTML

*The **backend** was built using the Strapi Headless CMS, and connected using REST API. [Here's the repo link to that, if you're interested.](https://github.com/oysteinwangen/strapi-sp2-ow)*

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

**Recommendations**
* Use a code editor you are comfortable with. I recommend [Visual Studio Code](https://code.visualstudio.com/).
* I recommend using the "Live Server" VS Code extension by Ritwick Dey, for fast and continuous development with live preview.

**SASS Compilation**

Since this project utilises SASS, you'll need a SASS compiler. I recommend the "Live Sass Compiler" VS Code extension by Ritwick Dey.

The compiled `.css` should go into the `./css`-folder. If your using the aforementioned extension by configuring the `settings.json` for the extension as follows:
```js
  "liveSassCompile.settings.formats": [
  
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "~/../css/"
    }
  ]
```

### Installation

Clone the repo:
   ```sh
   git clone git@github.com:oysteinwangen/oystein-wangen-semester-project-2.git
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE -->
## Usage

The project's UI is based on basic HTML, javascript, custom css properties and utility classes. All functionality and API requests are coded in javascript.

### Typography

All typography is built using custom properties and utility classes in css. The utlity classes er made with responsiveness and consistent UX in mind, and must therefore be utilised.

Example:
```html
<p class="fs-300 fw-300">Musical instruments and equipment</p>
```
`fs` = font size

`fw` = font weight

The class `.page-title` will align to center.

For a full overview of all properties and utlity classes, [look in the .scss file](https://github.com/oysteinwangen/oystein-wangen-semester-project-2/blob/main/scss/main/_typography.scss).

### Layout

Use the `.container` or `.mini-container` class for all content that should fit within the general document flow.

Classes for top margin and shadows are also available. [View the `.scss` file for a full overview](https://github.com/oysteinwangen/oystein-wangen-semester-project-2/blob/main/scss/main/_layout.scss).


<p align="right">(<a href="#top">back to top</a>)</p>

### Colors

All colors used are based on custom properties.

You can easily customize the colors in `./scss/main/_color.scss` to make it fit your own color scheme.

```css
:root {
  --clr-primary-600: #30475e; /* LIGHT PRIMARY */
  --clr-primary-700: #2b3542;
  --clr-primary-800: #222831; /* DARK PRIMARY */
  --clr-primary-900: #161b22;

  --clr-accent-400: #f05454; /* MAIN BRAND COLOR */
  --clr-accent-500: #d34242;

  --clr-bg-200: #f5ede9; /* MAIN LIGHT */
  --clr-bg-300: #e6d9d3;

  --clr-neutral-100: #fff;
  --clr-neutral-200: #f1f1f1;
  --clr-neutral-700: #333;
  --clr-neutral-900: #000;
}
```

### Custom API

To use your own API, go to `./js/settings/api.js` and change the base url. Endpoints and meta keys will have to be changed in individual javascript files if not the same.

```js
export const baseUrl = "https://strapi-sp2-ow.herokuapp.com/";
export const productsUrl = "products/";
export const homeUrl = "home/";
```

<!-- CONTRIBUTING -->
## Contributing

Any contributions you make are **greatly appreciated!**

If you have a suggestion that would make this project better, please fork the repo and open a pull request. You can also simply open an [issue](https://github.com/oysteinwangen/oystein-wangen-semester-project-2/issues) with the tag "suggestion".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/Suggestion`)
3. Commit your Changes (`git commit -m 'Add feature'`)
4. Push to the Branch (`git push origin feature/Suggestion`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Feel free to contact me on email - [hello@wangen.digital](mailto:hello@wangen.digital)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Kevin Powell's HTML and CSS courses](https://courses.kevinpowell.co/)
* [W3 Schools | Toggle Switch](https://www.w3schools.com/howto/howto_css_switch.asp)
* [Tolga Musikk | For product images](https://tolgamusikk.no)

<p align="right">(<a href="#top">back to top</a>)</p>

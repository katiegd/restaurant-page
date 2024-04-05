"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["bundle"],{

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showAbout)
/* harmony export */ });
/* harmony import */ var _assets_chefThor_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/chefThor.jpg */ "./src/assets/chefThor.jpg");

var chefThor = document.createElement("img");
chefThor.setAttribute("id", "chef-thor");
chefThor.setAttribute("alt", "Chef Thor critiquing the proscioutto.");
chefThor.src = _assets_chefThor_jpg__WEBPACK_IMPORTED_MODULE_0__;
var imageContainer = document.createElement("div");
imageContainer.setAttribute("id", "image-container");
var chefThorCaption = document.createElement("div");
chefThorCaption.setAttribute("id", "caption");
chefThorCaption.textContent = "Chef Thor critiquing the prosciutto.";
function showAbout() {
  var mainDiv = document.querySelector("#content");
  var aboutHeader = document.createElement("div");
  var aboutContentMain = document.createElement("div");
  var aboutContent = document.createElement("div");
  var aboutDescription = document.createElement("div");
  aboutDescription.setAttribute("id", "about-description");
  aboutContentMain.setAttribute("id", "about-content-main");
  aboutContent.setAttribute("id", "about-content");
  aboutHeader.setAttribute("id", "about-header");
  imageContainer.appendChild(chefThor);
  imageContainer.appendChild(chefThorCaption);
  var header = document.createElement("h1");
  header.textContent = "about us";
  var text1 = "In 2020, a trendsetting restaurant helmed by acclaimed Chef Thor Katison and talented Sous Chef Charlotte Kilesdotter burst onto the culinary scene, captivating diners with its innovative approach to local ingredients.";
  var text2 = "Situated in a vibrant urban locale, the restaurant quickly became renowned for its commitment to sourcing the freshest seasonal produce, showcasing the region's bounty in captivating and accessible ways. With a focus on sustainability and seasonality, Chef Thor and Sous Chef Charlotte craft a menu that reflects their culinary philosophy, offering dishes that range from inventive small plates to hearty mains, all designed to delight the palate and celebrate the flavors of the local community.";
  var text3 = "Stepping into the restaurant, guests are enveloped in a welcoming ambiance that seamlessly blends modern elegance with rustic charm. From impeccable service to a thoughtfully curated beverage selection, every aspect of the dining experience is meticulously crafted to enhance enjoyment. Whether indulging in a seafood risotto brimming with local catches or savoring a perfectly seared steak paired with seasonal produce, diners are treated to an unforgettable journey of flavors and textures that epitomize culinary excellence.";
  var paragraph1 = document.createElement("p");
  paragraph1.setAttribute("id", "p1");
  paragraph1.textContent = text1;
  var paragraph2 = document.createElement("p");
  paragraph2.setAttribute("id", "p2");
  paragraph2.textContent = text2;
  var paragraph3 = document.createElement("p");
  paragraph3.setAttribute("id", "p3");
  paragraph3.textContent = text3;
  aboutDescription.appendChild(paragraph1);
  aboutDescription.appendChild(paragraph2);
  aboutDescription.appendChild(paragraph3);
  aboutContent.appendChild(imageContainer);
  aboutContent.appendChild(aboutHeader);
  aboutContent.appendChild(aboutDescription);
  aboutHeader.appendChild(header);
  aboutContentMain.appendChild(aboutContent);
  mainDiv.appendChild(aboutContentMain);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _assets_food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/food.jpg */ "./src/assets/food.jpg");

function loadHome() {
  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");
  var img = document.createElement("img");
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p_container = document.createElement("div");
  var description = document.createElement("div");
  var mainDiv = document.querySelector("#content");
  var homeContent = document.createElement("div");
  homeContent.setAttribute("id", "home-content");
  img.setAttribute("id", "image-id");
  p_container.setAttribute("id", "pcontainer");
  description.setAttribute("id", "description");
  h1.textContent = "welcome to juniper.";
  h2.innerHTML = "Join us for an unforgettable dining experience.\n  <a class=\"reserve\" href=\"\">Reserve a table.</a>";
  p1.textContent = "Our James Beard award winning head chef Thor Katison works hard to curate a new seasonal menu every month. We source fresh, local ingredients and combine them in creative ways that are both interesting and palatable.";
  p2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis saepe aspernatur quas cupiditate, distinctio porro nostrum  est illo! Esse delectus veritatis reiciendis fugiat quaerat blanditiis, cum consequatur optio enim?";
  mainDiv.appendChild(homeContent);
  homeContent.appendChild(img);
  homeContent.appendChild(description);
  description.appendChild(h1);
  p_container.appendChild(p1);
  p_container.appendChild(p2);
  description.appendChild(p_container);
  description.appendChild(h2);
  var descriptionImage = document.querySelector("#image-id");
  descriptionImage.src = _assets_food_jpg__WEBPACK_IMPORTED_MODULE_0__;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menustyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menustyle.css */ "./src/menustyle.css");
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.css */ "./src/about.css");
/* harmony import */ var _reserve_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reserve.css */ "./src/reserve.css");
/* harmony import */ var _assets_juniper_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/juniper.svg */ "./src/assets/juniper.svg");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _reserve__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reserve */ "./src/reserve.js");









var juniperLogo = document.querySelector("#logo");
juniperLogo.src = _assets_juniper_svg__WEBPACK_IMPORTED_MODULE_4__;
var homeBtn = document.querySelector("#home");
var menuBtn = document.querySelector("#menu");
var aboutBtn = document.querySelector("#about");
var reserveBtn = document.querySelector("#reserve");
var mainDiv = document.querySelector("#content");
homeBtn.addEventListener("click", function () {
  clearPage();
  (0,_home__WEBPACK_IMPORTED_MODULE_6__["default"])();
});
menuBtn.addEventListener("click", function () {
  clearPage();
  (0,_menu__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
aboutBtn.addEventListener("click", function () {
  clearPage();
  (0,_about__WEBPACK_IMPORTED_MODULE_7__["default"])();
});
reserveBtn.addEventListener("click", function () {
  clearPage();
  (0,_reserve__WEBPACK_IMPORTED_MODULE_8__["default"])();
});
function clearPage() {
  mainDiv.innerHTML = "";
}
(0,_home__WEBPACK_IMPORTED_MODULE_6__["default"])();

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showMenu)
/* harmony export */ });
function showMenu() {
  var mainDiv = document.querySelector("#content");
  var menuContent = document.createElement("div");
  var menuHeader = document.createElement("div");
  var menuItemsContainer = document.createElement("div");
  var menuItem = document.createElement("div");
  var menuNamePrice = document.createElement("div");
  var menuDescription = document.createElement("div");
  var menuName = document.createElement("div");
  var menuPrice = document.createElement("div");
  menuContent.id = "menu-content";
  menuHeader.id = "menu-header";
  menuItemsContainer.id = "menu-items-container";
  menuItem.id = "menu-item";
  menuNamePrice.id = "menu-name-price";
  menuName.id = "menu-name";
  menuPrice.id = "menu-price";
  menuDescription.id = "menu-description";

  //For listing headers
  var headerItems = ["starters", "mains", "desserts"];
  for (var i = 0; i < headerItems.length; i++) {
    var headerDiv = document.createElement("div");
    headerDiv.setAttribute("id", "header-".concat(i));
    var headerItem = document.createElement("h4");
    headerItem.textContent = headerItems[i];
    headerDiv.appendChild(headerItem);
    menuHeader.appendChild(headerDiv);
  }
  mainDiv.appendChild(menuHeader);

  //For listing starter items
  var starterItems = [{
    name: "shrimp crudo",
    price: 10.99,
    description: "freshly caught shrimp, olive oil, garlic aioli, focaccia"
  }, {
    name: "chicken wings",
    price: 12.99,
    description: "12 crispy wings that come in 3 sauces of your choice, or leave it up to the chef to decide"
  }];
  var startersHeader = menuHeader.querySelector("#header-0");
  if (startersHeader) {
    var _menuItemsContainer = document.createElement("div");
    _menuItemsContainer.setAttribute("id", "menu-items");
    for (var _i = 0; _i < starterItems.length; _i++) {
      var _menuItem = document.createElement("div");
      _menuItem.setAttribute("id", "menu-item-".concat(_i));
      var menuNamePriceContainer = document.createElement("div");
      menuNamePriceContainer.setAttribute("id", "menu-name-price");
      var cardName = document.createElement("div");
      cardName.setAttribute("id", "menu-name");
      cardName.textContent = "".concat(starterItems[_i].name);
      menuNamePriceContainer.appendChild(cardName);
      var cardPrice = document.createElement("div");
      cardPrice.setAttribute("id", "menu-price");
      cardPrice.textContent = "".concat(starterItems[_i].price);
      menuNamePriceContainer.appendChild(cardPrice);
      _menuItem.appendChild(menuNamePriceContainer);
      var cardDesc = document.createElement("div");
      cardDesc.setAttribute("id", "menu-description");
      cardDesc.textContent = "".concat(starterItems[_i].description);
      _menuItem.appendChild(cardDesc);
      _menuItemsContainer.appendChild(_menuItem);
    }
    startersHeader.appendChild(_menuItemsContainer);
  }
  menuContent.appendChild(menuHeader);
  mainDiv.innerHTML = "";
  mainDiv.appendChild(menuContent);
  var mainDishItems = [{
    name: "filet mignon",
    price: 45.99,
    description: "tender filet, mashed potatoes, brocollini"
  }, {
    name: "chicken alfredo",
    price: 20.99,
    description: "grilled chicken, hand-made fettucine, served with rich alfredo sauce and capers"
  }, {
    name: "juniper pizza",
    price: 18.99,
    description: "homemade dough, pepperoni, fresh mozzerella cheese, garlic base, kalamata olives, shitake mushrooms, pesto swirl"
  }, {
    name: "shepards pie",
    price: 21.99,
    description: "our take on the classic shepards pie. beef, peas, carrots, mashed potatoes, and a secret surprise ingredient"
  }, {
    name: "blackened salmon",
    price: 25.99,
    description: "alaskan salmon, grilled leeks, roasted fingerling potatoes, garlic butter"
  }];
  var mainDishHeader = menuHeader.querySelector("#header-1");
  if (mainDishHeader) {
    var _menuItemsContainer2 = document.createElement("div");
    _menuItemsContainer2.setAttribute("id", "menu-items");
    for (var _i2 = 0; _i2 < mainDishItems.length; _i2++) {
      var _menuItem2 = document.createElement("div");
      _menuItem2.setAttribute("id", "menu-item-".concat(_i2));
      var _menuNamePriceContainer = document.createElement("div");
      _menuNamePriceContainer.setAttribute("id", "menu-name-price");
      var _cardName = document.createElement("div");
      _cardName.setAttribute("id", "menu-name");
      _cardName.textContent = "".concat(mainDishItems[_i2].name);
      _menuNamePriceContainer.appendChild(_cardName);
      var _cardPrice = document.createElement("div");
      _cardPrice.setAttribute("id", "menu-price");
      _cardPrice.textContent = "".concat(mainDishItems[_i2].price);
      _menuNamePriceContainer.appendChild(_cardPrice);
      _menuItem2.appendChild(_menuNamePriceContainer);
      var _cardDesc = document.createElement("div");
      _cardDesc.setAttribute("id", "menu-description");
      _cardDesc.textContent = "".concat(mainDishItems[_i2].description);
      _menuItem2.appendChild(_cardDesc);
      _menuItemsContainer2.appendChild(_menuItem2);
    }
    mainDishHeader.appendChild(_menuItemsContainer2);
  }
  menuContent.appendChild(menuHeader);
  mainDiv.innerHTML = "";
  mainDiv.appendChild(menuContent);
  var dessertItems = [{
    name: "olive oil cake",
    price: 8.99,
    description: "decadent and moist cake created with high quality italian olive oil"
  }, {
    name: "chocolate mousse",
    price: 6.99,
    description: "light and fluffy and oh so chocolatey"
  }, {
    name: "tiramisu",
    price: 6.99,
    description: "we're famous for our tiramisu. find out for yourself!"
  }, {
    name: "fresh ice cream",
    price: 4.99,
    description: "two scoops of our seasonal flavors. ask your waiter what's available."
  }];
  var dessertHeader = menuHeader.querySelector("#header-2");
  if (dessertHeader) {
    var _menuItemsContainer3 = document.createElement("div");
    _menuItemsContainer3.setAttribute("id", "menu-items");
    for (var _i3 = 0; _i3 < dessertItems.length; _i3++) {
      var _menuItem3 = document.createElement("div");
      _menuItem3.setAttribute("id", "menu-item-".concat(_i3));
      var _menuNamePriceContainer2 = document.createElement("div");
      _menuNamePriceContainer2.setAttribute("id", "menu-name-price");
      var _cardName2 = document.createElement("div");
      _cardName2.setAttribute("id", "menu-name");
      _cardName2.textContent = "".concat(dessertItems[_i3].name);
      _menuNamePriceContainer2.appendChild(_cardName2);
      var _cardPrice2 = document.createElement("div");
      _cardPrice2.setAttribute("id", "menu-price");
      _cardPrice2.textContent = "".concat(dessertItems[_i3].price);
      _menuNamePriceContainer2.appendChild(_cardPrice2);
      _menuItem3.appendChild(_menuNamePriceContainer2);
      var _cardDesc2 = document.createElement("div");
      _cardDesc2.setAttribute("id", "menu-description");
      _cardDesc2.textContent = "".concat(dessertItems[_i3].description);
      _menuItem3.appendChild(_cardDesc2);
      _menuItemsContainer3.appendChild(_menuItem3);
    }
    dessertHeader.appendChild(_menuItemsContainer3);
  }
  menuContent.appendChild(menuHeader);
  mainDiv.innerHTML = "";
  mainDiv.appendChild(menuContent);
}

/***/ }),

/***/ "./src/reserve.js":
/*!************************!*\
  !*** ./src/reserve.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showReserve)
/* harmony export */ });
var mainDiv = document.querySelector("#content");
function showReserve() {
  var reserveContent = document.createElement("div");
  reserveContent.setAttribute("id", "reserve-content");
  var reserveHeader = document.createElement("h1");
  reserveHeader.textContent = "make a reservation";
  var formDiv = document.createElement("div");
  formDiv.setAttribute("id", "form-element");
  var formElement = document.createElement("form");
  formElement.setAttribute("id", "reserve-form");
  var firstNameDiv = document.createElement("div");
  firstNameDiv.setAttribute("id", "first-name");
  firstNameDiv.textContent = "First Name:";
  var firstNameInput = document.createElement("input");
  firstNameInput.setAttribute("id", "first-name-input");
  var lastNameDiv = document.createElement("div");
  lastNameDiv.setAttribute("id", "last-name");
  lastNameDiv.textContent = "Last Name:";
  var lastNameInput = document.createElement("input");
  lastNameInput.setAttribute("id", "last-name-input");
  firstNameDiv.appendChild(firstNameInput);
  lastNameDiv.appendChild(lastNameInput);
  var partyNumberDiv = document.createElement("div");
  partyNumberDiv.setAttribute("id", "party-number");
  partyNumberDiv.textContent = "Number in Your Party:";
  var partyNumberInput = document.createElement("input");
  partyNumberInput.setAttribute("type", "number");
  partyNumberInput.setAttribute("id", "number-input");
  partyNumberInput.setAttribute("min", "1");
  partyNumberInput.setAttribute("max", "15");
  partyNumberInput.setAttribute("step", "1");
  partyNumberInput.setAttribute("value", "1");
  partyNumberDiv.appendChild(partyNumberInput);
  var dateDiv = document.createElement("div");
  dateDiv.setAttribute("id", "date");
  dateDiv.textContent = "Date:";
  var dateInput = document.createElement("input");
  dateInput.setAttribute("id", "date-input");
  dateInput.setAttribute("type", "date");
  dateDiv.appendChild(dateInput);
  var submitBtn = document.createElement("button");
  submitBtn.setAttribute("id", "submit-btn");
  submitBtn.textContent = "Submit";
  reserveContent.appendChild(reserveHeader);
  formElement.appendChild(firstNameDiv);
  formElement.appendChild(lastNameDiv);
  formElement.appendChild(partyNumberDiv);
  formElement.appendChild(dateDiv);
  formElement.appendChild(submitBtn);
  formDiv.appendChild(formElement);
  reserveContent.appendChild(formDiv);
  mainDiv.appendChild(reserveContent);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/about.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/about.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#about-content {
  display: grid;
  grid-template-columns: 275px 3fr;
  grid-template-rows: 75px 5fr;
  gap: 10px;
  padding: 0px 80px 80px 80px;
}

#about-header {
  grid-area: 1 / 2/ 2/ 3;
  padding-left: 75px;
}

#about-header h1 {
  font-weight: 400;
  border-bottom: 4px solid rgba(28, 29, 24, 0.1);
}

#about-description {
  grid-area: 2 / 2 / 3 / 3;
  padding-left: 75px;
}

#chef-thor {
  border-radius: 30px;
  width: 250px;
  box-shadow: 2px 2px 15px rgba(28, 29, 24, 0.2);
}

#image-container {
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  gap: 10px;
}

#caption {
  font-size: 0.75rem;
  font-style: italic;
}
`, "",{"version":3,"sources":["webpack://./src/about.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,gCAAgC;EAChC,4BAA4B;EAC5B,SAAS;EACT,2BAA2B;AAC7B;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,8CAA8C;AAChD;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,8CAA8C;AAChD;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB","sourcesContent":["#about-content {\n  display: grid;\n  grid-template-columns: 275px 3fr;\n  grid-template-rows: 75px 5fr;\n  gap: 10px;\n  padding: 0px 80px 80px 80px;\n}\n\n#about-header {\n  grid-area: 1 / 2/ 2/ 3;\n  padding-left: 75px;\n}\n\n#about-header h1 {\n  font-weight: 400;\n  border-bottom: 4px solid rgba(28, 29, 24, 0.1);\n}\n\n#about-description {\n  grid-area: 2 / 2 / 3 / 3;\n  padding-left: 75px;\n}\n\n#chef-thor {\n  border-radius: 30px;\n  width: 250px;\n  box-shadow: 2px 2px 15px rgba(28, 29, 24, 0.2);\n}\n\n#image-container {\n  grid-area: 2 / 1 / 3 / 2;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: flex-start;\n  gap: 10px;\n}\n\n#caption {\n  font-size: 0.75rem;\n  font-style: italic;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/menustyle.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menustyle.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#menu-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  height: 70%;
  overflow: auto;
}

#menu-header h4 {
  color: var(--dark-sage);
  background-color: rgba(241, 237, 226, 0.2);
  border-radius: 10px;
  text-align: center;
  font-size: large;
  font-style: italic;
  padding: 10px 0px 10px 0px;
}

#menu-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding: 0px 20px 30px 20px;
  border-bottom: 1px solid #747474;
}

#menu-items:last-child {
  border: none;
}

#menu-name-price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 10px;
}

#menu-name {
  font-style: normal;
  font-size: medium;
  font-weight: 800;
}

#menu-price {
  font-size: 0.8rem;
}

#menu-description {
  display: flex;
  justify-content: start;
  font-size: 0.8rem;
  font-style: italic;
  padding-bottom: 30px;
}
`, "",{"version":3,"sources":["webpack://./src/menustyle.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,0CAA0C;EAC1C,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,2BAA2B;EAC3B,gCAAgC;AAClC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,oBAAoB;AACtB","sourcesContent":["#menu-content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 70%;\n  height: 70%;\n  overflow: auto;\n}\n\n#menu-header h4 {\n  color: var(--dark-sage);\n  background-color: rgba(241, 237, 226, 0.2);\n  border-radius: 10px;\n  text-align: center;\n  font-size: large;\n  font-style: italic;\n  padding: 10px 0px 10px 0px;\n}\n\n#menu-items {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  padding: 0px 20px 30px 20px;\n  border-bottom: 1px solid #747474;\n}\n\n#menu-items:last-child {\n  border: none;\n}\n\n#menu-name-price {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n  padding-bottom: 10px;\n}\n\n#menu-name {\n  font-style: normal;\n  font-size: medium;\n  font-weight: 800;\n}\n\n#menu-price {\n  font-size: 0.8rem;\n}\n\n#menu-description {\n  display: flex;\n  justify-content: start;\n  font-size: 0.8rem;\n  font-style: italic;\n  padding-bottom: 30px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reserve.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reserve.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#reserve-content {
  padding-bottom: 100px;
}

#reserve-content h1 {
  text-align: center;
  font-weight: 400;
}

#reserve-form {
  padding: 50px;
  background-color: var(--whiteAlpha);
  border-radius: 30px;
  font-size: 0.8rem;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 600px;
  gap: 30px;
}

#first-name-input,
#last-name-input {
  width: auto;
  height: 20px;
  border: none;
  margin-left: 20px;
}

#number-input,
#date-input {
  margin-left: 20px;
}

#submit-btn {
  border: none;
  color: var(--dark-sage);
  background-color: var(--sage);
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  width: 100%;
}

#submit-btn:hover {
  color: var(--sage);
  background-color: var(--white);
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/reserve.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,SAAS;AACX;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,6BAA6B;EAC7B,4BAA4B;EAC5B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;EAC9B,eAAe;AACjB","sourcesContent":["#reserve-content {\n  padding-bottom: 100px;\n}\n\n#reserve-content h1 {\n  text-align: center;\n  font-weight: 400;\n}\n\n#reserve-form {\n  padding: 50px;\n  background-color: var(--whiteAlpha);\n  border-radius: 30px;\n  font-size: 0.8rem;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  width: 600px;\n  gap: 30px;\n}\n\n#first-name-input,\n#last-name-input {\n  width: auto;\n  height: 20px;\n  border: none;\n  margin-left: 20px;\n}\n\n#number-input,\n#date-input {\n  margin-left: 20px;\n}\n\n#submit-btn {\n  border: none;\n  color: var(--dark-sage);\n  background-color: var(--sage);\n  padding: 10px 20px 10px 20px;\n  border-radius: 10px;\n  width: 100%;\n}\n\n#submit-btn:hover {\n  color: var(--sage);\n  background-color: var(--white);\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/platter.jpg */ "./src/assets/platter.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Serif+Display:ital,wght@0,100..900;1,100..900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.noto-serif display-<uniquifier > {
  font-family: "Noto Serif Display", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings: "width" 100;
}

:root {
  --white: #f1ede2;
  --whiteAlpha: rgba(241, 237, 226, 0.2);
  --dark-sage: #1c1d18;
  --sage: #797d62;
  --sageAlpha: rgba(121, 125, 98, 0.9);
  --sage-hover: hsl(69, 12%, 46%);
  --clay: #e2c5b5;
  --clayAlpha: rgba(226, 197, 181, 0.5);
}

body {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  backdrop-filter: blur(5px);
  /* https://pixabay.com/photos/platter-food-starters-meal-feast-2009590/ */
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  height: 100%;
}
#hero {
  height: 100vh;
}

#name {
  display: flex;
  align-items: center;
  font-family: "Noto Serif Display", serif;
  font-weight: 300;
  font-size: 3rem;
  color: var(--dark-sage);
}

#logo {
  width: 100px;
  height: 100px;
}

#header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px;
  align-items: center;
  background-color: var(--sageAlpha);
  border-bottom: 20px solid var(--clayAlpha);
}

#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
}

#nav > button {
  flex: 1;
  color: var(--dark-sage);
  background-color: transparent;
  width: auto;
  height: 100%;
  border: none;
  font-family: "Noto Serif Display", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.2rem;
  transition: ease-in-out 200ms;
}

#nav > button:hover {
  color: var(--clay);
  cursor: pointer;
  font-size: 1.25rem;
  border-bottom: 5px solid var(--clay);
}

#content {
  display: flex;
  justify-content: center;
  font-family: "Noto Serif Display", serif;
  color: var(--dark-sage);
  background-color: rgba(186, 186, 186, 0.9);
  padding: 30px;
}

#home-content {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 100px;
  justify-content: center;
  align-items: center;
  width: 80vw;
}

#image-container {
  grid-area: 1 / 1/ 2 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

#image-id {
  height: 500px;
  border-radius: 30px;
  opacity: 0.78;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 15px rgba(28, 29, 24, 0.4);
}

#description {
  grid-area: 1 / 2 / 1 / 3;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: "Noto Serif Display", serif;
  font-size: 1rem;
  font-weight: 300;
  height: 50vh;
  overflow: auto;
}

#description > h1 {
  font-size: 3rem;
  font-weight: 300;
  padding-bottom: 20px;
}

#description > h2 {
  font-size: 1.75rem;
  font-weight: 300;
  padding-bottom: 20px;
}

p {
  padding-bottom: 20px;
}

a.reserve {
  color: var(--dark-sage);
  text-decoration: none;
  font-weight: 400;
  font-style: italic;
}

a.reserve:hover {
  text-decoration: underline;
  cursor: pointer;
  color: var(--dark-sage);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,wCAAwC;EACxC,yBAAyB;EACzB,qBAAqB;EACrB,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;EAChB,sCAAsC;EACtC,oBAAoB;EACpB,eAAe;EACf,oCAAoC;EACpC,+BAA+B;EAC/B,eAAe;EACf,qCAAqC;AACvC;;AAEA;EACE,yDAA6C;EAC7C,0BAA0B;EAC1B,yEAAyE;EACzE,4BAA4B;EAC5B,sBAAsB;EACtB,4BAA4B;EAC5B,SAAS;EACT,UAAU;EACV,YAAY;AACd;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,wCAAwC;EACxC,gBAAgB;EAChB,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;EACzB,mBAAmB;EACnB,kCAAkC;EAClC,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,OAAO;EACP,uBAAuB;EACvB,6BAA6B;EAC7B,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,wCAAwC;EACxC,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,wCAAwC;EACxC,uBAAuB;EACvB,0CAA0C;EAC1C,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,UAAU;EACV,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,8CAA8C;AAChD;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;EACf,wCAAwC;EACxC,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,eAAe;EACf,uBAAuB;AACzB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Serif+Display:ital,wght@0,100..900;1,100..900&display=swap\");\n\n.noto-serif display-<uniquifier > {\n  font-family: \"Noto Serif Display\", serif;\n  font-optical-sizing: auto;\n  font-weight: <weight>;\n  font-style: normal;\n  font-variation-settings: \"width\" 100;\n}\n\n:root {\n  --white: #f1ede2;\n  --whiteAlpha: rgba(241, 237, 226, 0.2);\n  --dark-sage: #1c1d18;\n  --sage: #797d62;\n  --sageAlpha: rgba(121, 125, 98, 0.9);\n  --sage-hover: hsl(69, 12%, 46%);\n  --clay: #e2c5b5;\n  --clayAlpha: rgba(226, 197, 181, 0.5);\n}\n\nbody {\n  background-image: url(\"./assets/platter.jpg\");\n  backdrop-filter: blur(5px);\n  /* https://pixabay.com/photos/platter-food-starters-meal-feast-2009590/ */\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n#hero {\n  height: 100vh;\n}\n\n#name {\n  display: flex;\n  align-items: center;\n  font-family: \"Noto Serif Display\", serif;\n  font-weight: 300;\n  font-size: 3rem;\n  color: var(--dark-sage);\n}\n\n#logo {\n  width: 100px;\n  height: 100px;\n}\n\n#header {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 200px;\n  align-items: center;\n  background-color: var(--sageAlpha);\n  border-bottom: 20px solid var(--clayAlpha);\n}\n\n#nav {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 100px;\n}\n\n#nav > button {\n  flex: 1;\n  color: var(--dark-sage);\n  background-color: transparent;\n  width: auto;\n  height: 100%;\n  border: none;\n  font-family: \"Noto Serif Display\", serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 1.2rem;\n  transition: ease-in-out 200ms;\n}\n\n#nav > button:hover {\n  color: var(--clay);\n  cursor: pointer;\n  font-size: 1.25rem;\n  border-bottom: 5px solid var(--clay);\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n  font-family: \"Noto Serif Display\", serif;\n  color: var(--dark-sage);\n  background-color: rgba(186, 186, 186, 0.9);\n  padding: 30px;\n}\n\n#home-content {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  gap: 100px;\n  justify-content: center;\n  align-items: center;\n  width: 80vw;\n}\n\n#image-container {\n  grid-area: 1 / 1/ 2 / 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#image-id {\n  height: 500px;\n  border-radius: 30px;\n  opacity: 0.78;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 2px 2px 15px rgba(28, 29, 24, 0.4);\n}\n\n#description {\n  grid-area: 1 / 2 / 1 / 3;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: \"Noto Serif Display\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  height: 50vh;\n  overflow: auto;\n}\n\n#description > h1 {\n  font-size: 3rem;\n  font-weight: 300;\n  padding-bottom: 20px;\n}\n\n#description > h2 {\n  font-size: 1.75rem;\n  font-weight: 300;\n  padding-bottom: 20px;\n}\n\np {\n  padding-bottom: 20px;\n}\n\na.reserve {\n  color: var(--dark-sage);\n  text-decoration: none;\n  font-weight: 400;\n  font-style: italic;\n}\n\na.reserve:hover {\n  text-decoration: underline;\n  cursor: pointer;\n  color: var(--dark-sage);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/about.css":
/*!***********************!*\
  !*** ./src/about.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/menustyle.css":
/*!***************************!*\
  !*** ./src/menustyle.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menustyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./menustyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/menustyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menustyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menustyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menustyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menustyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/reserve.css":
/*!*************************!*\
  !*** ./src/reserve.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reserve_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reserve.css */ "./node_modules/css-loader/dist/cjs.js!./src/reserve.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reserve_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reserve_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reserve_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reserve_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/chefThor.jpg":
/*!*********************************!*\
  !*** ./src/assets/chefThor.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chefThor.jpg";

/***/ }),

/***/ "./src/assets/food.jpg":
/*!*****************************!*\
  !*** ./src/assets/food.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "food.jpg";

/***/ }),

/***/ "./src/assets/juniper.svg":
/*!********************************!*\
  !*** ./src/assets/juniper.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "juniper.svg";

/***/ }),

/***/ "./src/assets/platter.jpg":
/*!********************************!*\
  !*** ./src/assets/platter.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "platter.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=bundle25a6a9ff8a359eaeb129.js.map
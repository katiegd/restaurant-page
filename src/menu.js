export default function showMenu() {
  const mainDiv = document.querySelector("#content");
  const menuContent = document.createElement("div");
  const menuHeader = document.createElement("div");
  const menuItemsContainer = document.createElement("div");
  const menuItem = document.createElement("div");
  const menuNamePrice = document.createElement("div");
  const menuDescription = document.createElement("div");
  const menuName = document.createElement("div");
  const menuPrice = document.createElement("div");

  menuContent.id = "menu-content";
  menuHeader.id = "menu-header";
  menuItemsContainer.id = "menu-items-container";
  menuItem.id = "menu-item";
  menuNamePrice.id = "menu-name-price";
  menuName.id = "menu-name";
  menuPrice.id = "menu-price";
  menuDescription.id = "menu-description";

  //For listing headers
  const headerItems = ["starters", "mains", "desserts"];
  for (let i = 0; i < headerItems.length; i++) {
    let headerDiv = document.createElement("div");
    headerDiv.setAttribute("id", `header-${i}`);
    let headerItem = document.createElement("h4");
    headerItem.textContent = headerItems[i];

    headerDiv.appendChild(headerItem);
    menuHeader.appendChild(headerDiv);
  }
  mainDiv.appendChild(menuHeader);

  //For listing starter items
  const starterItems = [
    {
      name: "shrimp crudo",
      price: 10.99,
      description: "freshly caught shrimp, olive oil, garlic aioli, focaccia",
    },
    {
      name: "chicken wings",
      price: 12.99,
      description:
        "12 crispy wings that come in 3 sauces of your choice, or leave it up to the chef to decide",
    },
  ];
  const startersHeader = menuHeader.querySelector("#header-0");
  if (startersHeader) {
    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.setAttribute("id", "menu-items");

    for (let i = 0; i < starterItems.length; i++) {
      const menuItem = document.createElement("div");
      menuItem.setAttribute("id", `menu-item-${i}`);

      let menuNamePriceContainer = document.createElement("div");
      menuNamePriceContainer.setAttribute("id", "menu-name-price");

      let cardName = document.createElement("div");
      cardName.setAttribute("id", "menu-name");
      cardName.textContent = `${starterItems[i].name}`;

      menuNamePriceContainer.appendChild(cardName);

      let cardPrice = document.createElement("div");
      cardPrice.setAttribute("id", "menu-price");
      cardPrice.textContent = `${starterItems[i].price}`;

      menuNamePriceContainer.appendChild(cardPrice);
      menuItem.appendChild(menuNamePriceContainer);

      let cardDesc = document.createElement("div");
      cardDesc.setAttribute("id", "menu-description");
      cardDesc.textContent = `${starterItems[i].description}`;

      menuItem.appendChild(cardDesc);

      menuItemsContainer.appendChild(menuItem);
    }
    startersHeader.appendChild(menuItemsContainer);
  }

  menuContent.appendChild(menuHeader);

  mainDiv.innerHTML = "";
  mainDiv.appendChild(menuContent);

  const mainDishItems = [
    {
      name: "filet mignon",
      price: 45.99,
      description: "tender filet, mashed potatoes, brocollini",
    },
    {
      name: "chicken alfredo",
      price: 20.99,
      description:
        "grilled chicken, hand-made fettucine, served with rich alfredo sauce and capers",
    },
    {
      name: "juniper pizza",
      price: 18.99,
      description:
        "homemade dough, pepperoni, fresh mozzerella cheese, garlic base, kalamata olives, shitake mushrooms, pesto swirl",
    },
    {
      name: "shepards pie",
      price: 21.99,
      description:
        "our take on the classic shepards pie. beef, peas, carrots, mashed potatoes, and a secret surprise ingredient",
    },
    {
      name: "blackened salmon",
      price: 25.99,
      description:
        "alaskan salmon, grilled leeks, roasted fingerling potatoes, garlic butter",
    },
  ];

  const mainDishHeader = menuHeader.querySelector("#header-1");
  if (mainDishHeader) {
    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.setAttribute("id", "menu-items");

    for (let i = 0; i < mainDishItems.length; i++) {
      const menuItem = document.createElement("div");
      menuItem.setAttribute("id", `menu-item-${i}`);

      let menuNamePriceContainer = document.createElement("div");
      menuNamePriceContainer.setAttribute("id", "menu-name-price");

      let cardName = document.createElement("div");
      cardName.setAttribute("id", "menu-name");
      cardName.textContent = `${mainDishItems[i].name}`;

      menuNamePriceContainer.appendChild(cardName);

      let cardPrice = document.createElement("div");
      cardPrice.setAttribute("id", "menu-price");
      cardPrice.textContent = `${mainDishItems[i].price}`;

      menuNamePriceContainer.appendChild(cardPrice);
      menuItem.appendChild(menuNamePriceContainer);

      let cardDesc = document.createElement("div");
      cardDesc.setAttribute("id", "menu-description");
      cardDesc.textContent = `${mainDishItems[i].description}`;

      menuItem.appendChild(cardDesc);

      menuItemsContainer.appendChild(menuItem);
    }
    mainDishHeader.appendChild(menuItemsContainer);
  }

  menuContent.appendChild(menuHeader);

  mainDiv.innerHTML = "";
  mainDiv.appendChild(menuContent);

  const dessertItems = [
    {
      name: "olive oil cake",
      price: 8.99,
      description:
        "decadent and moist cake created with high quality italian olive oil",
    },
    {
      name: "chocolate mousse",
      price: 6.99,
      description: "light and fluffy and oh so chocolatey",
    },
    {
      name: "tiramisu",
      price: 6.99,
      description: "we're famous for our tiramisu. find out for yourself!",
    },
    {
      name: "fresh ice cream",
      price: 4.99,
      description:
        "two scoops of our seasonal flavors. ask your waiter what's available.",
    },
  ];

  const dessertHeader = menuHeader.querySelector("#header-2");
  if (dessertHeader) {
    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.setAttribute("id", "menu-items");

    for (let i = 0; i < dessertItems.length; i++) {
      const menuItem = document.createElement("div");
      menuItem.setAttribute("id", `menu-item-${i}`);

      let menuNamePriceContainer = document.createElement("div");
      menuNamePriceContainer.setAttribute("id", "menu-name-price");

      let cardName = document.createElement("div");
      cardName.setAttribute("id", "menu-name");
      cardName.textContent = `${dessertItems[i].name}`;

      menuNamePriceContainer.appendChild(cardName);

      let cardPrice = document.createElement("div");
      cardPrice.setAttribute("id", "menu-price");
      cardPrice.textContent = `${dessertItems[i].price}`;

      menuNamePriceContainer.appendChild(cardPrice);
      menuItem.appendChild(menuNamePriceContainer);

      let cardDesc = document.createElement("div");
      cardDesc.setAttribute("id", "menu-description");
      cardDesc.textContent = `${dessertItems[i].description}`;

      menuItem.appendChild(cardDesc);

      menuItemsContainer.appendChild(menuItem);
    }
    dessertHeader.appendChild(menuItemsContainer);
  }

  menuContent.appendChild(menuHeader);

  mainDiv.innerHTML = "";
  mainDiv.appendChild(menuContent);
}

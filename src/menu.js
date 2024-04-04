const mainDiv = document.querySelector("#content");
const menuContent = document.createElement("div");

function showMenu() {
  mainDiv.innerHTML = `<div id="menu-content">
    <div id="menu-header"><h3>starters</h3></div>
    <div id="menu-items">
      <div id="menu-item">
        <div id="menu-name-price">
          <div id="menu-name">shrimp crudo</div>
          <div id="menu-price">$10.99</div>
        </div>
        <div id="menu-description">
          freshly caught shrimp, olive oil, garlic aioli, focaccia
        </div>
      </div>
      <div id="menu-item">
        <div id="menu-name-price">
          <div id="menu-name">chicken wings</div>
          <div id="menu-price">$12.99</div>
        </div>
        <div id="menu-description">
          12 crispy wings that come in 3 sauces of your choice, or leave it up
          to the chef to decide
        </div>
      </div>
    </div>
    <div id="menu-header"><h3>mains</h3></div>
    <div id="menu-items">
      <div id="menu-item">
        <div id="menu-name-price">
          <div id="menu-name">chicken alfredo</div>
          <div id="menu-price">$20.99</div>
        </div>
        <div id="menu-description">
          grilled chicken, hand-made fettucine, served with rich alfredo sauce
          and capers
        </div>
      </div>
      <div id="menu-item">
        <div id="menu-name-price">
          <div id="menu-name">juniper pizza</div>
          <div id="menu-price">$18.99</div>
        </div>
        <div id="menu-description">
          homemade dough, pepperoni, fresh mozzerella cheese, garlic base,
          kalamata olives, shitake mushrooms, pesto swirl
        </div>
      </div>
      <div id="menu-item">
        <div id="menu-name-price">
          <div id="menu-name">shepards pie</div>
          <div id="menu-price">$19.99</div>
        </div>
        <div id="menu-description">
          our take on the classic shepards pie. beef, peas, carrots, mashed
          potatoes, and a secret surprise ingredient
        </div>
      </div>
      <div id="menu-item">
        <div id="menu-name-price">
          <div id="menu-name">blacked salmon</div>
          <div id="menu-price">$25.99</div>
        </div>
        <div id="menu-description">
          alaskan salmon, grilled leeks, roasted fingerling potatoes, garlic
          butter
        </div>
      </div>
    </div>
    <div id="menu-header"><h3>dessert</h3></div>
    <div id="menu-items">
      <div id="menu-item">
        <div id="menu-name-price">
          <div id="menu-name">olive oil cake</div>
          <div id="menu-price">$8.99</div>
        </div>
        <div id="menu-description">
          decadent and moist cake created with high quality italian olive oil
        </div>
      </div>
      <div id="menu-item">
        <div id="menu-name-price">
          <div id="menu-name">chocolate mousse</div>
          <div id="menu-price">$6.99</div>
        </div>
        <div id="menu-description">light and fluffy and oh so chocolatey</div>
      </div>
      <div id="menu-item">
        <div id="menu-name-price">
          <div id="menu-name">tiramisu</div>
          <div id="menu-price">$9.99</div>
        </div>
        <div id="menu-description">
          we're famous for our tiramisu. find out for yourself!
        </div>
      </div>
      <div id="menu-item">
        <div id="menu-name-price">
          <div id="menu-name">fresh ice cream</div>
          <div id="menu-price">$4.99</div>
        </div>
        <div id="menu-description">
          two scoops of our seasonal flavors. ask your waiter what's available.
        </div>
      </div>
    </div>
  </div>
`;
}

export default showMenu;

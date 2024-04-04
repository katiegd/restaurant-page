import food from "./assets/food.jpg";

export default function loadHome() {
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p_container = document.createElement("div");
  const description = document.createElement("div");
  const mainDiv = document.querySelector("#content");
  const homeContent = document.createElement("div");

  homeContent.setAttribute("id", "home-content");
  img.setAttribute("id", "image-id");
  p_container.setAttribute("id", "pcontainer");
  description.setAttribute("id", "description");

  h1.textContent = "welcome to juniper.";
  h2.innerHTML = `Join us for an unforgettable dining experience.
  <a class="reserve" href="">Reserve a table.</a>`;
  p1.textContent =
    "Our James Beard award winning head chef Thor Katison works hard to curate a new seasonal menu every month. We source fresh, local ingredients and combine them in creative ways that are both interesting and palatable.";
  p2.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis saepe aspernatur quas cupiditate, distinctio porro nostrum  est illo! Esse delectus veritatis reiciendis fugiat quaerat blanditiis, cum consequatur optio enim?";

  mainDiv.appendChild(homeContent);
  homeContent.appendChild(img);
  homeContent.appendChild(description);
  description.appendChild(h1);
  p_container.appendChild(p1);
  p_container.appendChild(p2);
  description.appendChild(p_container);
  description.appendChild(h2);

  const descriptionImage = document.querySelector("#image-id");
  descriptionImage.src = food;
}

import thorImage from "./assets/chefThor.jpg";

const chefThor = document.createElement("img");
chefThor.setAttribute("id", "chef-thor");
chefThor.setAttribute("alt", "Chef Thor critiquing the proscioutto.");
chefThor.src = thorImage;
const imageContainer = document.createElement("div");
imageContainer.setAttribute("id", "image-container");

const chefThorCaption = document.createElement("div");
chefThorCaption.setAttribute("id", "caption");
chefThorCaption.textContent = "Chef Thor critiquing the prosciutto.";

export default function showAbout() {
  const mainDiv = document.querySelector("#content");
  const aboutHeader = document.createElement("div");
  const aboutContentMain = document.createElement("div");
  const aboutContent = document.createElement("div");
  const aboutDescription = document.createElement("div");
  aboutDescription.setAttribute("id", "about-description");
  aboutContentMain.setAttribute("id", "about-content-main");
  aboutContent.setAttribute("id", "about-content");
  aboutHeader.setAttribute("id", "about-header");

  imageContainer.appendChild(chefThor);
  imageContainer.appendChild(chefThorCaption);

  let header = document.createElement("h1");
  header.textContent = "about us";

  let text1 =
    "In 2020, a trendsetting restaurant helmed by acclaimed Chef Thor Katison and talented Sous Chef Charlotte Kilesdotter burst onto the culinary scene, captivating diners with its innovative approach to local ingredients.";
  let text2 =
    "Situated in a vibrant urban locale, the restaurant quickly became renowned for its commitment to sourcing the freshest seasonal produce, showcasing the region's bounty in captivating and accessible ways. With a focus on sustainability and seasonality, Chef Thor and Sous Chef Charlotte craft a menu that reflects their culinary philosophy, offering dishes that range from inventive small plates to hearty mains, all designed to delight the palate and celebrate the flavors of the local community.";
  let text3 =
    "Stepping into the restaurant, guests are enveloped in a welcoming ambiance that seamlessly blends modern elegance with rustic charm. From impeccable service to a thoughtfully curated beverage selection, every aspect of the dining experience is meticulously crafted to enhance enjoyment. Whether indulging in a seafood risotto brimming with local catches or savoring a perfectly seared steak paired with seasonal produce, diners are treated to an unforgettable journey of flavors and textures that epitomize culinary excellence.";

  let paragraph1 = document.createElement("p");
  paragraph1.setAttribute("id", "p1");
  paragraph1.textContent = text1;

  let paragraph2 = document.createElement("p");
  paragraph2.setAttribute("id", "p2");
  paragraph2.textContent = text2;

  let paragraph3 = document.createElement("p");
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

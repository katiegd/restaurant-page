import "./style.css";
import "./menustyle.css";
import "./about.css";
import juniper from "./assets/juniper.svg";
import showMenu from "./menu";
import loadHome from "./home";
import showAbout from "./about";

const juniperLogo = document.querySelector("#logo");
juniperLogo.src = juniper;
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const mainDiv = document.querySelector("#content");

homeBtn.addEventListener("click", () => {
  clearPage();
  loadHome();
});

menuBtn.addEventListener("click", () => {
  clearPage();
  showMenu();
});

aboutBtn.addEventListener("click", () => {
  clearPage();
  showAbout();
});

function clearPage() {
  mainDiv.innerHTML = "";
}
showAbout();
